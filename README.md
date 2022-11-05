# blog

## 主要功能
- 响应式布局，适合手机端和PC端
- 特殊的欢迎页面
- 文章展示
- 标签云搜索
- 全局条件搜索
- 

## 依赖
- papercss css主体框架
- animate.css css动画框架
- css.gg css图标库
- vuex 数据仓库，全局共享数据管理
- vue-router 前端路由管理
- axios 网络请求

## 困惑
- 响应式布局多种实现方式

## 进度
- 2022-10-27 基础首页布局框架
- 2022-10-28 优化响应式布局，框架拆解为各个组件，配置前端路由，初步配置vue项目配置
- 2022-10-31 完成文章列表渲染，优化首页的显示
- 2022-11-01 初步完成标签盒，根据标签盒选择动态筛选匹配文章
    - 问题：文章匹配只是栈的弹栈的进栈，并不会完全符合用户当前的筛选条件，比如选择js标签后再选择css标签，然后取消js标签的选择，这只是简单地再次展示选择js标签后的文章列表（待解决）
- 2022-11-03 bug: 未加载时选择标签、然后选择标签筛选、然后再加载、取消标签选择，发生数据丢失
- 2022-11-04 差不多完成文章搜索模块，搜索结果分页，文章具体内容浏览，工具栏初步，头像初步特效
    - 问题：工具栏主题切换样式未完全改变

## 任务
1. 评论模块：评论系统，多级评论列表
2. 标签盒模块：路由到文章具体内容后，切换显示模块
3. 文章模块：md目录