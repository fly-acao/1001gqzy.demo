import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/Home/home'
//
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta:{
        tbrShow:true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        tbrShow:true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component:()=>import('@/pages/Mine/mine'),
      meta:{
        tbrShow:true
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component:()=>import('@/pages/Classify/classify'),
      meta:{
        tbrShow:true
      },
      children:[
        {
          path: 'movie',
          component:()=>import('@/pages/Classify/sub/movie'),
          meta:{
            tbrShow:true
          }
        },
        {
          path: 'book',
          component:()=>import('@/pages/Classify/sub/book'),
          meta:{
            tbrShow:true
          }
        },
        {
          path: 'tv',
          component:()=>import('@/pages/Classify/sub/tv'),
          meta:{
            tbrShow:true
          }
        },
        {
          path: 'city',
          component:()=>import('@/pages/Classify/sub/city'),
          meta:{
            tbrShow:true
          }
        },
        {
          path: 'music',
          component:()=>import('@/pages/Classify/sub/music'),
          meta:{
            tbrShow:true
          }
        },
      ]
    },
    {
      path: '/find',
      name: 'find',
      component:()=>import('@/pages/Find/find'),
      meta:{
        tbrShow:true
      }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component:()=>import('@/pages/Shopping/shopping'),
      meta:{
        tbrShow:true
      }
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component:()=>import('@/tabbar/tabbar'),
      meta:{
        tbrShow:true
      }
    },
    {
      path: '/login',
      component:()=>import('@/pages/Find/login'),
      meta:{
        tbrShow:false
      }
    },
  ]
})
