// 封装axios
import axios from 'axios'
import {api} from './index'
import qs from 'qs'
/* axios封装ajax请求 使用promise再次封装 */
/* methods 请求方法post，get */
/* data 发送的数据 */
/* url 请求地址 */
/* 给methods一个默认值post */
function sendaxios (methods = 'post', url, data = {}) {
  return new Promise((resolve, reject) => {
    let requesturl = api + url + '?' + qs.stringify(data)
    console.log(requesturl)
    axios({
      methods: methods,
      url: requesturl
    }).then((res) => {
      // 请求成功
      if (res.status === 200) {
        resolve(res.data)
      } else {
        alert('请求失败')
      }
      // console.log('返回的待处理数据,', res)
    }).catch((res) => {
      console.log('error')
    })
  })
}

export default sendaxios
