<template>
  <!--首页功能演示页面 拼多多-->
  <div class="demonstrations">
    <el-tabs v-model="activeName3" @tab-click="handleClickpdd">
      <el-tab-pane label="单品查询" name="first-pdd">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E5%8D%95%E5%93%81%E6%9F%A5%E8%AF%A2.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="拍立淘" name="second-pdd">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%8B%8D%E7%AB%8B%E6%B7%98.mp4"  controls="controls"></video>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName3: 'first-pdd'
    }
  },
  methods: {
    handleClickpdd (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
  >>>.el-tabs__active-bar{ background-color: transparent}
  >>>.el-tabs__nav-wrap::after{  background-color: transparent;  }
  >>>.el-tabs__content {  border: 1px solid #e4e7ed; height: 650px  }
  >>>.el-tabs__header, .is-top{  margin: 0 100px 15px;}
  .demonstrations{ margin-top: 30px}
  >>>.el-tab-pane{ height: 100%}
  .video{ height: 100%}
</style>
