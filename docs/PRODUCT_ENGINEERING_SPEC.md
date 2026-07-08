# DIY Milk Tea 产品工程设计方案

## 1. 产品定义

### 1.1 一句话定位

DIY Milk Tea 是一个手机端奶茶配方实验室，用户可以基于热门风味灵感自行调配奶茶，实时看到价格、热量、糖分、口味标签，并生成可保存和社交分享的配方卡。

### 1.2 核心价值

- 给用户一个比普通点单页更有参与感的 DIY 体验。
- 让热量、糖分、奶脂、小料等选择透明化。
- 把热门奶茶趋势抽象成“风味灵感”，避免直接复制品牌菜单。
- 通过配方卡、人格标签、低卡建议形成分享闭环。

### 1.3 目标用户

- 控糖低卡用户：关心热量、糖分、健康替代方案。
- 口味探索用户：喜欢尝试茶底、奶基底、小料的新组合。
- 社交分享用户：希望生成好看的“今日奶茶配方卡”。
- 奶茶新手：不知道怎么搭配，希望从热门配方一步步跟做。

### 1.4 MVP 范围

MVP 必须包含：

- 手机端首页直接进入 DIY。
- 自由 DIY 和热门配方跟做两种路径。
- 茶底、奶基底、甜度、冰量、小料、杯型选择。
- 价格、热量、糖分等级、口味标签即时计算。
- 配方结果页和分享卡片。
- 我的配方本地/账号保存。
- 后端提供菜单、配方、保存、分享记录、热门推荐接口。

MVP 不包含：

- 真实支付。
- 真实门店库存。
- 品牌联名复刻声明。
- 配送和履约。

## 2. 信息架构与页面

### 2.1 用户端页面

1. 首页 / DIY 页
   - 默认展示 DIY 操作区。
   - 顶部展示今日推荐、当前杯子预览、价格与热量摘要。
   - 用户可以在“自由 DIY”和“跟做热门配方”之间切换。

2. 灵感菜单页
   - 展示热门风味配方。
   - 分类包括：低卡控糖、茉莉轻乳、厚乳红茶、生椰、乌龙奶盖、果茶。
   - 点击配方进入跟做流程，预填配方参数。

3. 跟做步骤页
   - 按步骤展示：茶底、奶基底、甜度、冰量、小料。
   - 每一步说明原配方推荐值和可替换建议。
   - 用户调整后仍能看到偏离提示，如“比原配方低 85 kcal”。

4. 配方结果页
   - 展示配方名、杯子视觉、价格、热量、糖分等级、口味雷达。
   - 展示一句人格化描述，如“你是清爽控糖派”。
   - 操作：保存、复制配方、生成分享图、再次编辑。

5. 我的配方页
   - 展示保存历史。
   - 支持再次编辑、删除、复制、分享。
   - 未登录时使用本地存储；登录后同步到云端。

6. 分享落地页
   - 他人打开分享链接后看到配方卡。
   - 可点击“用这杯开始 DIY”复制为自己的配方。

### 2.2 管理端页面

1. 菜单配置
   - 管理茶底、奶基底、甜度、冰量、小料、杯型。
   - 配置价格、热量、糖分、标签、上下架状态。

2. 灵感配方管理
   - 创建热门配方模板。
   - 设置分类、推荐权重、配方说明、默认参数。

3. 内容与分享管理
   - 管理配方卡文案模板、人格标签、健康建议。

4. 数据看板
   - 查看 DIY 次数、保存率、分享率、热门配方、热门小料、低卡选择比例。

## 3. 核心用户流程

### 3.1 自由 DIY

```text
进入首页
-> 选择自由 DIY
-> 选择茶底
-> 选择奶基底
-> 调整甜度
-> 选择冰量
-> 添加小料
-> 即时查看价格/热量/糖分/口味变化
-> 进入结果页
-> 保存或分享
```

### 3.2 热门配方跟做

```text
进入灵感菜单
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
-> 修改后生成自己的配方
```

## 4. 数据模型

### 4.1 MenuItem

```ts
type MenuItem = {
  id: string;
  type: "tea" | "milk" | "sweetness" | "ice" | "topping" | "cup";
  name: string;
  description: string;
  priceDelta: number;
  calories: number;
  sugar: number;
  caffeine?: number;
  tags: string[];
  color?: string;
  isAvailable: boolean;
  sortOrder: number;
};
```

### 4.2 RecipeTemplate

```ts
type RecipeTemplate = {
  id: string;
  name: string;
  category: "low_calorie" | "jasmine" | "cream" | "coconut" | "oolong" | "fruit";
  description: string;
  baseRecipe: RecipeInput;
  tags: string[];
  popularityScore: number;
  sourceType: "trend_inspired" | "official" | "ugc";
  isPublished: boolean;
};
```

### 4.3 RecipeInput

```ts
type RecipeInput = {
  teaId: string;
  milkId: string;
  sweetnessId: string;
  iceId: string;
  toppingIds: string[];
  cupId: string;
};
```

### 4.4 RecipeResult

```ts
type RecipeResult = {
  input: RecipeInput;
  name: string;
  price: number;
  calories: number;
  sugar: number;
  caffeine: number;
  healthLevel: "A" | "B" | "C" | "D";
  tasteProfile: {
    tea: number;
    milk: number;
    sweetness: number;
    freshness: number;
    fullness: number;
  };
  tags: string[];
  suggestions: string[];
};
```

### 4.5 SavedRecipe

```ts
type SavedRecipe = {
  id: string;
  userId?: string;
  recipeInput: RecipeInput;
  recipeResult: RecipeResult;
  createdAt: string;
  updatedAt: string;
  shareId?: string;
};
```

### 4.6 ShareCard

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
- 状态管理：轻量 store，保存当前配方输入、计算结果、用户历史。
- 本地缓存：localStorage 或小程序 Storage。
- 分享图生成：Web 使用 Canvas，小程序使用 Canvas 2D。

前端模块：

- `menuService`: 拉取菜单和配方模板。
- `recipeCalculator`: 本地计算价格、热量、糖分、口味标签。
- `recipeService`: 保存、删除、读取用户配方。
- `shareService`: 创建分享卡、读取分享详情。
- `analyticsService`: 上报关键行为。

### 5.2 后端

建议技术路线：

- Node.js + NestJS / Express，或 Python FastAPI。
- 数据库：PostgreSQL。
- 缓存：Redis，用于热门配方和菜单缓存。
- 对象存储：存分享图，如 S3 / COS / OSS。
- 鉴权：微信小程序登录 code2session 或 Web 匿名 ID + 可选账号登录。

后端服务模块：

- Menu Service：菜单项、上下架、价格、热量配置。
- Recipe Service：配方计算、保存、删除、读取。
- Recommendation Service：热门配方、低卡推荐、相似配方。
- Share Service：生成分享记录、返回分享详情。
- Admin Service：管理端配置与数据看板。
- Analytics Service：采集行为事件。

### 5.3 计算放在哪里

MVP 建议前后端都保留计算能力：

- 前端实时计算：保证用户选择时反馈顺滑。
- 后端权威计算：保存和分享前重新计算，防止前端数据被篡改。

## 6. API 设计

### 6.1 获取菜单配置

```http
GET /api/v1/menu
```

响应：

```json
{
  "items": [
    {
      "id": "jasmine",
      "type": "tea",
      "name": "茉莉绿茶",
      "priceDelta": 12,
      "calories": 30,
      "sugar": 0,
      "tags": ["清爽", "花香"],
      "isAvailable": true
    }
  ]
}
```

前端调用：

```ts
const menu = await fetch("/api/v1/menu").then((res) => res.json());
```

### 6.2 获取灵感配方

```http
GET /api/v1/recipe-templates?category=low_calorie
```

响应：

```json
{
  "templates": [
    {
      "id": "jasmine-coconut-light",
      "name": "清爽茉莉椰椰",
      "category": "coconut",
      "description": "茉莉茶香加轻盈椰乳，适合三分糖少冰。",
      "baseRecipe": {
        "teaId": "jasmine",
        "milkId": "coconut",
        "sweetnessId": "30",
        "iceId": "less",
        "toppingIds": ["crystal"],
        "cupId": "medium"
      },
      "tags": ["清爽", "低负担", "椰香"]
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
  "teaId": "jasmine",
  "milkId": "coconut",
  "sweetnessId": "30",
  "iceId": "less",
  "toppingIds": ["crystal"],
  "cupId": "medium"
}
```

响应：

```json
{
  "name": "茉莉椰椰轻乳",
  "price": 20,
  "calories": 205,
  "sugar": 18,
  "caffeine": 65,
  "healthLevel": "B",
  "tasteProfile": {
    "tea": 78,
    "milk": 62,
    "sweetness": 35,
    "freshness": 80,
    "fullness": 42
  },
  "tags": ["清爽", "椰香", "三分糖"],
  "suggestions": ["改为无糖可减少约 35 kcal", "去掉晶球可减少约 60 kcal"]
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
    "teaId": "jasmine",
    "milkId": "coconut",
    "sweetnessId": "30",
    "iceId": "less",
    "toppingIds": ["crystal"],
    "cupId": "medium"
  }
}
```

响应：

```json
{
  "id": "saved_123",
  "recipeResult": {
    "name": "茉莉椰椰轻乳",
    "price": 20,
    "calories": 205,
    "healthLevel": "B"
  }
}
```

### 6.5 获取我的配方

```http
GET /api/v1/saved-recipes
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
    "calories": 205,
    "healthLevel": "B",
    "toppingCount": 1
  }
}
```

## 7. 前端调用流程

### 7.1 首页初始化

```text
页面加载
-> GET /api/v1/menu
-> GET /api/v1/recipe-templates
-> 初始化默认 recipeInput
-> 前端本地 calculate 生成即时摘要
```

### 7.2 用户每次选择

```text
用户点击选项
-> 更新 recipeInput
-> 前端 recipeCalculator.calculate(input, menu)
-> 更新价格/热量/糖分/杯子视觉
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
总价 = 茶底基础价 + 奶基底加价 + 杯型加价 + 小料加价总和
```

### 8.2 热量

```text
总热量 = 茶底热量 + 奶基底热量 + 甜度糖热量 + 杯型系数 + 小料热量总和
```

杯型系数：

- 中杯：1.0
- 大杯：1.25

### 8.3 糖分等级

```text
低糖：0g - 15g
中糖：16g - 30g
高糖：31g+
```

### 8.4 健康等级

```text
A：低于 180 kcal 且低糖
B：180 - 280 kcal 或中糖
C：281 - 420 kcal 或高糖
D：高于 420 kcal 且高糖/高脂小料较多
```

### 8.5 口味雷达

- 茶感：茶底决定，乌龙/红茶更高。
- 奶香：奶基底决定，厚乳最高。
- 甜感：甜度决定。
- 清爽度：茶底、冰量、低糖提高；厚乳和奶盖降低。
- 饱腹感：厚乳、小料数量、杯型提高。

## 9. 推荐与热门配方策略

### 9.1 初期

人工维护灵感配方库，不直接使用品牌名，使用风味描述：

- 清爽茉莉椰椰
- 厚乳黑糖珍珠
- 乌龙燕麦芋圆
- 低卡茉莉仙草
- 生椰轻乳晶球
- 红茶奶盖布丁

### 9.2 中期

根据用户行为排序：

```text
推荐分 = 点击权重 + 保存权重 + 分享权重 - 跳出惩罚 + 新鲜度加权
```

### 9.3 个性化

根据用户偏好推荐：

- 常选低糖 -> 优先低卡配方。
- 常选厚乳 -> 优先奶香浓郁配方。
- 常选椰乳 -> 优先生椰和清爽系。

## 10. 分享卡设计

分享卡内容：

- 配方名
- 杯子视觉
- 热量、糖分等级、健康等级
- 口味标签
- 人格标签
- 二维码或分享链接

示例文案：

```text
我调出了一杯 205 kcal 的茉莉椰椰轻乳
清爽度 80 / 奶香 62 / 甜感 35
今日人格：清爽控糖派
```

## 11. 鉴权与账号

### 11.1 Web MVP

- 未登录用户使用 anonymousId。
- 本地保存配方到 localStorage。
- 分享时可匿名创建分享。

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
    "nickname": "奶茶实验员"
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
menu_items (
  id,
  type,
  name,
  description,
  price_delta,
  calories,
  sugar,
  caffeine,
  tags,
  color,
  is_available,
  sort_order,
  created_at,
  updated_at
)
```

```sql
recipe_templates (
  id,
  name,
  category,
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

### 13.1 菜单不可用

- 某个选项下架后，前端置灰。
- 已保存配方再次打开时，如果包含下架项，提示“该小料暂不可用，已替换为推荐选项”。

### 13.2 小料限制

- MVP 最多选择 3 个小料。
- 奶盖类与热饮可配置互斥。
- 果茶类默认不推荐厚乳。

### 13.3 网络失败

- 菜单接口失败时使用本地 fallback 数据。
- 保存失败时保存在本地待同步队列。
- 分享失败时仍允许复制文字配方。

## 14. 埋点

关键事件：

- `page_view`
- `diy_started`
- `option_selected`
- `template_clicked`
- `recipe_calculated`
- `recipe_saved`
- `share_created`
- `share_opened`
- `copy_from_share`

核心指标：

- DIY 完成率
- 配方保存率
- 分享率
- 分享回流率
- 低卡选择比例
- 热门茶底/奶基底/小料

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

## 16. 开发里程碑

### Phase 1：产品原型增强

- 把当前静态原型拆出菜单数据和计算器。
- 增加糖分、健康等级、口味雷达。
- 增加灵感配方分类。
- 增加结果页和分享文案。

### Phase 2：后端 MVP

- 搭建 API 服务。
- 实现菜单、配方模板、计算、保存、分享接口。
- 接入 PostgreSQL。
- 前端从 API 拉取菜单和配方。

### Phase 3：账号与分享

- 增加匿名 ID 和登录态。
- 支持云端保存配方。
- 生成分享链接和分享图。
- 增加分享落地页。

### Phase 4：小程序化

- 使用 Taro / uni-app 迁移。
- 接入微信登录和微信分享。
- 增加小程序 Canvas 分享卡。

### Phase 5：管理端

- 菜单配置。
- 灵感配方管理。
- 数据看板。

## 17. 当前仓库下一步改造建议

当前仓库是零依赖静态原型，建议按低风险方式升级：

1. 保留当前静态页面可运行。
2. 新增 `src/data/menu.js` 存菜单数据。
3. 新增 `src/services/recipeCalculator.js` 存计算逻辑。
4. 新增 `src/services/apiClient.js`，先 mock API，后续切真实后端。
5. 增加结果页状态，不急着做多页面路由。
6. 后端启动前，前端继续使用 fallback 数据。

## 18. 验收标准

- 用户 30 秒内能完成一杯自定义奶茶。
- 每次选择后价格、热量、糖分等级立即更新。
- 热门配方可一键套用并继续修改。
- 配方结果页能解释“这杯是什么口味”和“为什么这个热量”。
- 未登录用户可本地保存，登录用户可云端保存。
- 分享链接可被他人打开并复制配方继续 DIY。
- 后端重新计算结果，前端不能伪造价格和热量。
