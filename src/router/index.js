import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/shop/shopcont',
    children: [],
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/shop',
    name: 'shop',
    redirect: '/shop/shopcont',
  },
  {
    path: '/user',
    name: 'user',
    redirect: '/user/usercont',
  },
  {
    path: '/staff',
    name: 'staff',
    redirect: '/staff/staffcont',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/login.vue'),
  },
  {
    path: '*',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

// 路由集
const map = {
  '/shop': {
    path: 'shop',
    component: () => import('@/views/Shop/shop.vue'),
    children: [
      {
        path: 'addshop',
        component: () => import('@/views/Shop/addshop.vue'),
      },
      {
        path: 'shopcont',
        component: () => import('@/views/Shop/shopcont.vue'),
      },
      {
        path: 'reviseshop',
        component: () => import('@/views/Shop/reviseshop.vue'),
      },
    ],
  },
  '/user': {
    path: 'user',
    component: () => import('@/views/User/user.vue'),
    children: [
      {
        path: 'adduser',
        component: () => import('@/views/User/adduser.vue'),
      },
      {
        path: 'usercont',
        component: () => import('@/views/User/usercont.vue'),
      },
      {
        path: 'reviseuser',
        component: () => import('@/views/User/reviseuser.vue'),
      },
    ],
  },
  '/staff': {
    path: 'staff',
    component: () => import('@/views/Staff/staff.vue'),
    children: [
      {
        path: 'addstaff',
        component: () => import('@/views/Staff/addstaff.vue'),
      },
      {
        path: 'staffcont',
        component: () => import('@/views/Staff/staffcont.vue'),
      },
      {
        path: 'revisestaff',
        component: () => import('@/views/Staff/revisestaff.vue'),
      },
    ],
  },
};
const router = new VueRouter({
  routes,
});

// 动态路由
export const initDynamicRouter = () => {
  // routes
  // 目前是所有的跳转路由
  const routes = router.options.routes;
  console.log('路由', routes);
  // 查找home对应的routes路由
  const route = routes.find(route => route.name === 'Home');
  console.log('route', route);
  // 由于存入本地后只要页面不关闭，数据会一直存在，导致退出登陆后在登其他会导致数据获取错误
  const rights =
    store.state.user.rights || sessionStorage.getItem('v-user') || [];
  console.log('全局路由', rights);
  // 查找路由
  rights.forEach(right => {
    right.children.forEach(child => {
      // child.path是后端传输的    right.children.path数据
      route.children.push(map[child.path]);
      console.log('route整合过', route);
    });
  });
  router.addRoutes(routes);
};
// 刷新页面重新进行获取后端数据并将数据重新渲染
initDynamicRouter();
// 登陆守卫
router.beforeEach((to, from, next) => {
  const user = sessionStorage.getItem('v-user') || '';
  if (to.path.toLowerCase() === '/login') {
    user ? next('/') : next();
    return false;
  }
  if (!user) {
    next({
      path: '/login',
    });
  } else {
    next();
  }
});
//  处理重复点击

export default router;
