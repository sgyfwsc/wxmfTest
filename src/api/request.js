// // 专门存放发送请求的方法
// import sendAxios from './axios'
import request from './server'
// 密码登录
let login = function (data) {
  return request({
    url: '/Users/Login',
    method: 'post',
    data
  })
}
// 获取短信验证码
let getCode = function (data) {
  return request({
    url: '/Sms/SendSMSCode',
    method: 'get',
    data: '',
    params: {
      Phone: '1519102141'
    }
  })
}
// 获取验证验证码
let proving = function (data) {
  return request({
    url: '/Sms/VerifySMSCode',
    method: 'get',
    data
  })
}
// 用户注册
let regist = function (data) {
  return request({
    url: '/Users/RegisteUser',
    method: 'post',
    data
  })
}

// 修改密码
let password = function (data) {
  // sendAxios('post', 'Users/ModifyPwd', data).then((res) => {
  //   fn(res)
  // })
  return request({
    url: '/Users/ModifyPwd',
    method: 'post',
    data
  })
}
// 修改密码 判断手机号是否注册
// http://47.96.26.207:8099/api/Users/GetUserByPhone?phone=18709269196
let passwords = function (data) {
  // sendAxios('post', 'Users/ModifyPwd', data).then((res) => {
  //   fn(res)
  // })
  return request({
    url: '/Users/GetUserByPhone',
    method: 'get',
    data: '',
    params: {
      Phone: '18709269196'
    }
  })
}
export {
  login, getCode, regist, password, proving, passwords
}
