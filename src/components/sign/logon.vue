<template>
 <div class="login">
   <div class="login-banner">      <!--轮播图-->
     <div class="block">
       <el-carousel height="600px">
         <el-carousel-item v-for="item in 6" :key="item">
         </el-carousel-item>
       </el-carousel>
     </div>
   </div>     <!--轮播图结束-->
   <div class="login-wrap">      <!--登录注册-->
     <router-view></router-view>
   </div>     <!--登录注册结束-->
 </div>
</template>
<script>
export default {
}
</script>
<style scoped>
  .login{  margin: 0 auto;  width: 1000px;  margin-top: 100px;  overflow: hidden;  }
  .login-banner{  width: 420px;  float: left;  }
  .login-wrap{  width: 578px;  float: right;  }
  .el-carousel__item h3 {  color: #475669;  font-size: 14px;  opacity: 0.75;  line-height: 150px;  margin: 0;  }
  .el-carousel__item:nth-child(2n) {  background-image: url("image/lbt.jpg");  }
  .el-carousel__item:nth-child(2n+1) {  background-image: url("image/lbt1.jpg");  }
  >>>.el-carousel__indicator--horizontal{  padding: 12px 2px;  }
</style>
