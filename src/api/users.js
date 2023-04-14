//引入二次封装的axios，封装好的http
import http from "../utils/http";
//进行具体对接后端的方法的封装
//发送验证码
// function sendYzm(data) {
//   return http.get('/users/yzm', data)
// }

//登录
function login(data) {
  return http.post('/account/login', data)
}

// 校验token，返回用户信息
// 很多个接口都需要携带token，所以不用一个一个去传递，可以通过请求头携带token
// function info() {
//   return http.get('/users/info')
// }

export {
  // sendYzm,
  login,
  // info
}