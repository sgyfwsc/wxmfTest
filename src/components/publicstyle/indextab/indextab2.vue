<template>
  <!--首页功能演示页面 京东-->
  <div class="demonstrations">
    <el-tabs v-model="activeName1" @tab-click="handleClickjd">
      <el-tab-pane label="单品查询" name="first-jd">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%B7%98%E8%AF%8D%E7%A5%9E%E5%99%A8.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="拍立淘" name="second-jd">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%8B%8D%E7%AB%8B%E6%B7%98.mp4"></video>
      </el-tab-pane>
      <el-tab-pane label="淘词神奇" name="third-jd">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%B7%98%E8%AF%8D%E7%A5%9E%E5%99%A8.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="标题医生" name="fourthed-jd">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%A0%87%E9%A2%98%E5%8C%BB%E7%94%9F.mp4"></video>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName1: 'first-jd'
    }
  },
  methods: {
    handleClickjd (tab, event) {
      console.log(tab, event)
    }
  }
}

</script>
<style scoped>
  >>>.el-tabs__active-bar{ background-color: transparent}
  >>>.el-tabs__nav-wrap::after{  background-color: transparent;  }
  >>>.el-tabs__content {  border: 1px solid #e4e7ed; height: 650px }
  >>>.el-tabs__header, .is-top{  margin: 0 100px 15px;}
  .demonstrations{ margin-top: 30px}
  >>>.el-tab-pane{ height: 100%}
  .video{ height: 100%}
</style>
