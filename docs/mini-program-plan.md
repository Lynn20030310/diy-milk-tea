# 微信小程序迁移计划

## 页面

- `pages/index`: DIY 主流程，包含饮品类型、基底、液体、风味、甜度、冰量、配料、装饰选择。
- `pages/inspiration`: 灵感配方，按奶茶、咖啡、果茶、气泡饮、调酒、无酒精鸡尾酒筛选。
- `pages/result`: 配方卡片、价格、热量、糖分、咖啡因、酒精度、保存和分享。
- `pages/saved`: 已保存配方列表，支持按饮品类型筛选。
- `pages/share`: 分享落地页，支持复制配方继续 DIY。

## 数据模型

```js
{
  drinkType: "mocktail",
  ingredientIdsByRole: {
    base: ["lime"],
    liquid: ["sparkling_water"],
    flavor: ["mint"],
    sweetener: ["low_sugar_syrup"],
    cup: ["tall"]
  },
  sweetnessLevel: 1,
  iceLevel: "normal",
  alcoholStrength: "none"
}
```

## 第一阶段

- 使用本地静态数据驱动饮品组件库和饮品类型规则。
- 用 `wx.setStorageSync` 保存配方。
- 用 Canvas 生成分享海报。
- 调酒类内容展示理性饮酒提示；小程序端可优先上线无酒精鸡尾酒。

## 第二阶段

- 接入云开发数据库保存组件库、饮品规则和用户配方。
- 增加门店、订单、支付模拟。
- 将推荐配方、饮品类型和互斥规则改成后台可配置。

## 设计原则

- 首页直接进入 DIY，不做营销落地页。
- 底部固定价格和营养摘要，减少用户反复滚动。
- 每次选择都要即时反馈价格、热量、糖分、咖啡因、酒精度和视觉杯身变化。
- 不同饮品类型展示不同步骤，避免所有选项堆在同一个页面里。
