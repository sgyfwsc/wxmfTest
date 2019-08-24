<template>
  <div class="bored">
   <div class="header">   <!--导航-->
      <div class="header-logo"> <!--左导航-->
        <img src="./image/logo.png"/>
        <span class="logo-text">魔方工具</span>
        <span>|</span>
        <div style="display: inline-block;">
          <span style=" border: 1px solid #d9d9d9; padding: 5px; font-size: 12px;">电商运营简单高效</span>
        </div>
      </div>
     <ul class="nav-tab"> <!--导航切换-->
       <li><router-link to="/" style="...">首页</router-link></li>
       <li>
         <el-dropdown>
          <span class="el-dropdown-link">
             运营工具<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
             <el-dropdown-menu slot="dropdown">
               <!--<router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>-->
               <!--<router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>-->
               <!--<router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>-->
               <!--<router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>-->
               <!--<router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>-->
               <!--<router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>-->
               <el-dropdown-item ><div  class="footers" @click="returnTop" >魔方卡首屏</div></el-dropdown-item>
               <el-dropdown-item><div  class="footers" @click="returnTop" >Top20w词表</div></el-dropdown-item>
               <el-dropdown-item><div  class="footers" @click="returnTop" >指数还原</div></el-dropdown-item>
               <el-dropdown-item><div  class="footers" @click="returnTop" >店铺上新监控</div></el-dropdown-item>
               <el-dropdown-item><div  class="footers" @click="returnTop" >上下架时间监控</div></el-dropdown-item>
               <el-dropdown-item><div  class="footers" @click="returnTop" >违禁词排查</div></el-dropdown-item>
             </el-dropdown-menu>
         </el-dropdown>
       </li>
       <li><router-link to="price" style="...">版本购买</router-link></li>
       <li>交流中心</li>
       <li>安装帮助</li>
       <router-link  to="register" style="..."><el-button type="primary" round style="margin: 0 10px 0 20px;">免费注册</el-button></router-link>
       <router-link to="logon" style="..."><el-button round>登录</el-button></router-link>
     </ul>
    </div> <!--导航-->
    <div class="banner" >  <!--轮播图-->
      <el-carousel class="banner-warp" :interval="5000" arrow="always" height="500px" style="width: 100%">
        <el-carousel-item  v-for="(item,index) in imglists" :key="index">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>    <!--轮播图-->
    <div class="query">  <!--查询-->
      <div class="query-box">
        <div class="query-border">
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="关键词" name="first">
              <div >
                <el-input placeholder="请输入要查询的关键词" v-model="input5" class="input-with-select">
                  <el-button slot="append" ><router-link to="logon" style="...">查询</router-link></el-button>
                </el-input>
              </div>
            </el-tab-pane>
            <el-tab-pane label="宝贝" name="second">
              <div >
                <el-input placeholder="请输入要查询的宝贝" v-model="input5" class="input-with-select">
                  <el-button slot="append"><router-link to="logon" style="...">查询</router-link></el-button>
                </el-input>
              </div>
            </el-tab-pane>
            <el-tab-pane label="店铺" name="third">
              <div >
                <el-input placeholder="请输入要查询的店铺" v-model="input5" class="input-with-select">
                  <el-button slot="append"><router-link to="logon" style="...">查询</router-link></el-button>
                </el-input>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>  <!--查询-->
    <div class="content" ><!--滚动数字-->
      <div class="content-bar">
         <ul class="contact-bar-list">
           <li class="contact-bar-item">
             <div>
               <span class="contact-bar-title"><countTo :startVal='startVal' :endVal='endVal' :duration='duration'></countTo></span>
               <span class="contact-bar-titles" >W+</span>
             </div>
             <div class="contact-bar-text">数据获取</div>
           </li>
           <li class="contact-bar-item">
             <div>
               <span class="contact-bar-title"><countTo :startVal='startVals' :endVal='endVals' :duration='duration'></countTo></span>
               <span class="contact-bar-titles" >W+</span>
             </div>
             <div class="contact-bar-text">图片获取</div>
           </li>
           <li class="contact-bar-item">
             <div>
               <span class="contact-bar-title"><countTo :startVal='startVale' :endVal='endVale' :duration='duration'></countTo></span>
               <span class="contact-bar-titles" >W+</span>
             </div>
             <div class="contact-bar-text">用户人数</div>
           </li>
           <li class="contact-bar-item">
             <div>
               <span class="contact-bar-title"><countTo :startVal='startVales' :endVal='endVales' :duration='duration'></countTo>%</span>
               <span class="contact-bar-titles" >+</span>
             </div>
             <div class="contact-bar-text">包含类目</div>
           </li>
         </ul>
      </div>
    </div><!--滚动数字-->
    <div class="business" id="header" > <!--运营工具-->
      <div class="operat">
        <div class="operat-warp">
          <h2>运营工具</h2>
          <ul class="operat-box">
            <li>
              <div class="operat-box-bg operat-box-bg1"></div>
              <h2>魔方卡首屏</h2>
              <p style="margin: 10px"> 手淘首页</p>
              <span style="color: #999; font-size: 12px">官方接口，快速准确</span>
            </li>
            <li>
              <router-link to="operatings" style="...">
                <div class="operat-box-bg operat-box-bg2"></div>
                <h2>Top20w词表</h2>
                <p style="margin: 10px"> Top20w</p>
                <span style="color: #999; font-size: 12px">实时在线查看，优化你的直通车</span>
              </router-link>
            </li>
            <li>
              <div class="operat-box-bg operat-box-bg3"></div>
              <h2>指数还原</h2>
              <p style="margin: 10px"> 新版参谋指数</p>
              <span style="color: #999; font-size: 12px">科学算法，准确率高</span>
            </li>
            <li>
              <div class="operat-box-bg operat-box-bg4"></div>
              <h2>店铺上新监控</h2>
              <p style="margin: 10px"> 手淘首页</p>
              <p style="color: #999; font-size: 12px ; text-align: left">
                1.实时监控竞品上新宝贝动态，发觉爆款产品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                2.透视宝贝的上新时间、类目、加个、销量、收藏、加购等关键数据&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&ensp;3.为自己竞品打法做准备
              </p>
            </li>
            <li>
              <div class="operat-box-bg operat-box-bg5"></div>
              <h2>上下架时间监控</h2>
              <p style="margin: 10px"> 手淘首页</p>
              <p style="color: #999; font-size: 12px">透视竞品宝贝上下架时间，计算市场竞争，为自己宝贝上下架选择最佳时间</p>
            </li>
            <li>
              <div class="operat-box-bg operat-box-bg6"></div>
              <h2>违禁词排查</h2>
              <p style="margin: 10px"> 手淘首页</p>
              <p style="color: #999; font-size: 12px">违规词、违禁词、敏感词自主排查，遵守法律法规及平台规则</p>
            </li>
          </ul>
        </div>
      </div>
    </div><!--运营工具-->
    <div class="demonstration">  <!--功能演示-->
      <div class="demonstration-warp">
        <div class="demonstration-tb">
          <router-link to="/indextab1">
            <span >淘宝</span>
          </router-link>
          <router-link to="/indextab2">
            <span >京东</span>
          </router-link>
          <router-link to="/indextab3">
            <span >拼多多</span>
          </router-link>
          <div class="demonstrations">
              <router-view></router-view>
          </div>
        </div>
        <div class="strength"> <!--实力保障-->
          <h2 style="margin-bottom: 40px">客户说</h2> <!--轮播-->
          <el-carousel :interval="2000" type="card" height="600px">
            <el-carousel-item v-for="(item,index) in imglist" :key="index">
              <img :src="item"/>
            </el-carousel-item>
          </el-carousel>
        </div>  <!--实力保障-->
      </div>
    </div><!--功能演示-->
    <div class="footer"><!--底部-->
      <div class="footer-top">
        <ul class="footer-top-lf">
          <li style="width: 100%; text-align: left">友情链接</li>
          <li>淘宝网</li>
          <li>天猫商城</li>
          <li>京东商城</li>
          <li>拼多多商城</li>
          <li>申请友情链接>>></li>
          <p style="display: flex; width: 100%; cursor: pointer">关于我们>>></p>
        </ul>
        <div class="footer-top-rt">
          <ul class="footer-rt-left">
            <li style="cursor: pointer">联系我们</li>
            <li>
              <i class="el-icon-message"></i>
              <span>客服邮箱：mail@51liuliangshenqi.com</span>
            </li>
            <li>
              <i class="el-icon-time"></i>
              <span>客服时间：09:00-18:00</span>
            </li>
            <li>
              <img style="  width: 20px;  vertical-align: middle;  margin-left: -4px;" src="./image/qq.png"/>
              <span>QQ在线客服</span>
            </li>
          </ul>
          <div class="footer-rt-right">
            <img src="./image/WX01.jpg"/>
            <div>微信扫码关注我们</div>
          </div>
        </div>
      </div>
      <div class="footer-buttom">
        <img style="vertical-align: middle; margin-right: 10px" src="./image/gab_ico.png"/>
        陕|ICP备|19003711|号|-1
      </div>
    </div><!--底部-->
    <div class="contact"><!--banner联系我们-->
     <ul class="contact-ul">
       <li style=" color: white; margin-left: 50px; display: none">
         <p>模仿工具，让电商服务简单高效</p>
         <el-button type="primary" plain>成功按钮</el-button>
       </li>
       <li class="contact-ul-li contact-ul-li1">
         <div class="contact-cont">
           <span class="contact-span"></span>
           <p style="font-size: 12px; margin: 10px"> 为保证服务质量，请先登录 </p>
           <el-button type="primary" round>联系客服</el-button>
           <el-button type="primary" round>代理咨询</el-button>
           <p style="font-size: 12px; margin-top: 20px"> 客服电话：4000-399-000 </p>
           <div class="contact-jc">
             <router-link to="index" style="color: #2f82ff">检测我的网站</router-link>
           </div>
         </div>
       </li>
       <li class="contact-ul-li contact-ul-li2">
         <div class="contact-cont1">
           <span class="contact-span"></span>
           免费店铺诊断
         </div>
       </li>
       <li class="contact-ul-li contact-ul-li3">
         <div class="contact-cont2">
           <span class="contact-span"></span>
           <img src="./image/WX01.jpg" style="width: 120px; margin-top: 10px"/>
            <p style="font-size: 14px"> 微信扫一扫关注</p>
            <p style="margin-top: 10px; font-size: 12px">简单网站建设教程</p>
         </div>
       </li>
       <li class="contact-ul-li contact-ul-li2 contact-ul-li4 top"  @click="scrollToTop" v-show="toTopShow" >
         <div class="contact-cont1 contact-cont3">
           <span class="contact-span"></span>
           返回顶部
         </div>
       </li>
     </ul>
    </div><!--banner联系我们-->
  </div>
</template>
<script>
import countTo from 'vue-count-to'
import banner1 from './image/banner.jpg'
import banner2 from './image/banner1.jpg'
import banner3 from './image/banner2.jpg'
import cursorel1 from './image/shu1.png'
import cursorel2 from './image/shu2.png'
import cursorel3 from './image/shu3.jpg'
import cursorel4 from './image/shu4.jpg'
import cursorel5 from './image/shu5.jpg'
import cursorel6 from './image/shu6.jpg'
import cursorel7 from './image/shu7.png'
export default {
  components: {
    countTo
  },
  name: 'carrousel',
  data () {
    return {
      imglists: [banner1, banner2, banner3],
      imglist: [cursorel1, cursorel2, cursorel3, cursorel4, cursorel5, cursorel6, cursorel7],
      activeName: 'first',
      activeName2: 'first',
      activeName1: 'first-jd',
      activeName3: 'first-pdd',
      input5: '',
      toTopShow: false,
      // 需要滚动的时间
      duration: 5000,
      // 初始值
      startVal: 0,
      // 最终值
      endVal: 3000,
      // 初始值
      startVals: 0,
      // 最终值
      endVals: 200,
      // 初始值
      startVale: 0,
      // 最终值
      endVale: 10,
      // 初始值
      startVales: 0,
      // 最终值
      endVales: 90
    }
  },
  methods: {
    returnTop: function () {
      document.querySelector('#header').scrollIntoView(false)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleClicks (tab, event) {
      console.log(tab, event)
    },
    handleClickjd (tab, event) {
      console.log(tab, event)
    },
    handleClickpdd (tab, event) {
      console.log(tab, event)
    },
    callback (tab, event) {
      console.log(tab, event)
    },
    handleScroll () {
      // 首先修改相对滚动位置
      this.scrollTop = this.scrollTop = window.pageYOffset || document.body.scrollTop
      if (this.scrollTop > 300) {
        this.toTopShow = true
      } else {
        this.toTopShow = false
      }
    },
    scrollToTop () {
      var timer
      var _that = this
      // 动画，使用requestAnimationFrame代替setInterval
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn () {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 50
          // 然后修改这里实现动画滚动效果
          document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
          _that.toTopShow = false
        }
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      // 修改事件监听
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped>
  .el-carousel__item h3 {  color: #475669;  font-size: 14px;  opacity: 0.75;  line-height: 200px;  margin: 0;  }
  .el-select .el-input {  width: 130px;  }
  .input-with-select .el-input-group__prepend {  background-color: #fff;  }
  ul li{  list-style: none;  float: left;  }
  .bored{  width: 100%;  position: relative; overflow: hidden }
  /*导航*/
  .header{  width: 100%;  overflow: hidden;  margin: auto;  line-height: 80px;  left: 50%;  transform: translate(-50%, 0);  box-shadow: 0 3px 4px rgba(0,0,0,0.1);  position: fixed;  z-index: 999;  top:0;  background: white;  z-index: 10;  }
  .header-logo{  width: 40%;  float: left;  vertical-align:middle;  }
  .header-logo img{  vertical-align: middle;  }
  .logo-text{  font-size: 26px;  font-weight: 600;  margin-left: 10px;  vertical-align: middle;  }
  .nav-tab{  float: right;  width: 60%;  overflow: hidden;  }
  .nav-tab li {  display: inline-block;  margin: 0 10px 0 10px;  cursor: pointer;  }
  .nav-tab li:hover, .nav-tab li:active,.nav-tab li:focus{  color: #2f82ff;  }
  .el-carousel__item h3 {  color: #475669;  font-size: 18px;  opacity: 0.75;  line-height: 300px;  margin: 0;  }
  /*轮播*/
  .banner{  position: fixed;  width: 100%;  left: 50%;  background: white;  transform: translate(-50%, 0);  top: 80px;  z-index: 0;  }
  /*查询*/
   .query{ position: relative;  z-index: 2;  background: #fff; margin-top: 580px; height: 200px}
   .query-box{ margin: 0 auto; width: 1200px ; padding-top: 40px;}
   .query-border{  border: 1px solid #e4e8ef; padding: 20px 40px 20px 40px; box-shadow: 0 0 18px 0 #a9adb5;}
   .el-button el-button--default{ margin: 0}
   >>>.el-tabs--card>.el-tabs__header{ border-bottom: 0;}
   >>>.el-tabs--card>.el-tabs__header .el-tabs__nav{ border-bottom: 1px solid #E4E7ED}
  /*中间内容动态数字*/
  .content{  position: relative;  z-index: 2;  background: #fff;  width: 100%;  margin: 0 auto;}
  .content-bar{  padding: 50px 0;  width: 1200px;  margin: 0 auto;  text-align: center;  }
  .contact-bar-list{  text-align: center;  display: inline-block;  }
  .contact-bar-item{  padding: 0 94px;  border-left: solid #ebebeb 1px;  padding-top: 12px;  display: inline-block;  zoom: 1;  float: none;  font-family: HelveticaNeueLTPro,微软雅黑;  text-align: left;  }
  .contact-bar-item:first-child{  border-left: none;  padding-left: 0;  }
  .contact-bar-item:last-child{  width: 231px;  padding-right: 0;  }
  .contact-bar-title{  font-size: 40px;  line-height: 1;  }
  .contact-bar-titles{  vertical-align: top;    font-size: 14px;margin-left: 10px;line-height: 1;  }
  .contact-bar-text{  padding-top: 30px;font-size: 16px;}
  /*运营工具*/
  .business{  position: relative;  z-index: 9;  padding-top: 2px;  margin-top: -2px;  min-width: 1200px;  background: #fbfbfb;}
  .operat-warp{ width: 1200px; margin: 0 auto; margin-top: 40px}
  .operat-box{ overflow: hidden; margin-top: 50px}
  .operat-box li{ width: 28%; margin: 30px 31px; padding: 30px; position: relative; cursor: pointer;}
  .operat-box li:hover{ width: 28%; box-shadow: 0 0 18px 0 rgba(7,17,27,.2); margin: 30px 31px; padding: 30px;    -webkit-transition: .5s;}
  .operat-box-bg{ position: absolute;  left: 50%;  top: -17px;  display: block;  width: 48px;  height: 48px; line-height: 48px;  margin-left: -24px; background-image: url(./image/yygj3.png);  background-repeat: no-repeat; }
  .operat-box-bg2{ background-image: url(./image/yygj1.png);  background-repeat: no-repeat; }
  .operat-box-bg3{ background-image: url(./image/yygj6.png);  background-repeat: no-repeat;}
  .operat-box-bg4{ background-image: url(./image/yygj2.png);  background-repeat: no-repeat;}
  .operat-box-bg5{background-image: url(./image/yygj4.png);  background-repeat: no-repeat;}
  .operat-box-bg6{  background-image: url(./image/yygj5.png);  background-repeat: no-repeat;}
  .el-dropdown{ font-size: 16px}
  /deep/.el-dropdown-menu{  top: 0px;  left:555px; margin: 0}
  >>>.el-dropdown-menu__item{ display: block; float: none;}
  /*功能演示*/
  .demonstration{ position: relative; z-index: 2 ; background: white }
  .demonstration-warp{ width: 1200px; margin: 0 auto;  padding: 40px 0}
  >>>.el-tabs__active-bar{ background-color: transparent}
  >>>.el-tabs__nav-wrap::after{  background-color: transparent;  }
  >>>.el-tabs__content {  border: 1px solid #e4e7ed;  }
  .demonstration-tb span{ font-size: 26px; font-weight: bold; margin: 30px; color: black}
  >>>.el-tabs__header, .is-top{  margin: 0 100px 15px;}
  .demonstrations{ margin-top: 30px}
  .strength{ margin-top: 40px}
   /*实力保障*/
  .strength-warp{ overflow: hidden; margin-top: 30px}
  .strength-warp li{ width: 20%; margin: 0 30px}
  .strength-warp li img { width: 100%}
  .strength-warp li p{ margin: 20px 0  40px 0}
  /*底部*/
  .footer{  position: relative;  z-index: 2; background: #001c19; color: #747d7c; font-size: 14px; overflow: hidden}
  .footer-top{ width: 1200px; margin: 0 auto; overflow: hidden; padding: 50px 0}
  .footer-top-lf{ float: left; width: 50%;}
  .footer-top-lf li{   margin-right: 10px;  margin-bottom: 18px;}
  .footer-top-lf li:hover{ cursor: pointer;    color: #eee;  transition: 0.3s;}
  .footer-top-rt{ float: right; width: 50%; overflow: hidden}
  .footer-rt-left{ width: 50%; overflow: hidden; float: left}
  .footer-rt-left li{ margin-right: 10px;  margin-bottom: 18px; text-align: left; width: 100%}
  .footer-rt-left li span{ color: rgba(255,255,255,0.8); margin-left: 15px}
  .footer-rt-left li span:hover{ color: #eee;  transition: 0.3s; cursor: pointer}
  .footer-rt-left li:last-child span{display: inline-block;  border: 1px solid #747d7c;  height: 28px;  line-height: 26px;  padding: 0 10px;  border-radius: 2px;}
  .footer-rt-right{ width: 50%; float: right; color: rgba(255,255,255,0.8);  text-align: center;}
  .footer-rt-right img{ width: 40%; padding-top: 5px; cursor: pointer}
  .footer-buttom{ border-top: 1px solid #1a3330; line-height: 50px}
   /*banner联系我们*/
  .contact{  position: fixed;  right: 10px;  top: 30%; font-size: 14px;  color: #243558;  z-index: 10000; }
  .contact-ul{  margin: 0;  padding: 0;  position: absolute;  right: 0;  }
  .contact-ul-li{  float: none; width: 40px;  height: 40px;  background: #fff;  margin-bottom: 10px;  border-radius: 4px;  box-sizing: border-box;  box-shadow: 0 0 9px 0 rgba(0,0,0,0.1);  }
  .contact-span{  top: 12px;  right: -11px;  position: absolute;  border-top: 7px solid transparent;  border-bottom: 7px solid transparent;  border-left: 11px solid #e1e6ec;  z-index: 1010;  }
  .contact-span:before{  content: "\20";  width: 80px;  height: 45px;  top: -20px;  right: -52px;  position: absolute;  background: rgba(0,0,0,0);  }
  .contact-span:after{  content: "\20";  top: -6px;  right: 1px;  position: absolute;  border-top: 6px solid transparent;  border-bottom: 6px solid transparent;  border-left: 10px solid #fff;  z-index: 1000;  }
  .contact-ul-li1{  background: url("image/dx.png") no-repeat 7px;  background-size: 70%;  }
  .contact-ul-li1:hover{  background: url("image/duanxing.png") no-repeat 7px #4f7cfc;  background-size: 70%;  }
  .contact-ul-li2{  background: url("image/gb.png") no-repeat 7px;  background-size: 70%;  }
  .contact-ul-li2:hover{  background: url("image/gangbi.png") no-repeat 7px #4f7cfc;  background-size: 70%;  }
  .contact-ul-li3{  background: url("image/ewm.png") no-repeat 7px;  background-size: 70%;  }
  .contact-ul-li3:hover{  background: url("image/erweima.png") no-repeat 7px  #4f7cfc;  background-size: 70%;  }
  .contact-ul-li4{  background: url("image/fh.png") no-repeat 7px;  background-size: 70%;  }
  .contact-ul-li4:hover{  background: url("image/fsnhui.png") no-repeat 7px  #4f7cfc;  background-size: 70%;  }
  .contact-cont{   width: 200px;  border-radius: 3px;  background: #fff;  right: 62px;  position: absolute;  text-align: center;  border: 1px solid #e1e6ec;  display: none;  opacity: 0; }
  .contact-ul-li1:hover .contact-cont{  display: block;  opacity: 1;  transition: linear .2s;  animation-name: fade-in;  animation-duration: .3s;  animation-iteration-count: 1;  animation-delay: 0s;}
  .contact-jc{  font-size: 16px;  margin-top: 20px;  padding: 20px;  color: #2f82ff;  border-top: 1px solid #e8e8e8;  }
  .contact-cont1{  width: 264px;  height: 40px;  line-height: 40px;  background: #fff;  border-radius: 5px;  right: 62px;  text-align: center;  position: absolute;  display: none;  border: 1px solid #e1e6ec;}
  .contact-ul-li2:hover .contact-cont1{ display: block;  opacity: 1;  transition: linear .2s;  animation-name: fade-in;  animation-duration: .3s;  animation-iteration-count: 1;  animation-delay: 0s;}
  .contact-cont2{      width: 143px;  height: 202px;  border-radius: 3px;  background: #fff;  right: 62px;  position: absolute;  text-align: center;  border: 1px solid #e1e6ec;  background-color: #f6f8fb;  display: none;  opacity: 0;}
  .contact-ul-li3:hover .contact-cont2{ display: block;  opacity: 1;  transition: linear .2s;  animation-name: fade-in;  animation-duration: .3s;  animation-iteration-count: 1;  animation-delay: 0s;}
  .contact-cont3{ width: 90px; }
  .el-button.is-round{  padding: 12px 35px; margin-bottom: 20px }
</style>
