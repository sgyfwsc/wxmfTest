<template>
  <!--首页功能演示页面 淘宝-->
  <div class="demonstrations">
    <el-tabs v-model="activeName" @tab-click="handleClicks">
      <el-tab-pane label="标题医生" name="first">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%A0%87%E9%A2%98%E5%8C%BB%E7%94%9F.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="拍立淘" name="second">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%8B%8D%E7%AB%8B%E6%B7%98.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="无限卡首屏" name="third">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%B7%98%E8%AF%8D%E7%A5%9E%E5%99%A8.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="一键分词" name="fourthed">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E4%B8%80%E9%94%AE%E5%88%86%E8%AF%8D.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="差评分析" name="fourths">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E5%B7%AE%E8%AF%84%E5%88%86%E6%9E%90.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="竞品车图分析" name="fourthd">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E7%AB%9E%E5%93%81%E8%BD%A6%E5%9B%BE%E5%88%86%E6%9E%90.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="指数还原" name="first-tb">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%8C%87%E6%95%B0%E8%BF%98%E5%8E%9F.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="手淘问大家" name="second-tb">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%89%8B%E6%B7%98%E9%97%AE%E5%A4%A7%E5%AE%B6.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="蓝海产品" name="third-tb">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%B7%98%E8%AF%8D%E7%A5%9E%E5%99%A8.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="单品跟踪" name="fourthed-tb">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E5%8D%95%E5%93%81%E8%B7%9F%E8%B8%AA.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="竞店分析" name="fourths-tb">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E6%B7%98%E8%AF%8D%E7%A5%9E%E5%99%A8.mp4"  controls="controls"></video>
      </el-tab-pane>
      <el-tab-pane label="单品查询" name="fourthd-tb">
        <video class="video" src="http://soft.wxmf.com.cn/jc/%E5%8D%95%E5%93%81%E6%9F%A5%E8%AF%A2.mp4"  controls="controls"></video>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClicks (tab, event) {
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
