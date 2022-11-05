import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push; // 解决冗余导航（同一个导航下再次导航自己）
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const __import__ = fileName => () => import(`@/views/${fileName}.vue`);

const routes = [
  {
    path: '/welcome',
    component: __import__('Entry'),
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: __import__('Home'),
    children: [
      {
        path: '',
        component: __import__('ArticleList'),
      },
      {
        path: 'article/:id',
        component: __import__('ArticleDetail'),
      },
      {
        path: 'search',
        component: __import__('SearchResults'),
        beforeEnter: (to, from, next) => {
          if (to.query.results) {
            next();
          } else {
            next('/error');
          }
        }
      }
    ]
  },
  {
    path: '/error',
    component: __import__('NotFound'),
  },
  {
    path: '*',
    redirect: '/error',
  }
]

const router = new VueRouter({
  routes
})

// 路由后置钩子 处理页面辅助功能、更改页面标题等
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
})

export default router
