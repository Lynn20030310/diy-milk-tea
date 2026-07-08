# DIY Drinks 产品工程设计方案

## 1. 产品定义

### 1.1 一句话定位

DIY Drinks 是一个手机端饮品配方实验室，用户可以基于热门风味灵感自行调配奶茶、咖啡、果茶、气泡饮、调酒和无酒精鸡尾酒，实时看到价格、热量、糖分、咖啡因、酒精度、口味标签，并生成可保存和社交分享的饮品配方卡。

### 1.2 核心价值

- 从“奶茶点单页”升级为“全品类饮品创作工具”，覆盖日常饮品和派对饮品。
- 把饮品选择拆成通用配方结构：基底、液体、风味、甜度、温度/冰量、配料、装饰、酒精模块。
- 让热量、糖分、咖啡因、酒精度、过敏原、口味强度透明化。
- 把热门饮品趋势抽象成“风味灵感”，避免直接复制具体品牌菜单。
- 通过配方卡、饮品人格、场景标签和低负担替代建议形成分享闭环。

### 1.3 饮品范围

MVP 支持以下大类：

- 奶茶：轻乳茶、厚乳茶、奶盖茶、珍珠奶茶。
- 咖啡：拿铁、美式、冷萃、风味咖啡、燕麦奶咖啡。
- 果茶：柠檬茶、莓果茶、桃子乌龙、热带果茶。
- 气泡饮：果味苏打、冷泡气泡茶、无酒精莫吉托。
- 调酒：低度鸡尾酒、经典长饮、果味调酒。
- 无酒精鸡尾酒：Mocktail、派对特调、低糖无酒精选项。

### 1.4 目标用户

- 控糖低卡用户：关心热量、糖分、健康替代方案。
- 咖啡因敏感用户：需要看到咖啡因提示和低咖替代。
- 口味探索用户：喜欢尝试茶、咖啡、果味、气泡、酒精的新组合。
- 社交分享用户：希望生成好看的“今日饮品配方卡”。
- 调酒新手：想按步骤跟做，但不熟悉基酒、辅料和比例。
- 场景型用户：早八提神、下午茶、健身后、派对、约会、睡前无咖啡因。

### 1.5 MVP 范围

MVP 必须包含：

- 手机端首页直接进入 DIY。
- 自由 DIY 和热门饮品跟做两种路径。
- 饮品类型选择：奶茶、咖啡、果茶、气泡饮、调酒、无酒精鸡尾酒。
- 通用配方步骤：基底、液体、风味、甜度、温度/冰量、配料、装饰；酒精饮品额外包含基酒与酒精度控制。
- 价格、热量、糖分、咖啡因、酒精度、口味标签即时计算。
- 配方结果页、饮品人格、场景标签和分享卡片。
- 我的配方本地/账号保存。
- 后端提供菜单组件、配方模板、计算、保存、分享、热门推荐接口。

MVP 不包含：

- 真实支付。
- 真实门店库存。
- 酒精销售、配送或年龄验证交易闭环。
- 品牌联名复刻声明。
- 真实营养检测，只提供估算值并标注“仅供参考”。

## 2. 信息架构与页面

### 2.1 用户端页面

1. 首页 / DIY 页
   - 默认展示 DIY 操作区。
   - 顶部展示饮品类型切换、当前杯子预览、价格与营养摘要。
   - 用户可以在“自由 DIY”和“跟做热门配方”之间切换。

2. 饮品类型选择页或顶部切换
   - 分类：奶茶、咖啡、果茶、气泡饮、调酒、无酒精鸡尾酒。
   - 每个分类使用不同默认步骤和推荐组件。
   - 调酒类显示“饮酒需成年、理性饮酒”的提示。

3. 灵感菜单页
   - 展示热门风味配方。
   - 分类包括：低卡控糖、咖啡提神、茶香轻乳、果味清爽、气泡派对、微醺调酒、无酒精特调。
   - 点击配方进入跟做流程，预填配方参数。

4. 跟做步骤页
   - 按步骤展示当前饮品类型需要的组件。
   - 每一步说明原配方推荐值、替换建议和偏离提示。
   - 示例提示：“换成燕麦奶可减少乳糖负担”“去掉糖浆可减少约 45 kcal”“无酒精版本口味更清爽”。

5. 配方结果页
   - 展示配方名、杯子视觉、价格、热量、糖分等级、咖啡因、酒精度、口味雷达。
   - 展示一句人格化描述，如“你是清爽气泡派”“你是低糖咖啡派”“你是微醺果香派”。
   - 操作：保存、复制配方、生成分享图、再次编辑。

6. 我的配方页
   - 展示保存历史。
   - 支持按饮品类型筛选。
   - 支持再次编辑、删除、复制、分享。
   - 未登录时使用本地存储；登录后同步到云端。

7. 分享落地页
   - 他人打开分享链接后看到配方卡。
   - 可点击“用这杯开始 DIY”复制为自己的配方。
   - 酒精配方分享页展示年龄与理性饮酒提示。

### 2.2 管理端页面

1. 组件库配置
   - 管理基底、液体、风味、甜度、温度、配料、装饰、基酒、杯型。
   - 配置价格、热量、糖分、咖啡因、酒精度、过敏原、标签、上下架状态。

2. 饮品类型规则配置
   - 配置每类饮品可用步骤、互斥规则、默认组件、最大配料数。
   - 示例：咖啡必须有咖啡基底；调酒必须限制酒精组件数量；无酒精鸡尾酒不能选择含酒精组件。

3. 灵感配方管理
   - 创建热门配方模板。
   - 设置饮品类型、分类、推荐权重、配方说明、默认参数。

4. 内容与分享管理
   - 管理配方卡文案模板、饮品人格、场景标签、健康建议、酒精提示。

5. 数据看板
   - 查看 DIY 次数、保存率、分享率、热门饮品类型、热门组件、低糖选择比例、无酒精替代比例。

## 3. 核心用户流程

### 3.1 自由 DIY

```text
进入首页
-> 选择饮品类型
-> 选择自由 DIY
-> 选择基底
-> 选择液体/奶/气泡水/果汁
-> 选择风味
-> 调整甜度
-> 选择温度/冰量
-> 添加配料和装饰
-> 如果是调酒，选择基酒和酒精强度
-> 即时查看价格/热量/糖分/咖啡因/酒精度/口味变化
-> 进入结果页
-> 保存或分享
```

### 3.2 热门配方跟做

```text
进入灵感菜单
-> 按饮品类型或场景筛选
-> 选择热门配方
-> 系统预填参数
-> 用户按步骤确认或替换
-> 系统提示和原配方差异
-> 生成个人版本
-> 保存或分享
```

### 3.3 分享再创作

```text
收到分享链接
-> 打开分享落地页
-> 查看配方卡
-> 点击“用这杯开始 DIY”
-> 复制参数进入 DIY 页
-> 修改后生成自己的饮品配方
```

## 4. 通用数据模型

### 4.1 DrinkType

```ts
type DrinkType =
  | "milk_tea"
  | "coffee"
  | "fruit_tea"
  | "sparkling"
  | "cocktail"
  | "mocktail";
```

### 4.2 Ingredient

```ts
type Ingredient = {
  id: string;
  role:
    | "base"
    | "liquid"
    | "flavor"
    | "sweetener"
    | "temperature"
    | "topping"
    | "garnish"
    | "alcohol"
    | "cup";
  name: string;
  description: string;
  compatibleDrinkTypes: DrinkType[];
  priceDelta: number;
  calories: number;
  sugar: number;
  caffeine?: number;
  alcoholMl?: number;
  abv?: number;
  allergens?: string[];
  tags: string[];
  color?: string;
  isAvailable: boolean;
  sortOrder: number;
};
```

### 4.3 DrinkTypeRule

```ts
type DrinkTypeRule = {
  drinkType: DrinkType;
  displayName: string;
  requiredRoles: Ingredient["role"][];
  optionalRoles: Ingredient["role"][];
  maxToppings: number;
  allowAlcohol: boolean;
  defaultRecipe: RecipeInput;
  incompatiblePairs: Array<{
    ingredientId: string;
    incompatibleWithId: string;
    reason: string;
  }>;
};
```

### 4.4 RecipeTemplate

```ts
type RecipeTemplate = {
  id: string;
  drinkType: DrinkType;
  name: string;
  category:
    | "low_calorie"
    | "coffee_boost"
    | "tea_milk"
    | "fruit_fresh"
    | "sparkling_party"
    | "tipsy"
    | "zero_alcohol";
  sceneTags: Array<"morning" | "afternoon" | "workout" | "party" | "date" | "night">;
  description: string;
  baseRecipe: RecipeInput;
  tags: string[];
  popularityScore: number;
  sourceType: "trend_inspired" | "official" | "ugc" | "admin";
  isPublished: boolean;
};
```

### 4.5 RecipeInput

```ts
type RecipeInput = {
  drinkType: DrinkType;
  ingredientIdsByRole: {
    base?: string[];
    liquid?: string[];
    flavor?: string[];
    sweetener?: string[];
    temperature?: string[];
    topping?: string[];
    garnish?: string[];
    alcohol?: string[];
    cup?: string[];
  };
  sweetnessLevel?: 0 | 1 | 2 | 3 | 4;
  iceLevel?: "hot" | "none" | "less" | "normal" | "extra";
  alcoholStrength?: "none" | "light" | "standard";
};
```

### 4.6 RecipeResult

```ts
type RecipeResult = {
  input: RecipeInput;
  name: string;
  price: number;
  calories: number;
  sugar: number;
  caffeine: number;
  alcoholByVolume: number;
  alcoholUnits: number;
  healthLevel: "A" | "B" | "C" | "D";
  tasteProfile: {
    tea: number;
    coffee: number;
    milk: number;
    fruit: number;
    sparkling: number;
    sweetness: number;
    bitterness: number;
    acidity: number;
    freshness: number;
    fullness: number;
    alcoholWarmth: number;
  };
  tags: string[];
  sceneTags: string[];
  warnings: string[];
  suggestions: string[];
};
```

### 4.7 SavedRecipe

```ts
type SavedRecipe = {
  id: string;
  userId?: string;
  anonymousId?: string;
  recipeInput: RecipeInput;
  recipeResult: RecipeResult;
  createdAt: string;
  updatedAt: string;
  shareId?: string;
};
```

### 4.8 ShareCard

```ts
type ShareCard = {
  id: string;
  recipeId: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  publicUrl: string;
  viewCount: number;
  createdAt: string;
};
```

## 5. 前后端架构

### 5.1 前端

建议技术路线：

- 手机网页 MVP：React / Vue / 原生 JS 均可，当前仓库已是零依赖静态原型。
- 小程序正式版：Taro 或 uni-app，复用核心计算逻辑。
- 状态管理：轻量 store，保存当前配方输入、计算结果、饮品类型和用户历史。
- 本地缓存：localStorage 或小程序 Storage。
- 分享图生成：Web 使用 Canvas，小程序使用 Canvas 2D。

前端模块：

- `ingredientService`: 拉取饮品组件和饮品类型规则。
- `templateService`: 拉取热门配方模板。
- `recipeCalculator`: 本地计算价格、热量、糖分、咖啡因、酒精度、口味标签。
- `compatibilityEngine`: 校验饮品类型、互斥组件和年龄/酒精提示。
- `recipeService`: 保存、删除、读取用户配方。
- `shareService`: 创建分享卡、读取分享详情。
- `analyticsService`: 上报关键行为。

### 5.2 后端

建议技术路线：

- Node.js + NestJS / Express，或 Python FastAPI。
- 数据库：PostgreSQL。
- 缓存：Redis，用于热门配方、饮品组件和类型规则缓存。
- 对象存储：存分享图，如 S3 / COS / OSS。
- 鉴权：微信小程序登录 code2session 或 Web 匿名 ID + 可选账号登录。

后端服务模块：

- Ingredient Service：组件库、上下架、价格、营养配置。
- Drink Rule Service：饮品类型规则、互斥关系、默认配方。
- Recipe Service：配方计算、保存、删除、读取。
- Recommendation Service：热门配方、低卡推荐、无酒精替代、相似配方。
- Share Service：生成分享记录、返回分享详情。
- Admin Service：管理端配置与数据看板。
- Analytics Service：采集行为事件。

### 5.3 计算放在哪里

MVP 建议前后端都保留计算能力：

- 前端实时计算：保证用户选择时反馈顺滑。
- 后端权威计算：保存和分享前重新计算，防止前端数据被篡改。
- 前后端共用同一套规则配置，前端使用接口返回的组件与规则进行即时估算。

## 6. API 设计

### 6.1 获取组件库与饮品类型规则

```http
GET /api/v1/drink-config
```

响应：

```json
{
  "drinkTypes": [
    {
      "drinkType": "coffee",
      "displayName": "咖啡",
      "requiredRoles": ["base", "liquid", "cup"],
      "optionalRoles": ["flavor", "sweetener", "temperature", "garnish"],
      "maxToppings": 2,
      "allowAlcohol": false
    }
  ],
  "ingredients": [
    {
      "id": "espresso",
      "role": "base",
      "name": "浓缩咖啡",
      "compatibleDrinkTypes": ["coffee"],
      "priceDelta": 14,
      "calories": 8,
      "sugar": 0,
      "caffeine": 80,
      "tags": ["提神", "苦感"],
      "isAvailable": true
    }
  ]
}
```

前端调用：

```ts
const config = await fetch("/api/v1/drink-config").then((res) => res.json());
```

### 6.2 获取灵感配方

```http
GET /api/v1/recipe-templates?drinkType=mocktail&category=zero_alcohol
```

响应：

```json
{
  "templates": [
    {
      "id": "sparkling-lime-mint",
      "drinkType": "mocktail",
      "name": "青柠薄荷气泡特调",
      "category": "zero_alcohol",
      "description": "青柠酸感、薄荷清凉和气泡水，适合派对无酒精版本。",
      "baseRecipe": {
        "drinkType": "mocktail",
        "ingredientIdsByRole": {
          "base": ["lime"],
          "liquid": ["sparkling_water"],
          "flavor": ["mint"],
          "sweetener": ["low_sugar_syrup"],
          "cup": ["tall"]
        },
        "iceLevel": "normal",
        "alcoholStrength": "none"
      },
      "tags": ["无酒精", "清爽", "气泡"]
    }
  ]
}
```

### 6.3 计算配方

```http
POST /api/v1/recipes/calculate
```

请求：

```json
{
  "drinkType": "cocktail",
  "ingredientIdsByRole": {
    "base": ["lime"],
    "liquid": ["sparkling_water"],
    "flavor": ["mint"],
    "sweetener": ["sugar_syrup"],
    "alcohol": ["white_rum"],
    "cup": ["tall"]
  },
  "iceLevel": "normal",
  "alcoholStrength": "light"
}
```

响应：

```json
{
  "name": "青柠薄荷轻莫吉托",
  "price": 32,
  "calories": 185,
  "sugar": 18,
  "caffeine": 0,
  "alcoholByVolume": 4.5,
  "alcoholUnits": 1.1,
  "healthLevel": "B",
  "tasteProfile": {
    "tea": 0,
    "coffee": 0,
    "milk": 0,
    "fruit": 72,
    "sparkling": 88,
    "sweetness": 38,
    "bitterness": 12,
    "acidity": 74,
    "freshness": 90,
    "fullness": 25,
    "alcoholWarmth": 35
  },
  "tags": ["微醺", "清爽", "青柠", "薄荷"],
  "sceneTags": ["party", "date"],
  "warnings": ["含酒精，未成年人请勿饮用"],
  "suggestions": ["改为无酒精版本可减少约 65 kcal", "低糖糖浆可减少约 40 kcal"]
}
```

### 6.4 保存配方

```http
POST /api/v1/saved-recipes
Authorization: Bearer <token>
```

请求：

```json
{
  "recipeInput": {
    "drinkType": "coffee",
    "ingredientIdsByRole": {
      "base": ["espresso"],
      "liquid": ["oat_milk"],
      "flavor": ["vanilla"],
      "sweetener": ["low_sugar_syrup"],
      "cup": ["medium"]
    },
    "iceLevel": "less"
  }
}
```

响应：

```json
{
  "id": "saved_123",
  "recipeResult": {
    "name": "低糖燕麦香草拿铁",
    "price": 26,
    "calories": 168,
    "caffeine": 80,
    "healthLevel": "A"
  }
}
```

### 6.5 获取我的配方

```http
GET /api/v1/saved-recipes?drinkType=coffee
Authorization: Bearer <token>
```

### 6.6 删除我的配方

```http
DELETE /api/v1/saved-recipes/:id
Authorization: Bearer <token>
```

### 6.7 创建分享卡

```http
POST /api/v1/shares
Authorization: Bearer <token>
```

请求：

```json
{
  "savedRecipeId": "saved_123",
  "style": "fresh"
}
```

响应：

```json
{
  "shareId": "share_abc",
  "publicUrl": "https://example.com/share/share_abc",
  "imageUrl": "https://cdn.example.com/share/share_abc.png"
}
```

### 6.8 获取分享详情

```http
GET /api/v1/shares/:shareId
```

### 6.9 行为上报

```http
POST /api/v1/analytics/events
```

请求：

```json
{
  "eventName": "recipe_saved",
  "anonymousId": "anon_123",
  "properties": {
    "drinkType": "mocktail",
    "calories": 120,
    "healthLevel": "A",
    "containsAlcohol": false
  }
}
```

## 7. 前端调用流程

### 7.1 首页初始化

```text
页面加载
-> GET /api/v1/drink-config
-> GET /api/v1/recipe-templates
-> 初始化默认 drinkType 和 recipeInput
-> 前端本地 calculate 生成即时摘要
```

### 7.2 用户每次选择

```text
用户点击饮品类型或组件
-> 根据 DrinkTypeRule 更新可选步骤
-> 更新 recipeInput
-> compatibilityEngine 校验互斥和必填
-> recipeCalculator.calculate(input, config)
-> 更新价格/热量/糖分/咖啡因/酒精度/杯子视觉
-> 节流上报 analytics event
```

### 7.3 进入结果页

```text
用户点击生成配方
-> POST /api/v1/recipes/calculate
-> 使用后端返回的权威 RecipeResult
-> 渲染结果页
```

### 7.4 保存配方

```text
点击保存
-> 如果已登录：POST /api/v1/saved-recipes
-> 如果未登录：写入本地 storage，并提示可登录同步
```

### 7.5 分享配方

```text
点击分享
-> 如果配方未保存，先 POST /api/v1/saved-recipes
-> POST /api/v1/shares
-> 生成分享图或返回 imageUrl
-> 调起系统分享/微信分享
```

## 8. 配方计算规则

### 8.1 价格

```text
总价 = 杯型基础价 + 所有组件 priceDelta 总和
```

### 8.2 热量

```text
总热量 = 所有组件 calories 总和 * 杯型容量系数
```

杯型系数：

- 小杯：0.8
- 中杯：1.0
- 大杯：1.25

### 8.3 糖分等级

```text
低糖：0g - 15g
中糖：16g - 30g
高糖：31g+
```

### 8.4 咖啡因等级

```text
无咖：0mg
低咖：1mg - 50mg
中咖：51mg - 120mg
高咖：121mg+
```

### 8.5 酒精度

```text
酒精毫升 = Σ(酒精组件容量 ml * abv)
成品 ABV = 酒精毫升 / 成品总容量 ml
```

展示规则：

- 无酒精：0%
- 微醺：0.1% - 5%
- 标准：5.1% - 12%
- 高酒精度：12%+

MVP 中不提供高酒精度推荐，只允许用户查看提示并降级到轻酒精或无酒精版本。

### 8.6 健康等级

```text
A：低于 180 kcal 且低糖，且无高咖/高酒精提示
B：180 - 280 kcal 或中糖
C：281 - 420 kcal、高糖或中高咖
D：高于 420 kcal，或高糖叠加高脂配料，或酒精度过高
```

### 8.7 口味雷达

- 茶感：茶类基底、乌龙、红茶、绿茶提升。
- 咖啡感：浓缩、冷萃、美式提升。
- 奶香：牛乳、厚乳、燕麦奶、椰乳提升。
- 果感：果汁、果酱、果肉、柑橘提升。
- 气泡感：气泡水、苏打水提升。
- 甜感：糖浆、蜂蜜、果酱、甜度等级提升。
- 苦感：咖啡、可可、茶浓度、苦味酒提升。
- 酸感：柠檬、青柠、莓果、发酵风味提升。
- 清爽度：低糖、茶、果、气泡、冰量提升；厚乳和奶盖降低。
- 饱腹感：厚乳、奶盖、小料数量、杯型提升。
- 酒感：基酒和酒精强度提升。

## 9. 推荐与热门配方策略

### 9.1 初期

人工维护灵感配方库，不直接使用品牌名，使用风味描述：

- 奶茶：清爽茉莉椰椰、厚乳黑糖珍珠、乌龙燕麦芋圆。
- 咖啡：低糖燕麦香草拿铁、橙香冷萃、海盐奶盖美式。
- 果茶：桃桃乌龙、柠檬茉莉、莓果冰茶。
- 气泡饮：西柚气泡茶、青柠薄荷苏打、百香果气泡。
- 调酒：青柠薄荷轻莫吉托、莓果金酒气泡、蜜桃伏特加苏打。
- 无酒精鸡尾酒：无酒精莫吉托、莓果派对气泡、黄瓜青柠特调。

### 9.2 中期

根据用户行为排序：

```text
推荐分 = 点击权重 + 保存权重 + 分享权重 + 复刻权重 - 跳出惩罚 + 新鲜度加权
```

### 9.3 个性化

根据用户偏好推荐：

- 常选低糖 -> 优先低卡配方。
- 常选咖啡 -> 优先提神和低糖咖啡。
- 常选椰乳/燕麦奶 -> 优先植物基配方。
- 常选气泡 -> 优先清爽气泡饮和无酒精鸡尾酒。
- 常选无酒精 -> 优先 mocktail 和低负担派对饮。
- 常选酒精类 -> 优先轻酒精配方，并展示理性饮酒提示。

## 10. 分享卡设计

分享卡内容：

- 配方名
- 饮品类型
- 杯子视觉
- 热量、糖分等级、健康等级
- 咖啡因或酒精度提示
- 口味标签和场景标签
- 饮品人格
- 二维码或分享链接

示例文案：

```text
我调出了一杯 120 kcal 的青柠薄荷气泡特调
清爽度 90 / 酸感 74 / 气泡感 88
今日人格：清爽气泡派
```

酒精类示例：

```text
我调出了一杯 185 kcal 的青柠薄荷轻莫吉托
ABV 4.5% / 清爽度 90 / 酒感 35
提示：含酒精，未成年人请勿饮用
```

## 11. 鉴权与账号

### 11.1 Web MVP

- 未登录用户使用 anonymousId。
- 本地保存配方到 localStorage。
- 分享时可匿名创建分享。
- 酒精配方分享和保存时展示一次年龄/理性饮酒确认。

### 11.2 微信小程序

```text
wx.login()
-> code
-> POST /api/v1/auth/wechat
-> 后端 code2session
-> 返回 token
-> 前端保存 token
```

接口：

```http
POST /api/v1/auth/wechat
```

请求：

```json
{
  "code": "wx_login_code"
}
```

响应：

```json
{
  "token": "jwt_token",
  "user": {
    "id": "user_123",
    "nickname": "饮品实验员"
  }
}
```

## 12. 数据库设计

### 12.1 tables

```sql
users (
  id,
  openid,
  unionid,
  nickname,
  avatar_url,
  created_at,
  updated_at
)
```

```sql
ingredients (
  id,
  role,
  name,
  description,
  compatible_drink_types,
  price_delta,
  calories,
  sugar,
  caffeine,
  alcohol_ml,
  abv,
  allergens,
  tags,
  color,
  is_available,
  sort_order,
  created_at,
  updated_at
)
```

```sql
drink_type_rules (
  id,
  drink_type,
  display_name,
  required_roles,
  optional_roles,
  max_toppings,
  allow_alcohol,
  default_recipe_json,
  incompatible_pairs_json,
  created_at,
  updated_at
)
```

```sql
recipe_templates (
  id,
  drink_type,
  name,
  category,
  scene_tags,
  description,
  base_recipe_json,
  tags,
  popularity_score,
  source_type,
  is_published,
  created_at,
  updated_at
)
```

```sql
saved_recipes (
  id,
  user_id,
  anonymous_id,
  recipe_input_json,
  recipe_result_json,
  created_at,
  updated_at
)
```

```sql
share_cards (
  id,
  saved_recipe_id,
  title,
  subtitle,
  image_url,
  public_url,
  view_count,
  created_at
)
```

```sql
analytics_events (
  id,
  user_id,
  anonymous_id,
  event_name,
  properties_json,
  created_at
)
```

## 13. 状态与异常

### 13.1 组件不可用

- 某个组件下架后，前端置灰。
- 已保存配方再次打开时，如果包含下架项，提示“该组件暂不可用，已替换为推荐选项”。

### 13.2 组件限制

- MVP 每杯最多选择 4 个可选配料或装饰。
- 奶盖类与热饮可配置互斥。
- 咖啡饮品默认不展示茶类基底，除非模板明确支持鸳鸯/茶咖。
- 无酒精鸡尾酒禁止选择 `role = alcohol` 的组件。
- 调酒类默认限制为轻酒精或标准酒精，不提供高酒精度推荐。

### 13.3 网络失败

- 配置接口失败时使用本地 fallback 数据。
- 保存失败时保存在本地待同步队列。
- 分享失败时仍允许复制文字配方。

### 13.4 安全与合规提示

- 酒精配方展示“未成年人请勿饮酒、理性饮酒”。
- 咖啡因较高时展示“咖啡因较高，孕期/睡前/敏感人群谨慎饮用”。
- 过敏原命中时展示“含乳/坚果/酒精/咖啡因”等提示。
- 营养值显示“估算值，仅供参考”。

## 14. 埋点

关键事件：

- `page_view`
- `drink_type_selected`
- `diy_started`
- `option_selected`
- `template_clicked`
- `recipe_calculated`
- `recipe_saved`
- `share_created`
- `share_opened`
- `copy_from_share`
- `alcohol_warning_viewed`

核心指标：

- DIY 完成率
- 配方保存率
- 分享率
- 分享回流率
- 低卡选择比例
- 无酒精替代比例
- 热门饮品类型
- 热门组件组合
- 咖啡因/酒精提示触发率

## 15. 部署方案

### 15.1 Web MVP

- 前端：GitHub Pages / Vercel / Netlify。
- 后端：Render / Railway / Fly.io / 云服务器。
- 数据库：Supabase Postgres / Neon / RDS。
- 对象存储：Cloudflare R2 / 腾讯云 COS。

### 15.2 微信小程序

- 前端：Taro / uni-app 构建微信小程序。
- 后端：同 Web API。
- 登录：微信 code2session。
- 分享：小程序 `onShareAppMessage` + 分享落地页。
- 酒精内容：根据平台规范增加提示，必要时将调酒内容作为 Web 端能力，小程序端只展示无酒精特调。

## 16. 开发里程碑

### Phase 1：产品原型从奶茶升级到全饮品

- 把当前静态原型拆出组件数据和计算器。
- 增加饮品类型切换。
- 把茶底/奶基底模型升级为通用 `Ingredient` 模型。
- 增加糖分、咖啡因、酒精度、健康等级、口味雷达。
- 增加灵感配方分类和结果页分享文案。

### Phase 2：后端 MVP

- 搭建 API 服务。
- 实现组件库、饮品类型规则、配方模板、计算、保存、分享接口。
- 接入 PostgreSQL。
- 前端从 API 拉取配置和配方。

### Phase 3：账号与分享

- 增加匿名 ID 和登录态。
- 支持云端保存配方。
- 生成分享链接和分享图。
- 增加分享落地页。

### Phase 4：小程序化

- 使用 Taro / uni-app 迁移。
- 接入微信登录和微信分享。
- 增加小程序 Canvas 分享卡。
- 评估调酒内容在小程序端的展示边界。

### Phase 5：管理端

- 组件库配置。
- 饮品类型规则配置。
- 灵感配方管理。
- 数据看板。

## 17. 当前仓库下一步改造建议

当前仓库是零依赖静态奶茶原型，建议按低风险方式升级：

1. 保留当前静态页面可运行。
2. 将 `src/app.js` 中的 `teas/milks/toppings` 数据迁移为通用 `ingredients`。
3. 新增 `src/data/drinkConfig.js` 存饮品类型、组件库和规则。
4. 新增 `src/services/recipeCalculator.js` 存通用计算逻辑。
5. 新增 `src/services/apiClient.js`，先 mock API，后续切真实后端。
6. 增加饮品类型切换和动态步骤，不急着做多页面路由。
7. 后端启动前，前端继续使用 fallback 数据。

## 18. 验收标准

- 用户 30 秒内能完成一杯自定义饮品。
- 用户能在奶茶、咖啡、果茶、气泡饮、调酒、无酒精鸡尾酒之间切换。
- 每次选择后价格、热量、糖分、咖啡因或酒精度立即更新。
- 热门配方可一键套用并继续修改。
- 配方结果页能解释“这杯是什么口味”和“为什么是这个营养/酒精/咖啡因水平”。
- 未登录用户可本地保存，登录用户可云端保存。
- 分享链接可被他人打开并复制配方继续 DIY。
- 后端重新计算结果，前端不能伪造价格、热量、咖啡因和酒精度。
- 酒精配方必须展示未成年人禁饮和理性饮酒提示。
