import Vue from 'vue'
import Router from 'vue-router'
// 主页
import index from '@/components/index/index.vue'
// 主页tab1
import indextab1 from '@/components/publicstyle/indextab/indextab1.vue'
// 主页tab2
import indextab2 from '@/components/publicstyle/indextab/indextab2.vue'
// 主页tab3
import indextab3 from '@/components/publicstyle/indextab/indextab3.vue'
// 运营工具表格
import operatings from '@/components/operatings/index.vue'
// 价格
import price from '@/components/price/index.vue'
// 登录注册
import logon from '@/components/sign/logon.vue'
// 登录
import login from '@/components/publicstyle/login/login.vue'
// 注册
import register from '@/components/publicstyle/login/register.vue'
// 找回密码
import password from '@/components/sign/password.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: index,
        about: index
      },
      children: [
        {
          path: '/indextab1',
          components: {
            default: indextab1
          }
        },
        {
          path: '',
          components: {
            default: indextab1
          }
        },
        {
          path: '/indextab2',
          components: {
            default: indextab2
          }
        },
        {
          path: '',
          components: {
            default: indextab2
          }
        },
        {
          path: '/indextab3',
          components: {
            default: indextab3
          }
        },
        {
          path: '',
          components: {
            default: indextab3
          }
        }
      ]
    },
    {
      path: '/price',
      name: 'price',
      component: price
    },
    {
      path: '/operatings',
      name: 'operatings',
      component: operatings
    },
    {
      path: '/logon',
      components: {
        default: logon
      },
      children: [
        {
          path: '',
          components: {
            default: login
          }
        },
        {
          path: '/register',
          components: {
            default: register
          }
        }
      ]
    },
    {
      path: '/password',
      name: 'password',
      component: password
    }
  ]
})
