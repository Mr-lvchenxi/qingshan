/*
 * @Author: lvchenxi w_lvchenxi@xiwang.com
 * @Date: 2024-09-04 19:03:21
 * @LastEditors: lvchenxi w_lvchenxi@xiwang.com
 * @LastEditTime: 2024-09-23 16:21:27
 * @FilePath: /QingShan/miniprogram/api/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../service/request'

// export const getTokenByCode = (code) => {
//   return request.get(`https://api.xue.xiwang.com/login/LoginV1/getToken?code=${code}`)
// }

// export const getUserInfo = () => {
//   return request.get(`/v1/miniProgram/user/info`)
// }

// export const unbindOpenid = (openid) => {
//   return request.get(`/v1/miniProgram/user/unbind?open_id=${openid}`)
// }

export const getBookStatus = () => {
  return request.get(`/api/Book/getBookStatus?book_id=${1}`)
}

export const getBookList = () => {
  return request.get(`/api/Book/getBookList?book_id=${1}`)
}

// 获取选择词书tag列表
export const getTags = () => {
  return request.get(`/api/book/getTags`)
}

// 获取tag下的词书列表
export const getBooks = ({ tag }) => {
  return request.post('/api/book/getBooks', {
    tag
  })
}

export const startCaptureTask = ({type, list_id}) => {
  return request.post('/api/behavior_tracker/startCaptureTask', {
    type,
    list_id,
  })
}


export const captureDataInProcess = ({type, id, op}) => {
  return request.post('/api/behavior_tracker/captureDataInProcess', {
    type,
    id,
    op
  })
}

// http://8.130.36.192/api/behavior_tracker/startCaptureTask
