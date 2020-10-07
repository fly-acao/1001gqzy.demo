import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/Home/home'
//
Vue.use(Router)
export default new Router({
  routes: [
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
      path: '/audio',
      name: 'audio',
      component:()=>import('@/pages/Audio/audio'),
      meta:{
        tbrShow:true
      },
      children:[
        {
          path: 'movie',
          component:()=>import('@/pages/Audio/sub/movie'),
          meta:{
            tbrShow:true
          }
        },
        {
          path: 'book',
          component:()=>import('@/pages/Audio/sub/book'),
          meta:{
            tbrShow:true
          }
        },
        {
          path: 'tv',
          component:()=>import('@/pages/Audio/sub/tv'),
          meta:{
            tbrShow:true
          }
        },
        {
          path: 'city',
          component:()=>import('@/pages/Audio/sub/city'),
          meta:{
            tbrShow:true
          }
        },
        {
          path: 'music',
          component:()=>import('@/pages/Audio/sub/music'),
          meta:{
            tbrShow:true
          }
        },
      ]
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component:()=>import('@/pages/Broadcast/broadcast'),
      meta:{
        tbrShow:true
      }
    },
    {
      path: '/group',
      name: 'group',
      component:()=>import('@/pages/Group/group'),
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
      component:()=>import('@/pages/Broadcast/login'),
      meta:{
        tbrShow:false
      }
    },
  ]
})
