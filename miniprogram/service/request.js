/*
 * @Author: lvchenxi w_lvchenxi@xiwang.com
 * @Date: 2024-09-04 18:59:09
 * @LastEditors: lvchenxi w_lvchenxi@xiwang.com
 * @LastEditTime: 2024-09-08 13:54:28
 * @FilePath: /QingShan/miniprogram/service/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  buildFullPath
} from '../utils/path'
import {
  loadEnvConfig
} from '../utils/env'

/**
 * 当前时间字段
 */
export const CURRENT_TIME_FIELD = 'X-Debug-Current-Time'

class RequestUtils {
  constructor(defaultConfig) {
    this.defaultConfig = defaultConfig
  }
  getUri(url) {
    const targetUrl = buildFullPath(this.defaultConfig.base, url)
    return targetUrl
  }
  getTimeout(timeout) {
    return timeout || this.defaultConfig.timeout || 50000
  }
  getHeaders(header) {
    return {
      ...header,
      ...this.defaultConfig.header,
    }
  }
  sendRequest({
    url,
    data,
    method,
    timeout,
    header = {
      token: 'f4ec3781a159b4aa08d78a99cdd821ed'
    },
  }) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.getUri(url),
        data,
        method,
        timeout: this.getTimeout(timeout),
        header: this.getHeaders(header),
        success: res => {
          console.log('哈哈哈哈', res)
          console.log('请求成功', JSON.stringify(res.data), res.header)
          if (res.data.code === 1) {
            resolve(res.data)
          } else {
            reject(res.data)
            // if (!USER_UNLOGIN_CODE.includes(res.data.code)) {
            //   wx.showToast({
            //     title: res.data.message,
            //     icon: 'none',
            //   })
            // }
          }
        },
        fail: error => {
          console.log('请求失败', JSON.stringify(error))
          reject(error)
        },
        complete: () => {
          console.groupEnd(this.getUri(url))
        },
      })
    })
  }
  get(url, data, config) {
    return this.sendRequest({
      url,
      method: 'get',
      data: data,
      ...config,
    })
  }
  post(url, data, config) {
    return this.sendRequest({
      url,
      method: 'post',
      data,
      ...config,
    })
  }
}

const instance = new RequestUtils({
  base: loadEnvConfig('BASE_URL'),
  timeout: 20000,
  header: {
    'content-type': 'application/json',
  },
})

export default instance