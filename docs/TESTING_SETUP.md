# 測試環境設置說明

## 📦 安裝測試依賴

請執行以下指令安裝測試所需的套件：

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

或使用 yarn：

```bash
yarn add -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

## 🧪 測試指令

### 開發模式（監聽檔案變更）

```bash
npm run test
```

### CI 模式（執行一次並產生覆蓋率報告）

```bash
npm run test:ci
```

### 產生覆蓋率報告

```bash
npm run test:coverage
```

## 📁 已配置的檔案

- ✅ `jest.config.js` - Jest 配置檔
- ✅ `jest.setup.js` - Jest 設置檔（Mock 配置）
- ✅ `package.json` - 新增測試 scripts

## 📝 測試檔案位置

測試檔案應放置在：

- `src/**/__tests__/**/*.test.js` - 單元測試
- `src/**/__tests__/**/*.test.jsx` - 組件測試

## 🎯 覆蓋率目標

- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

## 🔧 已配置的 Mock

- ✅ Next.js Image 組件
- ✅ Next.js Link 組件
- ✅ Next.js Router (useRouter, usePathname, useSearchParams)
- ✅ window.matchMedia

## 📚 參考資源

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Next.js Testing](https://nextjs.org/docs/testing)
