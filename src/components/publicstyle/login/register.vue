<template>
  <!--注册页面-->
  <div class="login-wrap">      <!--登录注册-->
    <div class="login-vip">注册送Vip</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="100px">
      <el-form-item prop="phone" label="手机号">
        <el-input v-model.number="ruleForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="密码"  prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码，6-16位"></el-input>
      </el-form-item>
      <el-form-item label="邀请码"  prop="code">
        <el-input type="code" v-model="ruleForm.code" autocomplete="off" placeholder="请输入邀请码，没有则不写"></el-input>
      </el-form-item>
      <el-form-item prop="picture" label="验证码">
        <el-input v-model="ruleForm.picture" placeholder="请输入验证码" class="el-input-phone picture"></el-input>
        <p v-show="show" @click="getCode(ruleForm)" class="button-picture" >获取验证码</p>
        <span  v-show="!show" class="count">{{count}} 后重发</span>
      </el-form-item>
      <el-row>
        <el-button type="primary" class="button-pictures" @click="submitForm('ruleForm')" >免费注册</el-button>
      </el-row>
      <p class="login-number">已有帐号？
        <router-link to="logon"> 直接登录</router-link >
      </p>
    </el-form>
  </div>     <!--登录注册结束-->
</template>
<script>
import {regist, proving, getCode} from '@/api/request'
export default {
  data () {
    var phone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        var reg = /^1[34578]\d{9}$/
        if (reg.test(value) === false) {
          return callback(new Error('请输入正确的手机号'))
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
      activeName: 'second',
      show: true,
      count: '',
      timer: null,
      ruleForm: {
        phone: '',
        pass: '',
        picture: ''
      },
      rules: {
        phone: [
          { validator: phone, trigger: 'blur' }
        ],
        pass: [
          { validator: pass, trigger: 'blur' }
        ],
        picture: [
          { validator: picture, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
  //    免费注册
    submitForm (formName) {
//      this.$refs[formName].validate((valid) => {
//        if (valid) {
//          this.$message({
//            type: 'success',
//            message: '登录成功'
//          })
//          this.$router.push('/')
//        } else {
//          console.log('error submit!!')
//          return false
//        }
//      })
    },
    regist (row) {
      // 用户注册验证
      let phonenum = this.ruleForm.phone
      let Passwordnum = this.ruleForm.pass
      console.log(this.ruleForm)
      regist({ 'Phone': phonenum,
        'Password': Passwordnum
      }, (res) => {
        console.log(res.result)
      })
    },
    proving (row) {
      // 注册验证验证码
      let phonenum = this.ruleForm.phone
      let smsCodenum = this.ruleForm.picture
      console.log(this.ruleForm)
      proving({ 'Phone': phonenum,
        'smsCode': smsCodenum
      }, (res) => {
        console.log(res)
      })
    },
    getCode (row) {
      // 发送短信验证码请求
      let phonenum = this.ruleForm.phone
      console.log(phonenum)
      getCode({ 'Phone': phonenum
      }, (res) => {
        console.log(res)
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
  .login-wrap{
    width: 578px;
    float: right;
    padding: 0 100px 0 100px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-image: url("../../sign/image/lbt.jpg");
  }
  .el-carousel__item:nth-child(2n+1) {
    background-image: url("../../sign/image/lbt1.jpg");
  }
  >>>.el-carousel__button{
    width: 27px;
  }
  .login-vip{
    margin:30px 0 30px 0;
    font-size: 18px;
    margin-left: 85px;
  }
  .el-button{
    width: 280px;
    margin-bottom: 20px;
  }
  .button-picture{
    display: inline-block;
    width: 110px;
    height: 40px;
    background: #409EFF;
    border-radius: 3px;
    color: white;
    border: 0;
  }
  .count{
    display: inline-block;
    width: 110px;
    height: 40px;
    background: #409EFF;
    border-radius: 3px;
    color: white;
    border: 0;
  }
  >>>.el-input-phone,.picture{
    width: 120px;
    margin-left: -7px;
    display: inline-block;
    margin-right: 35px;
  }
  .button-pictures{
    margin-left: 90px;
    line-height: 25px;
  }
  .login-number{
    margin-left: 75px;
  }
  >>>.el-form-item__error{
    top:40px;
  }
</style>
