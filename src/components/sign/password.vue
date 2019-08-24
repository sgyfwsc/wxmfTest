<template>
  <div class="password-warp">      <!--找回密码-->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="100px">
      <el-form-item prop="phone" label="手机号">
        <el-input v-model.number="ruleForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="新密码"  prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入新密码，6-16位"></el-input>
      </el-form-item>
      <el-form-item prop="picture" label="验证码">
        <el-input v-model="ruleForm.picture" placeholder="请输入验证码" class="el-input-phone picture"></el-input>
        <p v-show="show" class="button-pictures-pass" @click="getCode(ruleForm)">获取验证码</p>
        <span  v-show="!show" class="button-pictures-pass">{{count}} 后重发</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="coud pr-button" @click="submitForm('ruleForm')" >确定</el-button>
      </el-form-item>
    </el-form>
  </div>     <!--找回密码-->
</template>
<script>
import {passwords} from '@/api/request'
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
  //    确定找回密码
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            type: 'success',
            message: '登录成功'
          })
          this.$router.push('HelloWorld')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //    regist (row) {
    //      // 用户注册验证
    //      let phonenum = this.ruleForm.phone
    //      let Passwordnum = this.ruleForm.pass
    //      console.log(this.ruleForm)
    //      regist({ 'Phone': phonenum,
    //        'Password': Passwordnum
    //      }, (res) => {
    //        console.log(res)
    //      })
    //    },
    passwords (row) {
      //      用户是否注册验证
      let phonenum = this.ruleForm.phone
      console.log(this.ruleForm)
      passwords({ 'Phone': phonenum
      }, (res) => {
        console.log(res)
      })
    },
    getCode (row) {
      // 发送短信验证码请
      //       let phonenum = this.ruleForm.phone
      //          console.log(phonenum)
      //          getCode({ 'Phone': phonenum
      //          }, (res) => {
      //            console.log(res)
      //          })
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
  .password-warp{ position: absolute;  width: 450px;  left: 35%;  top: 35%;}
  .el-carousel__item h3 {  color: #475669;  font-size: 14px;  opacity: 0.75;  line-height: 150px;  margin: 0;  }
  >>>.el-carousel__button{  width: 27px;  }
  .el-button{  width: 280px;  margin-bottom: 20px;  }
  .button-pictures-pass{  display: inline-block;  width: 140px;  height: 40px;  background: #409EFF;  border-radius: 3px;  color: white;  border: 0; margin-left: 60px;  line-height: 40px; vertical-align: middle}
  >>>.el-input-phone,.picture{  width: 146px; display: inline-block; vertical-align: middle }
  >>>.el-form-item__error{  top:40px;  }
 .pr-button{ line-height: 20px;  width: 350px; }
</style>
