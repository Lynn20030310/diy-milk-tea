# DIY Drinks

一个面向手机网页和微信小程序方向的 DIY 饮品原型项目。用户可以调配奶茶、咖啡、果茶、气泡饮、调酒和无酒精鸡尾酒，实时看到价格、热量、糖分、咖啡因、酒精度、口味标签和配方卡片。

## 功能

- 手机优先的单页点单体验
- 奶茶、咖啡、果茶、气泡饮、调酒、无酒精鸡尾酒等饮品类型规划
- 基底、液体、风味、甜度、冰量、配料、装饰、酒精模块自由组合
- 价格、热量、糖分、咖啡因和酒精度实时计算规划
- 推荐配方一键套用
- 配方卡片生成和本地保存
- 零依赖静态网页，适合 GitHub Pages 部署

## 本地运行

```bash
python3 -m http.server 5173
```

然后打开：

```text
http://localhost:5173
```

也可以直接在浏览器打开 `index.html`。

## 项目结构

```text
.
├── index.html
├── package.json
├── README.md
├── docs/
│   └── mini-program-plan.md
└── src/
    ├── app.js
    └── styles.css
```

## 后续方向

- 接入真实饮品组件后台
- 增加用户登录和云端配方收藏
- 增加订单页、门店页、支付模拟
- 迁移到微信小程序、Taro 或 uni-app
- 增加分享海报生成

## 产品工程方案

- [完整产品工程设计方案](./docs/PRODUCT_ENGINEERING_SPEC.md)
- [微信小程序迁移计划](./docs/mini-program-plan.md)

## License

MIT
