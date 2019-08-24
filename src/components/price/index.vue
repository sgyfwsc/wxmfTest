<template>
  <!--产品介绍页面-->
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
              <router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>
              <router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>
              <router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>
              <router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>
              <router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>
              <router-link to="/operating" style="..."><el-dropdown-item>卡首屏</el-dropdown-item></router-link>
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
      <el-carousel class="banner-warp" :interval="5000" arrow="always" height="200px" style="width: 100%">
        <el-carousel-item v-for="item in 3" :key="item">
          <img src="./image/bnr3_new.jpg"/>
        </el-carousel-item>
      </el-carousel>
    </div>    <!--轮播图-->
    <div class="products">  <!--产品介绍-->
      <p class="products-title">产品介绍</p>
      <p style="color: #929293">7*12小时专业服务；免费享受产品升级优化服务</p>
    </div> <!--产品介绍-->
    <div class="content"> <!--产品内容-->
      <ul class="image-list "> <!--产品类型-->
        <li class="list-img">
          <div class="list-text">
            <p class="list-text-p">免费版</p>
            <p class="list-text-p1">永久免费</p>
          </div>
          <div class="img-box" style="border: 1px solid rgb(156, 170, 188);">
            <p style="padding-top: 70px">免费店铺答疑1次</p>
            <el-button type="info" round class="content-button">立即体验</el-button>
          </div>
        </li>
        <li class="list-img" >
          <div class="list-text text-2">
            <p class="list-text-p">基础版</p>
            <p class="list-text-p1">运营大礼包</p>
          </div>
          <div class="img-box" style="border: 1px solid #67C23A;">
            <p>免费店铺答疑10次</p>
            <p>免费诊断店铺5次服务</p>
            <p>新产品免费体验10天服务</p>
            <el-button type="success" round class="content-button">立即购买</el-button>
          </div>
        </li>
        <li class="list-img">
          <div class="list-text text-3">
            <p class="list-text-p">高级版</p>
            <p class="list-text-p1">运营大礼包</p>
          </div>
          <div class="img-box" style="  border: 1px solid rgba(230, 162, 60, 0.47);">
            <p>免费店铺答疑30次</p>
            <p>免费诊断店铺15次服务</p>
            <p>干货资料</p>
            <p>新产品免费体验50天服务</p>
            <el-button type="warning" round class="content-button">立即购买</el-button>
          </div>
        </li>
      </ul><!--产品类型-->
      <div class="price-service "> <!--产品版本-->
        <table>
          <tr>
            <td>分类</td>
            <td>产品</td>
            <td>功能介绍</td>
            <td>单项购买</td>
            <td>免费版</td>
            <td>基础版</td>
            <td>升级版</td>
          </tr>
          <tr >
            <td rowspan="3"></td>
            <td rowspan="3"></td>
            <td rowspan="3" style="width: 580px; font-size: 12px"></td>
            <td rowspan="3"></td>
            <td rowspan="2">永久免费</td>
            <td >9.9元/月</td>
            <td >19.9元/月</td>
          </tr>
          <tr>
            <td rowspan="1">买一年送一年</td>
            <td >买一年送一年</td>
          </tr>
          <tr>
            <td >
              <el-button type="warning">立即购买</el-button>
            </td>
            <td >
              <el-button type="warning">立即购买</el-button>
            </td>
            <td >
              <el-button type="warning">立即购买</el-button>
            </td>
          </tr>
          <tr >
            <td  rowspan="38">淘宝/天猫</td>
            <td rowspan="4">淘词神器</td>
            <td rowspan="1" style="font-size: 12px">快速找词，品牌词/属性词/重复词多重筛选</td>
            <td rowspan="4">永久免费</td>
            <td rowspan="4" >支持</td>
            <td rowspan="4">支持</td>
            <td rowspan="4">支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">淘宝pc/无线、天猫、1688、蘑菇街等多渠道来源</td>
          </tr>
          <tr>
            <td style="font-size: 12px">TOP20W、潜力词和分词组合，支持表格导出</td>
          </tr>
          <tr>
            <td style="font-size: 12px">支持分词组合</td>
          </tr>
          <tr >
            <td rowspan="3">无线卡首屏</td>
            <td rowspan="1" style="font-size: 12px">淘宝官方接口，安全稳定</td>
            <td rowspan="3">39.9/30天</td>
            <td rowspan="3">不支持</td>
            <td rowspan="3">不支持</td>
            <td rowspan="3" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">关键词卡首页准确稳定</td>
          </tr>
          <tr>
            <td style="font-size: 12px">多渠道增加首页访客</td>
          </tr>
          <tr >
            <td rowspan="3">差评分析</td>
            <td rowspan="1" style="font-size: 12px">批量采集竞品问题，excel导出，了解买家真实需求</td>
            <td rowspan="3">永久免费</td>
            <td rowspan="3">支持</td>
            <td rowspan="3" >支持</td>
            <td rowspan="3">支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">支持淘宝APP、京东APP、拼多多</td>
          </tr>
          <tr >
            <td style="font-size: 12px">支持Excel数据导出</td>
          </tr>
          <tr >
            <td rowspan="3">指数还原</td>
            <td rowspan="1" style="font-size: 12px">新版参谋指数一键还原，可批量操作，科学算法，准确率达99.99%以上</td>
            <td rowspan="3">永久免费</td>
            <td rowspan="3">支持</td>
            <td rowspan="3" >支持</td>
            <td rowspan="3" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">支持交易指数、流量指数、加购指数、客群指数、支付转化指数</td>
          </tr>
          <tr >
            <td style="font-size: 12px">支持搜索人气、收藏人气、点击人气</td>
          </tr>
          <tr >
            <td rowspan="2">标题医生</td>
            <td rowspan="1" style="font-size: 12px">检测标题中的违规词、违禁词、敏感词，有它全都不怕</td>
            <td rowspan="2">永久免费</td>
            <td rowspan="2">支持</td>
            <td rowspan="2" >支持</td>
            <td rowspan="2" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">支持淘宝、京东、拼多多三平台</td>
          </tr>
          <tr >
            <td rowspan="3">一键分词</td>
            <td rowspan="1" style="font-size: 12px">标题一键分词高效准确</td>
            <td rowspan="3">永久免费</td>
            <td rowspan="3">支持</td>
            <td rowspan="3" >支持</td>
            <td rowspan="3">支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">数据快捷导出</td>
          </tr>
          <tr >
            <td style="font-size: 12px">支持数据导出</td>
          </tr>
          <tr >
            <td rowspan="2">手淘问大家</td>
            <td rowspan="1" style="font-size: 12px">一键查询竞品买家问题</td>
            <td rowspan="2">12.9/30天</td>
            <td rowspan="2">不支持</td>
            <td rowspan="2" >支持</td>
            <td rowspan="2" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">excel导出分析，让你了解你的买家</td>
          </tr>
          <tr >
            <td rowspan="3">单品查询</td>
            <td rowspan="1" style="font-size: 12px">透视竞品宝贝的价格、销量、评价数和收藏数等关键数据</td>
            <td rowspan="3">19.9/30天</td>
            <td rowspan="3">不支持</td>
            <td rowspan="3">支持</td>
            <td rowspan="3">支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">快速确定自家宝贝的玩法</td>
          </tr>
          <tr >
            <td style="font-size: 12px">数据快捷导出</td>
          </tr>
          <tr >
            <td rowspan="2">单品跟踪</td>
            <td rowspan="1" style="font-size: 12px">时时监控竞品宝贝时时销量、收藏数和评价数</td>
            <td rowspan="2">17.9/30天</td>
            <td rowspan="2">不支持</td>
            <td rowspan="2">支持</td>
            <td rowspan="2" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">excel导出分析，对你的竞品了如执掌</td>
          </tr>
          <tr >
            <td rowspan="3">蓝海产品</td>
            <td rowspan="1" style="font-size: 12px">通过关键词批量采集热销货源、优质货源</td>
            <td rowspan="3">26.9/30天</td>
            <td rowspan="3">不支持</td>
            <td rowspan="3" >不支持</td>
            <td rowspan="3" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">图表透视宝贝价格和销量趋势分析</td>
          </tr>
          <tr >
            <td style="font-size: 12px">数据快捷导出</td>
          </tr>
          <tr >
            <td rowspan="4">竞店分析</td>
            <td rowspan="1" style="font-size: 12px">一键下载竞品宝贝销售情况</td>
            <td rowspan="4">28.9/天</td>
            <td rowspan="4">不支持</td>
            <td rowspan="4" >不支持</td>
            <td rowspan="4" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">批量采集竞店全店宝贝</td>
          </tr>
          <tr >
            <td style="font-size: 12px">通过数据对竞店进行全店分析，关键指标趋势分析</td>
          </tr>
          <tr >
            <td style="font-size: 12px">全网任意宝贝查询</td>
          </tr>
          <tr >
            <td rowspan="2">竞品车图分析</td>
            <td rowspan="1" style="font-size: 12px">支持批量下载pc端、无线端车图</td>
            <td rowspan="2">29.9/30天</td>
            <td rowspan="2">不支持</td>
            <td rowspan="2" >不支持</td>
            <td rowspan="2" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">支持不同页码、不同排序方式、不同价格区间车图</td>
          </tr>
          <tr >
            <td rowspan="4">拍立淘</td>
            <td rowspan="1" style="font-size: 12px">单品主图、SKU图、详情图和主图视频一键下载</td>
            <td rowspan="4">19.9/30天</td>
            <td rowspan="4">不支持</td>
            <td rowspan="4" >不支持</td>
            <td rowspan="4" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">全店主图、SKU图、详情图和主图视频批量下载</td>
          </tr>
          <tr >
            <td style="font-size: 12px">支持淘宝天猫、1688、京东、拼多多等多平台数据</td>
          </tr>
          <tr >
            <td style="font-size: 12px">数据快捷导出</td>
          </tr>
          <tr >
            <td  rowspan="11">京东</td>
            <td rowspan="4">淘词神器</td>
            <td rowspan="1" style="font-size: 12px">快速找词，品牌词/属性词/重复词多重筛选</td>
            <td rowspan="4">永久免费</td>
            <td rowspan="4" >支持</td>
            <td rowspan="4">支持</td>
            <td rowspan="4">支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">淘宝pc/无线、天猫、1688、蘑菇街等多渠道来源</td>
          </tr>
          <tr>
            <td style="font-size: 12px">TOP20W、潜力词和分词组合，支持表格导出</td>
          </tr>
          <tr>
            <td style="font-size: 12px">支持分词组合</td>
          </tr>
          <tr >
            <td rowspan="3">单品查询</td>
            <td rowspan="1" style="font-size: 12px">透视竞品宝贝的价格、销量、评价数和收藏数等关键数据</td>
            <td rowspan="3">19.9/30天</td>
            <td rowspan="3">不支持</td>
            <td rowspan="3" >支持</td>
            <td rowspan="3" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">快速确定自家宝贝的玩法</td>
          </tr>
          <tr >
            <td style="font-size: 12px">数据快捷导出</td>
          </tr>
          <tr >
            <td rowspan="4">拍立淘</td>
            <td rowspan="1" style="font-size: 12px">单品主图、SKU图、详情图和主图视频一键下载</td>
            <td rowspan="4">19.9/30天</td>
            <td rowspan="4">不支持</td>
            <td rowspan="4" >不支持</td>
            <td rowspan="4" >支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">全店主图、SKU图、详情图和主图视频批量下载</td>
          </tr>
          <tr >
            <td style="font-size: 12px">支持淘宝天猫、1688、京东、拼多多等多平台数据</td>
          </tr>
          <tr >
            <td style="font-size: 12px">数据快捷导出</td>
          </tr>
          <tr >
            <td  rowspan="11">拼多多</td>
            <td rowspan="4">拍立淘</td>
            <td rowspan="1" style="font-size: 12px">单品主图、SKU图、详情图和主图视频一键下载</td>
            <td rowspan="4">19.9/30天</td>
            <td rowspan="4" >支持</td>
            <td rowspan="4">支持</td>
            <td rowspan="4">支持</td>
          </tr>
          <tr >
            <td style="font-size: 12px">全店主图、SKU图、详情图和主图视频批量下载</td>
          </tr>
          <tr>
            <td style="font-size: 12px">支持淘宝天猫、1688、京东、拼多多等多平台数据</td>
          </tr>
          <tr>
            <td style="font-size: 12px">数据快捷导出</td>
          </tr>
          <tr >
            <td rowspan="1">标题医生</td>
            <td rowspan="1" style="font-size: 12px">检测标题中的违规词、违禁词、敏感词，有它全都不怕</td>
            <td rowspan="1">永久免费</td>
            <td rowspan="1">不支持</td>
            <td rowspan="1">不支持</td>
            <td rowspan="1">支持</td>
          </tr>
        </table>
      </div>  <!--产品版本-->
    </div><!--产品内容-->
    <div class="content-edition " v-show="toTopShows" ><!--隐藏产品类型-->
      <div class="edition-box">
        <div class="edition-border">
          <div class="edition-function edition-functions edition-functioned">
            <div class="edition-taber">
              <div class="edition-taber-top">版本</div>
              <div class="edition-taber-buttom">功能</div>
            </div>
          </div>
          <div class="edition-function info">
            <div class="edition-admission">
              <div class="edition-admission-title">免费版</div>
              <div class="edition-admission-button">
                <el-button type="info" round>立即体验</el-button>
              </div>
            </div>
          </div>
          <div class="edition-function primary">
            <div class="edition-admission">
              <div class="edition-admission-title">基础版</div>
              <div class="edition-admission-button">
                <el-button type="success" round>立即购买</el-button>
              </div>
            </div>
          </div>
          <div class="edition-function success">
            <div class="edition-admission">
              <div class="edition-admission-title">高级版</div>
              <div class="edition-admission-button">
                <el-button type="warning" round>立即购买</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!--隐藏产品类型-->
    <div class="contact"><!--banner联系我们-->
      <ul class="contact-ul">
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
        <li class="contact-ul-li contact-ul-li2 contact-ul-li4"  @click="scrollToTop" v-show="toTopShow" >
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
export default {
  data () {
    return {
      toTopShow: false,
      toTopShows: false,
      tableData3: [{
        date: '版本信息',
        fedition: 'X',
        vipersion: '√',
        version: '首次购买送1年域名',
        svipersion: '√'
      }, {
        date: '',
        fedition: 'X',
        vipersion: '√',
        version: '首次购买送邮箱券',
        svipersion: '√'
      }, {
        date: '',
        fedition: 'X',
        vipersion: 'X',
        version: '百度不收录，全额退款',
        svipersion: '√'
      }, {
        date: '',
        fedition: 'X',
        vipersion: '√',
        version: '去广告块',
        svipersion: '√'
      }, {
        date: '',
        fedition: 'X',
        vipersion: 'X',
        version: '隐藏制作信息',
        svipersion: '√'
      }, {
        date: '',
        fedition: '100访客/月',
        vipersion: '10000访客/月',
        version: '流量',
        svipersion: '不限'
      }, {
        date: '网站空间',
        fedition: '30M',
        vipersion: '10G',
        version: '资源库总空间',
        svipersion: '1T'
      }, {
        date: '',
        fedition: '100个',
        vipersion: '1万个',
        version: '文件数量',
        svipersion: '30万个'
      }, {
        date: '',
        fedition: '1M',
        vipersion: '50M',
        version: '单个文件大小',
        svipersion: '1G'
      }]
    }
  },
  methods: {
    handleScroll () {
      // 首先修改相对滚动位置
      this.scrollTop = this.scrollTop = window.pageYOffset || document.body.scrollTop
      if (this.scrollTop > 300) {
        this.toTopShow = true
      } else {
        this.toTopShow = false
      }
    },
    handleScrolls () {
      // 首先修改相对滚动位置
      this.scrollTop = this.scrollTop = window.pageYOffset || document.body.scrollTop
      if (this.scrollTop > 1000) {
        this.toTopShows = true
      } else {
        this.toTopShows = false
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
      window.addEventListener('scroll', this.handleScrolls)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.handleScrolls)
  }
}
</script>
<style scoped>
   ul li{  list-style: none;  float: left;  }
  .bored{  width: 100%;  position: relative; overflow: hidden ; }
  /*导航*/
  .header{  width: 100%;  overflow: hidden;  line-height: 80px;    box-shadow: 0 3px 4px rgba(0,0,0,0.1);   top:0;  background: white; }
  .header-logo{  width: 40%;  float: left;  vertical-align:middle;  }
  .header-logo img{  vertical-align: middle;  }
  .logo-text{  font-size: 26px;  font-weight: 600;  margin-left: 10px;  vertical-align: middle;  }
  .nav-tab{  float: right;  width: 60%;  overflow: hidden;  }
  .nav-tab li {  display: inline-block;  margin: 0 10px 0 10px;  cursor: pointer;  }
  .nav-tab li:hover, .nav-tab li:active,.nav-tab li:focus{  color: #2f82ff;  }
  .el-carousel__item h3 {  color: #475669;  font-size: 18px;  opacity: 0.75;  line-height: 300px;  margin: 0;  }
   .el-dropdown{ font-size: 16px}
   .el-dropdown-menu{  top: 0px;  left:555px; margin: 0}
   >>>.el-dropdown-menu__item{ display: block; float: none;}
   /*轮播*/
  .banner{ width: 100%; background: white; top: 80px;}
  /*产品价格*/
  .products{ padding: 40px 0 60px 0;  width: 1200px;  margin: 0 auto;}
  .products-title{ font-size: 30px;  color: #333;  margin-top: 18px;  margin-bottom: 18px;}
  /*产品内容*/
  .content{  width: 1200px;  margin: 0 auto;  overflow: hidden;  margin-top: 40px; margin-bottom: 40px}
   /*产品类型*/
  .list-text:hover{      border-top-left-radius: 20px;  border-top-right-radius: 20px;}
  .list-img{ opacity: 1;   transition: all 0.7s;  transform: translateY(0px);;padding-top: 20px;}
  .list-img:hover{  transform: translateY(-20px);}
  .image-list{ overflow: hidden; width: 100%;  margin-bottom: 60px; color: white; padding-left: 25px}
  .image-list li{  box-sizing: border-box;  float: left;  width: 33.3%;  padding-right: 22px;  }
  .list-text{  height: 155px;  text-align: center;  border-top-left-radius: 20px;  border-top-right-radius: 20px; background-image: -webkit-linear-gradient(-75deg, rgb(68, 85, 112), rgb(156, 170, 188)); padding-top: 25px; }
  .image-list .list-text .title{  padding: 15px 0 10px 0;  display: block;  font-size: 24px;  font-weight: bold;  line-height: 43px;  color: #fff;  }
  .text-2{  background-image: linear-gradient(165deg,#4baf73,#75d69c);  }
  .text-3{  background-image: -webkit-linear-gradient(-75deg, rgb(255, 175, 0), rgb(255, 234, 0)); }
  .img-box{  text-align: center;  margin: auto; color: black; height: 330px;  box-sizing: border-box;  padding: 60px 10px;  padding-bottom: 0;  border: 1px solid #d3d3d4;  border-top: none;  border-bottom-left-radius: 3px;  border-bottom-right-radius: 3px;  background: #fff;  position: relative;  }
  .img-box p{ line-height: 40px}
   .list-text-p{  padding: 20px 0 10px 0; font-size: 18px}
  .list-text-p1{ font-size: 14px}
  .content-button{  position: absolute;  left: 120px;  top: 270px;}
   /*产品版本*/
   .price-service{  padding: 0 40px 0 40px;  text-align: center; clear: both; overflow: hidden}
   .price-service table tr td{ width: 200px}
   .price-service table{  background: #ebeef5;line-height: 40px}
   .price-service table tr{  background: antiquewhite;}
     /*隐藏产品内容*/
   .content-edition{  position: fixed;  top: 0;  left: 0;  width: 100%; z-index: 1000;  height: 140px;  border-bottom: 0;  opacity: .95; }
   .edition-box{  height: 140px;  background: 0;  text-align: center;  margin: 0 auto;  padding: 0;  float: none;    width: 1200px;    position: relative;border-collapse: collapse;  font-size: 18px;    display: block;  clear: both;  overflow: visible;}
   .edition-border{ position: relative;  top: 0;  height: inherit;  display: inline-block;  zoom: 1;  width: 1200px;  overflow: visible;}
   .edition-function{  border-right: solid #f0f0f5 1px;  border-bottom: solid #f0f0f5 1px; width: 160px;  height: 139px;  background: #fff;  float: left;  text-align: center;  background-color: #fff;}
   .info{  border-bottom: 2px solid rgb(147, 161, 179);}
   .primary{ border-bottom: 2px solid  #67C23A;}
   .success{ border-bottom: 2px solid #e6a23c;}
   .edition-functions{  width: 680px;}
   .edition-functioned{  position: relative;}
   .edition-taber{ width: 116px;  height: 82px;  position: absolute;  left: 50%;  top: 50%;  margin-left: -90px;  margin-top: -42px;}
   .edition-taber-top,.edition-taber-buttom{  width: auto;  height: auto;  position: absolute;  z-index: 1;  font-size: 16px;  font-family: "微软雅黑";  color: #333;}
   .edition-taber-top{ top: 0;  right: -80px;}
   .edition-taber-buttom{ bottom: 0;  left: -70px;}
   .edition-admission{ width: inherit;  height: 138px;}
   .edition-admission-title{  padding: 33px 0 18px 0;}
   .edition-admission-button{  width: 124px;  height: 38px;  line-height: 38px;  margin: 0 auto;}
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
  .contact-ul-li3:hover .contact-cont2{ display: block;  opacity: 1;  transition: linear .2s;  animation-name: fade-in;  animation-duration: .3s;  animation-iteration-count: 1;  animation-delay: 0s;}
  .contact-cont3{ width: 90px}
  .el-button,.el-button--primary,.is-round{  margin: 10px;  }
  .el-button.is-round{  padding: 12px 35px;  }
</style>
