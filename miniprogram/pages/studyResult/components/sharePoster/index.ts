import { loadFontFace } from '../../../../utils/base'

Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    async handleShare() {
      wx.showLoading({
        title: '海报生成中',
      })
    // 在小程序启动时加载字体
    await loadFontFace('DINExp', 'https://m.xiwang.com/resource/__private__/4c49adcdd99a6bd53fa15bac814cfa6b/D-DINExp-Bold.ttf')
    await loadFontFace('DingTalkJinBuTi', 'https://m.xiwang.com/resource/__private__/4c49adcdd99a6bd53fa15bac814cfa6b/DingTalkJinBuTi.ttf')
      this.handleShareDateOne()
    },
    async handleShareDateOne() {
      let _this = this;
      // 创建一个canvas实例，拿到context
      let canvas: any = wx.createOffscreenCanvas({
        type: "2d",
        width: 654,
        height: 904,
      });
      let context = canvas.getContext("2d");

      // const dpr = wx.getSystemInfoSync().pixelRatio;

      // console.log('哈哈哈哈哈---------》', dpr)

      // context.scale(dpr, dpr);

      await _this.handleDrawBackground(context, canvas)
      const image = canvas.createImage()
      await new Promise(resolve => {
        image.onload = resolve
        image.src = 'https://m.xiwang.com/resource/2PyeR4jcp3E6PgQNHlE3i-1721806959358.jpg'
      })
      context.drawImage(image, 500, 720, 100, 100);

      const image2 = canvas.createImage()
      await new Promise(resolve => {
        image2.onload = resolve
        image2.src =
          'https://m.xiwang.com/resource/EIL22DIGkUfrtAuLIFBzt-1727272280337.png'
      })
      context.drawImage(image2, 46, 252, 276, 118);
      
      const image3 = canvas.createImage()
      await new Promise(resolve => {
        image3.onload = resolve
        image3.src =
          'https://m.xiwang.com/resource/2dNnt6VTngTnOeUQC7qZa-1727321743725.png'
      })
      context.drawImage(image3, 46, 602, 40, 40);

      const image4 = canvas.createImage()
      await new Promise(resolve => {
        image4.onload = resolve
        image4.src =
          'https://m.xiwang.com/resource/yzA7yn5ZV1vRaJZUcPbYX-1727321743724.png'
      })
      context.drawImage(image4, 46, 752, 40, 40);

      await _this.handleDrawText(context, canvas)
      await _this.handleDrawHeaderImg(context, canvas)


  
      let imageUrl = canvas.toDataURL();
  
      const fs: any = wx.getFileSystemManager();
      let filePath = `${wx.env.USER_DATA_PATH}/signature.png`;
      // 使用文件管理器 先将图片保存在上传
      fs.writeFile({
        filePath,
        data: imageUrl.replace(/^data:image\/\w+;base64,/, ""),
        encoding: "base64",
        success(res: any) {
          fs.close()
          wx.hideLoading()
          wx.showShareImageMenu({
            path: filePath,
            success(res) {
              console.log("res: ", res);
            },
            fail(res) {
              console.error(res);
            },
          });
        },
        fail(res: any) {
          console.error(res);
        },
      });
    },
    
    async handleDrawBackground(context: any, canvas: any) {
      const image = canvas.createImage()
      await new Promise(resolve => {
        image.onload = resolve
        image.src =
          'https://m.xiwang.com/resource/aVB7upCZ1NRc04N8Kvy5R-1725433710075.png'
      })
      context.drawImage(image, 0, 0, 654, 1000);
    },
    async handleDrawHeaderImg(context: any, canvas: any) {
      const image = canvas.createImage()
      await new Promise(resolve => {
        image.onload = resolve
        image.src = 'https://m.xiwang.com/resource/2PyeR4jcp3E6PgQNHlE3i-1721806959358.jpg'
      })
      // const radius = Math.min(72, 72);
      // 绘制圆形路径
      context.beginPath();
      context.arc(82, 84, 36, 0, Math.PI * 2);
      context.closePath();
      // 剪切成圆形
      context.clip()
      context.drawImage(image, 46, 48, 72, 72);
    },
    async handleDrawText(ctx: any, canvas: any) {
      ctx.textAlign="left"

      const text3 = '非常棒！'
      ctx.font = "normal 48px DingTalkJinBuTi";
      ctx.fillStyle = "#fff";
      ctx.fillText(text3, 46, 280); 

      ctx.textAlign="left"

      const textA = 'List1已学完'
      ctx.font = "normal 48px DingTalkJinBuTi";
      ctx.fillStyle = "#fff";
      ctx.fillText(textA, 46, 350); 

      ctx.textAlign="left"

      const text4 = '本次共计背词数'
      ctx.font = "24px PingFangSC";
      ctx.fillStyle = "#AEBABC"
      ctx.fillText(text4, 94, 631); 

      const text6 = '450'
      ctx.font = "bold 64px DINExp";
      ctx.fillStyle = "#fff";
      ctx.fillText(text6, 46, 705); 

      ctx.textAlign="left"

      const text7 = '本次背词时长'
      ctx.font = "24px PingFangSC";
      ctx.fillStyle = "#AEBABC"
      ctx.fillText(text7, 94, 781); 

      const text8 = `45’57”`
      ctx.font = "bold 64px DINExp";
      ctx.fillStyle = "#fff";
      ctx.fillText(text8, 46, 855); 


      ctx.textAlign = 'left'
      const text13 = '扫码进入'
      ctx.font = "24px PingFangSC";
      ctx.fillStyle = "#D0D8D9";
      ctx.fillText(text13, 504, 850); 
    },
  }
})