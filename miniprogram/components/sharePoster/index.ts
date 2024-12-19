// const { buryingPoint } = require('../../../../utils/log')
// const { ALL_YEAR_CODE } = require('../../index.js')

// const App = getApp()

Component({
  behaviors: [],
  properties: {
    // collapsed: {
    //   type: Boolean,
    //   value: false,
    // },
    // studyData: {
    //   type: Object,
    //   value: {},
    // },
    // progress: {
    //   type: Number,
    // },
    // tempFilePath: {
    //   type: String,
    //   value: '',
    // },
    // userInfo: {
    //   type: Object,
    //   value: {},
    // },
    // year: {
    //   type: Number,
    // },
  },
  data: {
    // imgSrc: '',
    // isPad: false,
  },
  lifetimes: {
    created() {},
    attached() {
      // buryingPoint('show_65_15_06_01', {
      //   desc: '分享按钮展示',
      // })
      // pad不显示分享按钮
      // if (!wx.getDeviceInfo) {
      //   this.setData({
      //     isPad: true,
      //   })
      //   return
      // }
      // const { model } = wx.getDeviceInfo()
      // if (/pad/i.test(model)) {
      //   this.setData({
      //     isPad: true,
      //   })
      // }
    },
    moved() {},
    detached() {},
  },
  pageLifetimes: {},
  methods: {
    async handleShare() {
      // buryingPoint('click_65_15_06_01', {
      //   desc: '分享按钮点击',
      // })
      wx.showLoading({
        title: '海报生成中',
      })
      const canvas: any = wx.createOffscreenCanvas({
        type: '2d',
        width: 750 * 3,
        height: 1200 * 3,
      })
      const context = canvas.getContext('2d')
      context.scale(3, 3)
      await this.handleDrawBackground(context, canvas)
      await this.handleDrawUserInfo(context, canvas)
      await this.handleDrawTitle(context, canvas)
      await this.handleDrawCirCle(context, canvas)
      this.handleDrawText(context)
      let base64 = canvas.toDataURL('image/jpeg', 1)
      const time = new Date().getTime()
      const imgPath = wx.env.USER_DATA_PATH + '/poster' + time + 'share' + '.png'
      const imageData = base64.replace(/^data:image\/\w+;base64,/, '')
      const fs: any = wx.getFileSystemManager()
      console.log(imgPath)
      fs.writeFileSync(imgPath, imageData, 'base64')
      fs.close()
      wx.hideLoading()
      wx.showShareImageMenu({
        path: imgPath,

        fail: error => {
          if (error.errMsg.includes('deny')) {
            wx.showToast({
              title: '保存失败，未开启相册权限',
              icon: 'none',
            })
          }
        },
      })
    },
    handleDrawText(context: any) {
      // const { userInfo } = App.globalData
      // const { studyData, progress } = this.properties
      // const userName = userInfo.real_name || userInfo.nick_name
      context.font = '48px DingTalkJinBuTi'
      context.fillStyle = '#00CF8A'
      context.fillText(100, 96, 552)
      context.fillText(200, 96, 678)
      context.fillText(300, 96, 804)
      context.font = '64px DingTalkJinBuTi'
      context.fillStyle = '#00CF8A'
      const percentMetrics = Math.abs(context.measureText(16 + '%').width)
      context.fillText(66 + '%', 590 - percentMetrics / 2, 630)
      context.font = 'bold 32px DingTalkJinBuTi'
      context.fillStyle = '#FAFDFE'
      context.fillText('晨曦', 144, 100)
    },
    async handleDrawBackground(context: any, canvas: any) {
      const image = canvas.createImage()
      await new Promise(resolve => {
        image.onload = resolve
        image.src =
          'https://m.xiwang.com/resource/__private__/bddb296cbe0207af0bae83ca0706baf4/patriarch-end-miniapp/%E4%B8%8D%E5%B8%A6%E5%89%AF%E6%96%87%E6%A1%88%E7%9A%84%E5%88%87%E5%9B%BE.png'
      })
      context.clearRect(0, 0, 750, 1200)
      context.drawImage(image, 0, 0, 750, 1200)
    },
    async handleDrawUserInfo(context: any, canvas: any) {
      const avatarurl_width = 64
      const avatarurl_heigth = 64
      const avatarurl_x = 52
      const avatarurl_y = 52
      // const { userInfo } = App.globalData
      // const { avatar_path, decoration_path } = userInfo
      // const avatar = canvas.createImage()
      // await new Promise(resolve => {
      //   avatar.onload = resolve
      //   avatar.src = avatar_path
      // })
      context.save()
      context.beginPath()
      context.arc(avatarurl_width / 2 + avatarurl_x, avatarurl_heigth / 2 + avatarurl_y, avatarurl_width / 2, 0, Math.PI * 2, false)
      context.clip()
      // context.drawImage(avatar, avatarurl_x, avatarurl_y, avatarurl_width, avatarurl_heigth)
      context.restore()

      // if (decoration_path) {
      //   const decoration = canvas.createImage()
      //   await new Promise(resolve => {
      //     wx.downloadFile({
      //       url: `${decoration_path}?x-oss-process=image/format,png`,
      //       success: ({ tempFilePath }) => {
      //         decoration.src = tempFilePath
      //         decoration.onload = resolve
      //       },
      //       fail: err => {
      //         console.log(err)
      //       },
      //     })
      //   })
      //   context.drawImage(decoration, 30, 32, 102, 102)
      // }
    },
    handleDrawTitle(context: any, canvas: any) {
      const x0 = 0
      const y0 = 0
      const x1 = Math.cos((43 * Math.PI) / 180) * 279 * 3
      const y1 = Math.sin((43 * Math.PI) / 180) * 27 * 3
      const gradient = context.createLinearGradient(x0, y0, x1, y1)

      gradient.addColorStop(0.1867, '#06305A')
      gradient.addColorStop(0.5056, '#1B5898')
      context.fillStyle = gradient
      context.font = '32px PingFang SC'

      // const year = this.properties.year
      // const yearText = year === ALL_YEAR_CODE ? '' : year + '年'
      context.fillText(`这是我${123}在希望学的学习成就`, 72, 346)
    },
    async handleDrawCirCle(context: any, canvas: any) {
      // const { shareProgressImg } = App.globalData
      // if (!shareProgressImg) {
      //   setTimeout(() => {
      //     this.handleDrawCirCle(context, canvas)
      //   }, 500)
      //   return
      // }
      const progress = canvas.createImage()
      // await new Promise(resolve => {
      //   progress.onload = resolve
      //   progress.src = App.globalData.shareProgressImg
      // })
      context.drawImage(progress, 372, 428, 424, 424)
    },
  },
})
