<template>
  <!--登陆页面-->
  <div class="login-wrap">      <!--登录注册-->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="密码登录" name="first">     <!--密码登录-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="100px">
          <el-form-item label="手机号" prop="name">
            <el-input v-model="ruleForm.name"  placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="密码"  prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码，6-16位"></el-input>
          </el-form-item>

          <el-row>
            <el-button type="primary" class="button-pictures" @click="submitForm('ruleForm')">登录</el-button>
          </el-row>
          <p class="login-number">
            <router-link to="password" class="password-m"> 忘记密码？</router-link >
            <router-link to="register"> 立即注册</router-link >
          </p>
        </el-form>
      </el-tab-pane>             <!--密码登录结束-->
      <el-tab-pane label="短信码登录" name="second">    <!--短信码登录-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="100px">
          <el-form-item prop="phone" label="手机">
            <el-input v-model.number="ruleForm.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="picture" label="验证码">
            <el-input v-model="ruleForm.picture" placeholder="请输入验证码" class="el-input-phone picture"></el-input>
            <p v-show="show" @click="getCode(ruleForm)" class="button-picture" >获取验证码</p>
            <span  v-show="!show" class="count">{{count}} 后重发</span>
          </el-form-item>
          <el-row>
            <el-button type="primary" class="button-pictures"  @click="submitForm('ruleForm')">登录</el-button>
          </el-row>
          <p class="login-number">
            <router-link to="register"> 立即注册</router-link >
          </p>
        </el-form>
      </el-tab-pane>           <!--短信码登录结束-->
    </el-tabs>
  </div>     <!--登录注册结束-->
</template>
<script>
import {getCode, login} from '@/api/request'
export default {
  data () {
    var name = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        var reg = /^1[3456789]\d{9}$/
        if (reg.test(value) === false) {
          return callback(new Error('手机号码错误'))
        } else {
          callback()
        }
      }
    }
    var pass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      } else {
        var reg = /^[a-z0-9]{6,16}$/
        if (reg.test(value) === false) {
          return callback(new Error('密码为6-16位字符'))
        } else {
          callback()
        }
      }
    }
    var phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入手机号码'))
      } else {
        var reg = /^1[3456789]\d{9}$/
        if (reg.test(value) === false) {
          return callback(new Error('手机号码错误'))
        } else {
          callback()
        }
      }
    }
    var picture = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('获取验证码'))
      } else {
        var reg = /^\d{4}$/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的验证码'))
        } else {
          callback()
        }
      }
    }
    return {
      activeName: 'first',
      show: true,
      count: '',
      timer: null,
      ruleForm: {
        name: '',
        pass: '',
        phone: '',
        picture: ''
      },
      rules: {
        name: [
          { validator: name, trigger: 'blur' }
        ],
        pass: [
          { validator: pass, trigger: 'blur' }
        ],
        phone: [
          { validator: phone, trigger: 'blur' }
        ],
        picture: [
          { validator: picture, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    //  密码登录
    submitForm (formName) {
      let phonenum = this.ruleForm.name
      let Passwordnum = this.ruleForm.pass
      console.log(this.ruleForm)
      login({ 'Phone': phonenum,
        'Password': Passwordnum
      }, (res) => {
        console.log(res.result)
      })
    //      this.$refs[formName].validate((valid) => {
    //        if (valid) {
    //          this.$message({
    //            type: 'success',
    //            message: '登录成功'
    //          })
    //          this.$router.push('/')
    //        } else {
    //          alert('请重新登陆')
    //          return false
    //        }
    //      })
    },
    //    login (row) {
    //      // 登陆验证
    //      let phonenum = this.ruleForm.name
    //      let Passwordnum = this.ruleForm.pass
    //      console.log(this.ruleForm)
    //      login({ 'Phone': phonenum,
    //        'Password': Passwordnum
    //      }, (res) => {
    //        console.log(res.result)
    //      })
    //    },
    getCode (row) {
      // 发送短信验证码请求
      let phonenum = this.ruleForm.phone
      console.log(phonenum)
      getCode({ 'Phone': phonenum
      }, (res) => {
        console.log(res.result)
      })
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    }
  }
}
</script>
<style scoped>
  .login-wrap{  height: 600px;  padding: 100px 0 100px 0;  box-shadow: inset #cecfd2 0px 0px 6px 0px;  }
  .el-carousel__item h3 {  color: #475669;  font-size: 14px;  opacity: 0.75;  line-height: 150px;  margin: 0;  }
  .el-carousel__item:nth-child(2n) {  background-image: url("../../sign/image/lbt.jpg");  }
  .el-carousel__item:nth-child(2n+1) {  background-image: url("../../sign/image/lbt1.jpg");  }
  >>>.el-carousel__button{  width: 27px;  }
  .login-vip{  margin:30px 0 30px 0;  font-size: 18px;  margin-left: 85px;  }
  .el-button{  width: 280px;  margin-bottom: 20px;  }
  .button-picture{  height: 40px;  background: #409EFF;  border-radius: 3px;  color: white;  border: 0;  display: inline-block;  width: 110px;  }
  .count{  display: inline-block;  width: 110px;  height: 40px;  background: #409EFF;  border-radius: 3px;  color: white;  border: 0;  }
  >>>.el-input-phone,.picture{  width: 120px;  display: inline-block;  margin-right: 35px;  }
  .button-pictures{  margin-left: 90px;  line-height: 25px;  }
  .login-number{  margin-left: 90px;  }
  >>>.el-form-item__error{  top:40px;  }
  .password-m{  margin-right: 110px;  }
  .el-tabs,.el-tabs--top{  width: 370px;  margin-left: 90px;  }
  >>>.el-tabs__header,.is-top{  margin-left: 135px;  }
  >>>.el-tabs__item,.is-top,.is-active{  width: 90px;  }
  >>>.el-tabs__nav,.is-top{  width: 90px;  }
  >>>.el-tabs__nav-wrap::after{  width: 0;  }
</style>
