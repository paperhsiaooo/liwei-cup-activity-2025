# CLAUDE.md — liwei-cup-nextjs

> 2025 力維盃排球錦標賽（リキイ 盃）**活動官網**。目前是**單頁 Landing
> Page**：只有首頁 `/`，加上 `robots.txt` /
> `sitemap.xml`。商品、購物車、結帳、金流、會員等電商功能已移出本專案，位於同層的
> `../liwei-cup-e-commerce`（獨立 Next.js 專案）。本專案不再有 `src/app/api`、
> `src/apis`、auth / cart / checkout 相關程式碼。

## 指令

```bash
nvm use                      # Node v22.20.0 (見 .nvmrc)
yarn dev                     # 開發伺服器 localhost:3000
yarn build                   # Next 建置
yarn start                   # 以生產模式啟動（需先 build）
yarn lint                    # ESLint
yarn test                    # Jest watch mode
yarn test:ci                 # CI 模式 + coverage
yarn test:coverage           # 單次 coverage 報告

yarn cf:build                # OpenNext 打包成 Cloudflare Worker
yarn cf:preview              # 本機以 workerd 預覽
yarn cf:deploy               # 打包並部署到 Cloudflare Workers
```

執行單一測試：

```bash
npx jest src/sections/root/qa/components/__tests__/qa-item.test.jsx
```

## 專案架構

```
src/
├── app/
│   ├── layout.jsx            # 根 Layout：字型、metadata、JSON-LD、PostHogProvider、Footer、GA
│   ├── index.css             # Tailwind v4 @theme（色票、字型、1440 breakpoint）+ 共用 class
│   ├── (index)/page.jsx      # 首頁（force-static）
│   ├── robots.js             # SEO robots（force-static）
│   └── sitemap.js            # SEO sitemap（force-static）
│
├── sections/root/            # 首頁各區塊（由 page.jsx 依序組合）
│   ├── main/                 # 主視覺 + CountDownTimer（react-timer-hook）
│   ├── slogan/               # 標語
│   ├── memory/               # 賽事回憶（純視覺排版）
│   ├── address/              # 場地／日期／距離／時長資訊卡
│   ├── declarations/         # 應戰宣言：CountDownTimer + Music + 宣言卡牆
│   │   ├── components/       # card-container（RSC 抓 CDN 資料）、card-list、card
│   │   └── style/index.css   # 跑馬燈 keyframes
│   ├── music/                # Spotify embed 包裝
│   ├── qa/                   # FAQ 問答（qa-container / qa-item）
│   └── footer/               # Footer（由 layout.jsx 直接掛載）
│
├── components/spotify-embed.jsx   # 唯一的共用元件
├── provider/post-hog-provider.js  # PostHog 初始化（僅自動 pageview）
├── constants/                # site（SITE_URL）、url（CDN base）、version（CDN 版號）
└── lib/utils.js              # cn() = twMerge(clsx(...))
```

根目錄重點檔案：

| 用途                           | 路徑                                     |
| ------------------------------ | ---------------------------------------- |
| CSP（Report-Only）+ nonce      | `middleware.ts`                          |
| 安全標頭、圖片白名單           | `next.config.mjs`                        |
| Cloudflare Workers 部署設定    | `open-next.config.ts` / `wrangler.jsonc` |
| 靜態資產 Cache-Control         | `public/_headers`                        |
| Jest 設定（coverage 門檻 70%） | `jest.config.js` / `jest.setup.js`       |
| shadcn/ui 設定（目前無元件）   | `components.json`                        |

## 重要慣例

### 語言與命名

- **JavaScript（.js/.jsx）**，非 TypeScript（例外：`middleware.ts`）
- 元件檔 `kebab-case.jsx`；邏輯檔 `kebab-case.js`
- 每個 section 目錄以 `index.js`
  匯出（`export { default as Xxx } from './xxx'`）
- Import 排序由 `eslint-plugin-simple-import-sort` 處理

### UI 框架

**只能使用 shadcn/ui**，禁止其他 UI 框架（MUI、Ant Design、Chakra
UI 等）。目前沒有任何 shadcn 元件在用（全部已清掉），需要時
`npx shadcn@latest add <component>`，會裝進 `src/components/ui/`。

### 樣式

- Tailwind CSS v4，設定寫在 `src/app/index.css` 的 `@theme`（**沒有**
  `tailwind.config`）
- 色票：`green-primary #71f57c`、`blue-primary #233145`、`orange-primary #fa7025`、
  `gray-primary #696b70`、`yellow-primary #ffcc05`
- shadcn token 只保留實際用到的五個：`background`、`foreground`、`border`、
  `ring`、`muted-foreground`（body 底色/文字色、`border-t`、Footer 版權文字）
- 字型 class：`font-anton`、`font-antonio`、`font-noto-sans-tc`
  （`font-noto-sans-jp` 保留但指向 Noto Sans TC）
- 斷點只有一個自訂值 **`1440:`**，行動版優先，桌機以 `1440:` 覆寫
- 共用 class：`.root`、`.wrapper`

### Prettier（`prettier.config.js`）

無分號、單引號、trailing comma `all`、printWidth 80、`arrowParens: 'avoid'`、
`proseWrap: 'always'`（Markdown 會自動換行）。

### 元件拆分

Server Component 預設；需要互動或瀏覽器 API 才加 `'use client'` （目前只有
`card-list`、`qa-item`、`countDownTimer`、`post-hog-provider`）。

### `ponytail:` 註解

程式碼中的 `// ponytail:` 註解標記**刻意的簡化**及其升級路徑（例如
`open-next.config.ts` 的 static assets cache、首頁的
`force-static`）。修改相關邏輯前先讀該註解。

## 資料來源

宣言資料在**建置時**從 jsDelivr
CDN 取得（`src/sections/root/declarations/components/card-container.jsx`）：

```
{URL.BattleListCDN}{VERSION.MemberDeclarationsCDN}/website/declaration_data.json
{URL.BattleListCDN}{VERSION.BattleListCDN}/DeclarationsList.json
```

- CDN repo：`github.com/paperhsiaooo/liwei-cup-static-data`（同層
  `../liwei-cup-static-data`）
- 更新資料 = 改 `src/constants/version.js` 版號後**重新部署**
- 抓取失敗直接讓 build 失敗（避免上線空白宣言區），逾時 5 秒

## 部署

OpenNext → Cloudflare Workers：

```
yarn cf:build    # next build → .open-next/worker.js + .open-next/assets
yarn cf:deploy   # build + wrangler deploy
```

- `open-next.config.ts` 使用 `staticAssetsIncrementalCache` +
  `enableCacheInterception` → 全站靜態預渲染，直接由 assets 回應，不進 Next
  server
- 需要執行期 ISR（不重新部署就更新資料）時，改用 `r2IncrementalCache` 並把首頁的
  `export const dynamic = 'force-static'` 換成 `revalidate`

## SEO

- `src/app/layout.jsx`：完整 metadata（title template、OG、Twitter
  card、robots、icons）
  - 三組 JSON-LD（`Organization`、`WebSite`、`SportsEvent`）
- `src/app/(index)/page.jsx`：`alternates.canonical`
- `SITE_URL` 來自 `src/constants/site.js`（`NEXT_PUBLIC_SITE_URL`，預設
  `https://2025.liwei-cup.com`）
- 文字內容一律寫在 HTML（不靠 client 渲染），視覺隱藏用 `sr-only` 的 `<h1>/<h2>`
- 稽核紀錄見 `docs/SEO-OPTIMIZATION-SUMMARY.md`

## 測試

- **Jest + Testing Library**，環境 jsdom，coverage 門檻 **70%**
- 測試檔放在 `__tests__/` 目錄，現有：`card-list.test.jsx`、`qa-item.test.jsx`
- 目前沒有 E2E / 元件測試設定；需要時再裝 Playwright

## 環境變數

全部可選，本機不設定也能跑。`.env.example` 與程式碼實際讀取的變數一致：

| 變數                       | 用途                                                                               |
| -------------------------- | ---------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`     | 站台正式網址，影響 metadata / sitemap / JSON-LD，預設 `https://2025.liwei-cup.com` |
| `NEXT_PUBLIC_GA_ID`        | Google Analytics（僅 production 載入）                                             |
| `NEXT_PUBLIC_POSTHOG_KEY`  | PostHog analytics，未設定則不初始化                                                |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog host，預設 `https://us.i.posthog.com`                                      |
