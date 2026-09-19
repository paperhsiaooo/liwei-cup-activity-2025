import { NextResponse, type NextRequest } from 'next/server'

function generateNonce() {
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  // Base64url encode
  const bin = String.fromCharCode(...bytes)
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

export function middleware(req: NextRequest) {
  const nonce = generateNonce()
  const isProd = process.env.NODE_ENV === 'production'

  const connectSchemes = isProd ? 'https:' : 'http: https: ws: wss:'

  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "img-src 'self' data: blob: https://cdn.jsdelivr.net",
    "font-src 'self' data: https://fonts.gstatic.com",
    // Phase 1: keep inline styles allowed; plan to migrate to nonce and remove this.
    "style-src 'self' https: 'unsafe-inline'",
    // Phase 1: allow strict-dynamic with a nonce; keep known analytics domains for compatibility.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://www.google-analytics.com https://us.i.posthog.com https://us-assets.i.posthog.com`,
    `connect-src 'self' ${connectSchemes} https://www.google-analytics.com https://us.i.posthog.com`,
    'upgrade-insecure-requests',
  ].join('; ')

  // Forward the nonce to the app via request headers
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-nonce', nonce)

  const res = NextResponse.next({ request: { headers: requestHeaders } })
  // Report-Only first to collect violations safely
  res.headers.set('Content-Security-Policy-Report-Only', csp)
  // Also surface nonce on the response for debugging (remove later if undesired)
  res.headers.set('x-nonce', nonce)

  return res
}

export const config = {
  matcher: ['/:path*'],
}

