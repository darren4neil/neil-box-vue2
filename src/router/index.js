// 引入路由模块
import Vue from 'vue'
import Router from 'vue-router'
import Cookies from "js-cookie"

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//使用路由模块
Vue.use(Router)

//引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//使用elementui
Vue.use(ElementUI)

import  {menuTreeData}  from '../menu/menu'

import Login from '../Login/Login.vue'
import Home from '../menu/HomeVue'
import store from '@/store'


const router= new Router({
  base: process.env.NODE_ENV === "production" ? '/vue-template-box/' : "",
  routes: [
    {
      path : '/', 
      name : 'Home',
      component :  Home,
      children :[
      ]
    },
    {
      path : '/Login', 
      name : 'Login',
      component :  Login
    }
    
  ]
})

router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let token = Cookies.get('token')
  let userName = sessionStorage.getItem('user')
  if (to.path === '/Login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if (token) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    if (!token) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      console.log("登录界面")
      next({
        path: '/Login'
      })
    } else if(!store.state.menu.routeLoaded){
      // 加载动态菜单和路由
      addDynamicMenuAndRoutes(userName);
      //坑：直接使用next()刷新后会一直白屏
      next({ ...to,replace:true});
    }
    else{
      next();
    }
  }
})

function addDynamicMenuAndRoutes(userName){
  let dynamicRouters=addDynamicRoutes(menuTreeData);
  //将路由添加到Home的children中去
  router.options.routes[0].children=router.options.routes[0].children.concat(dynamicRouters)
  //添加到路由（因版本问题，可能写成router.addRoutes,多一个s）
  router.addRoute(router.options.routes[0]);
  // 保存加载状态
  store.commit('routeLoaded', true);
  // 保存菜单树
  store.commit('menus', menuTreeData);
  console.log("路由加载");
}

function addDynamicRoutes(menuList=[],routes=[]){
  //用于筛选出最底层的children 
  var temp = [];
  for (let i = 0; i < menuList.length; i++) {
     //判断children 是否存在
    if (menuList[i].children && menuList[i].children.length >= 1) {
      temp = temp.concat(menuList[i].children)
      //判断地址是否正确
    }else if (menuList[i].route && /\S/.test(menuList[i].route)) {
      //menuList[i].route = menuList[i].route.replace(/^\//, '');
      // 创建路由配置
      //踩坑记1：必须要写成@/views/${变量}
      //踩坑记2：${变量}，这个“变量”不要用另一个变量接收，以免造成浅拷贝，使得变量的值改变
      var reg2 = /([^/]+)$/;
      var route = {
        path: menuList[i].route,
        name: menuList[i].menuName,
        component: resolve => require([`@/views/${menuList[i].route.match(reg2)[1]}.vue`], resolve),
        meta: {
          icon: menuList[i].icon,
          index: menuList[i].menuId
        }
      }
      routes.push(route);
    }
  }
  //将筛选出来的children进行重复调用
  if (temp.length >= 1) {
    addDynamicRoutes(temp, routes)
  } else {
    console.log('动态路由加载...')
    console.log(routes)
    console.log('动态路由加载完成.')
  }
  return routes
}


export default router