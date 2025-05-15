module.exports = {
  // 指定环境
  env: {
    browser: true, // 浏览器环境
    es2021: true, // 使用 ES2021 语法
    node: true, // Node.js 环境
  },
  // 使用的扩展
  extends: [
    "eslint:recommended", // 使用 ESLint 推荐的规则
    "plugin:@typescript-eslint/recommended", // 使用 TypeScript 推荐的规则
    "plugin:react/recommended", // 使用 React 推荐的规则
    "plugin:prettier/recommended", // 集成 Prettier
  ],
  // 解析器选项
  parser: "@typescript-eslint/parser", // 指定 TypeScript 解析器
  parserOptions: {
    ecmaVersion: 12, // 使用 ES2021 语法
    sourceType: "module", // 支持 ES 模块
  },
  // 插件
  plugins: [
    "@typescript-eslint", // TypeScript 插件
    "react", // React 插件
  ],
  // 自定义规则
  rules: {
    "prettier/prettier": "error",
  },
};
