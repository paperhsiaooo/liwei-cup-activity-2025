# 2025 力維盃錦標賽官網（Next.js）

以 Next.js 15 App Router 打造的
**2025 力維盃 × リキイ 盃排球錦標賽**活動官網。整站為**單頁 Landing
Page**，全靜態預渲染後以 OpenNext 部署到 Cloudflare Workers。

> 商品、購物車、結帳與金流等電商功能已移出本專案，改由同層的
> `../liwei-cup-e-commerce` 獨立維運。

## 亮點功能

- **單頁敘事式首頁**：主視覺、倒數計時、標語、賽事回憶、場地資訊、應戰宣言牆、Spotify 播放清單與 Q&A 一頁到底。
- **應戰宣言牆**：Server Component 在**建置時**從 jsDelivr
  CDN（`liwei-cup-static-data`）取得宣言資料與選項，前端以 CSS 跑馬燈卡片牆呈現。
- **全靜態輸出**：首頁 `force-static`，OpenNext 搭配 static assets incremental
  cache，請求直接由 Cloudflare assets 回應，不進 Next server。
- **SEO 完整覆蓋**：metadata / OpenGraph / Twitter
  card、三組 JSON-LD（Organization、WebSite、SportsEvent）、`robots.txt`、`sitemap.xml`、canonical。
- **追蹤分析**：PostHog（自動 pageview）與 Google Analytics（僅 production）。
- **安全標頭**：`next.config.mjs`
  設定 HSTS、X-Content-Type-Options、X-Frame-Options、Referrer-Policy、Permissions-Policy；`middleware.ts`
  以 nonce 產生 `Content-Security-Policy-Report-Only` 收集違規。

## 技術堆疊

- **核心框架**：Next.js 15.3（App Router）、React 19
- **語言與環境**：JavaScript（`.js` / `.jsx`）、Node.js v22.20.0（`.nvmrc`）
- **樣式**：Tailwind CSS v4（CSS-first `@theme`）、`clsx` + `tailwind-merge`
- **部署**：OpenNext（`@opennextjs/cloudflare`）+ Wrangler → Cloudflare Workers
- **追蹤**：PostHog、Google Analytics（`@next/third-parties`）
- **品質**：ESLint（simple-import-sort、React Hooks）、Prettier、Jest + Testing
  Library

執行期依賴只有 8 個：`next`、`react`、`react-dom`、`@next/third-parties`、
`posthog-js`、`react-timer-hook`、`clsx`、`tailwind-merge`。

> ⚠️ **UI 政策**：本專案僅允許使用 shadcn/ui，禁止 Material-UI、Ant
> Design、Chakra UI 等其他 UI Framework。目前沒有任何 shadcn 元件在用，需要時以
> `npx shadcn@latest add <component>` 加入（`components.json` 已設定好）。

## 快速開始

1. **切換 Node 版本**

   ```bash
   nvm use
   ```

2. **安裝套件**

   ```bash
   yarn install
   ```

3. **設定環境變數**（全部可選，本機不設定也能跑）

   ```bash
   cp .env.example .env.local
   ```

   | 變數                       | 說明                                                                               |
   | -------------------------- | ---------------------------------------------------------------------------------- |
   | `NEXT_PUBLIC_SITE_URL`     | 站台正式網址，預設 `https://2025.liwei-cup.com`；影響 metadata、sitemap、JSON-LD。 |
   | `NEXT_PUBLIC_GA_ID`        | Google Analytics GA4 代碼（僅 production 載入）。                                  |
   | `NEXT_PUBLIC_POSTHOG_KEY`  | 啟用 PostHog；未設定則不初始化。                                                   |
   | `NEXT_PUBLIC_POSTHOG_HOST` | PostHog 自訂網域，預設 `https://us.i.posthog.com`。                                |

4. **啟動開發伺服器**

   ```bash
   yarn dev
   ```

   於 <http://localhost:3000> 查看。

## NPM Script

| 指令                 | 說明                                  |
| -------------------- | ------------------------------------- |
| `yarn dev`           | 啟動開發模式。                        |
| `yarn build`         | 建置生產版本。                        |
| `yarn start`         | 以生產模式啟動（需先 `yarn build`）。 |
| `yarn lint`          | 執行 ESLint（`--fix` 可自動修正）。   |
| `yarn test`          | Jest watch mode。                     |
| `yarn test:ci`       | CI 模式並產出 coverage。              |
| `yarn test:coverage` | 單次 coverage 報告。                  |
| `yarn cf:build`      | OpenNext 打包成 Cloudflare Worker。   |
| `yarn cf:preview`    | 以 workerd 在本機預覽 Worker。        |
| `yarn cf:deploy`     | 打包並部署到 Cloudflare Workers。     |
| `yarn clean`         | 移除 `.next` 與 `node_modules`。      |

## 目錄導覽

```
├── src
│   ├── app
│   │   ├── layout.jsx        # 字型、metadata、JSON-LD、PostHog、Footer、GA
│   │   ├── index.css         # Tailwind v4 @theme 與共用 class
│   │   ├── (index)/page.jsx  # 首頁（force-static）
│   │   ├── robots.js         # robots.txt
│   │   └── sitemap.js        # sitemap.xml
│   ├── sections/root         # 首頁區塊：main / slogan / memory / address /
│   │                         #   declarations / music / qa / footer
│   ├── components            # spotify-embed（唯一共用元件）
│   ├── provider              # PostHogProvider
│   ├── constants             # SITE_URL、CDN base 與版號
│   └── lib                   # cn()
├── middleware.ts             # CSP（Report-Only）與 nonce 轉傳
├── next.config.mjs           # 圖片白名單與安全標頭
├── open-next.config.ts       # OpenNext / Cloudflare 快取策略
├── wrangler.jsonc            # Cloudflare Workers 設定
├── public/_headers           # 靜態資產 Cache-Control
├── jest.config.js            # Jest（coverage 門檻 70%）
└── components.json           # shadcn/ui 設定
```

## 核心模組解說

- **首頁（`src/app/(index)/page.jsx`）**：依序組合 `Main`（主視覺 + 倒數計時）、
  `Slogan`、`Memory`、`Address`、`Declaration`、`Qa`，全部是 Server Component。
- **應戰宣言（`src/sections/root/declarations`）**：`card-container.jsx`
  為 Server Component，以 `Promise.all` 併發抓取 CDN 上的
  `declaration_data.json` 與
  `DeclarationsList.json`（逾時 5 秒，失敗即讓 build 失敗），再交給 client 端
  `card-list` 以 CSS keyframes 跑馬燈呈現。
- **Footer**：由 `layout.jsx` 直接掛在 `{children}` 之後，只有版權文字。
- **資料更新流程**：宣言內容存放於
  [`liwei-cup-static-data`](https://github.com/paperhsiaooo/liwei-cup-static-data)；更新後修改
  `src/constants/version.js` 的 CDN 版號並重新部署即可生效。

## 部署

```bash
yarn cf:build     # next build → .open-next/worker.js + .open-next/assets
yarn cf:preview   # 本機以 workerd 預覽
yarn cf:deploy    # 打包並 wrangler deploy
```

- `open-next.config.ts` 採 `staticAssetsIncrementalCache` +
  `enableCacheInterception`，全站靜態預渲染，直接由 assets 回應。
- 若之後需要執行期 ISR（不重新部署就更新宣言資料），改用
  `r2IncrementalCache`，並將首頁的 `export const dynamic = 'force-static'` 換成
  `revalidate`。

## 測試

- Jest + Testing Library（jsdom），coverage 門檻 70%。
- 測試檔放在各模組的 `__tests__/`：目前有
  `card-list.test.jsx`、`qa-item.test.jsx`。

  ```bash
  yarn test                                     # watch mode
  npx jest src/sections/root/qa/components/__tests__/qa-item.test.jsx
  ```

- 目前沒有 E2E / 元件測試設定；需要時再導入 Playwright。

## 品質與開發規範

- Prettier 控制格式（`semi: false`、`singleQuote: true`、`printWidth: 80`、
  `proseWrap: always`）；提交前執行 `yarn lint` 確認 import 排序與 Hooks 規則。
- Tailwind CSS v4 設定集中於 `src/app/index.css` 的 `@theme`（沒有
  `tailwind.config`）：色票 `blue/green/orange/gray/yellow-primary`、字型
  `font-anton` / `font-antonio` / `font-noto-sans-tc`、唯一自訂斷點
  `1440:`，共用 class `.root` / `.wrapper`。
- 程式碼中的 `// ponytail:` 註解標記刻意的簡化與其升級路徑，修改前請先閱讀。
- 開發指引另見 [CLAUDE.md](./CLAUDE.md)。

## 文檔資源

- [CLAUDE.md](./CLAUDE.md) — 專案開發指南（架構、慣例、部署、SEO）
- [SEO 優化總結](./docs/SEO-OPTIMIZATION-SUMMARY.md)
- [AI Development Workflow](./docs/AI_DEVELOPMENT_WORKFLOW.md) — AI 協助開發流程
- [測試環境設置](./docs/TESTING_SETUP.md)

## 其他備註

- 現階段語系僅繁體中文；若需多語系可再導入 Next.js i18n。
