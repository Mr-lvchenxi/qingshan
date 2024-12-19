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
      console.log('开始绘制--------------------')
      // 创建一个canvas实例，拿到context
      let canvas: any = wx.createOffscreenCanvas({
        type: "2d",
        width: 654,
        height: 904,
      });
      let context = canvas.getContext("2d");

      await _this.handleDrawBackground(context, canvas)
      await _this.handleDrawText(context, canvas)
      await _this.handleDrawCode(context, canvas)
  
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
          'https://m.xiwang.com/resource/cqfO6TGIH4jLdBLKyW0SD-1725355723902.png'
      })
      context.drawImage(image, 0, 0, 654, 904);
    },
    async handleDrawText(context: any, canvas: any) {
      context.textAlign = "center";
      // 小日期
      context.font = "24px PingFangSC";
      context.fillStyle = "#8A9C9F";
      context.fillText("2024/02/08", 327, 164);

      // 大日期
      context.font = "130px DingTalkJinBuTi";
      context.fillStyle = "#163B3F";
      context.textAlign = "center";
      context.fillText("08", 317, 348);

      context.textAlign = "left";

      // 左边日期
      context.font = "bold 30px PingFangSC";
      context.fillStyle = "#163B3F";
      context.fillText("二月", 60, 298);

      context.font = "24px PingFangSC";
      context.fillStyle = "#8A9C9F";
      context.fillText("February", 60, 338);

      // 右边日期
      context.font = "bold 30px PingFangSC";
      context.fillStyle = "#163B3F";
      context.fillText("星期四", 494, 298);

      context.font = "24px PingFangSC";
      context.fillStyle = "#8A9C9F";
      context.fillText("Thursday", 494, 338);

      // 下边左边第一个
      context.font = "bold 64px DINExp";
      context.fillStyle = "#163B3F";
      context.fillText("6885", 60, 586);

      context.font = "24px PingFangSC";
      context.fillStyle = "#516C6F";
      context.fillText("新学生词", 60, 628);

      // 下边左边第二个
      context.font = "bold 64px DINExp";
      context.fillStyle = "#163B3F";
      context.fillText("450", 334, 586);

      context.font = "24px PingFangSC";
      context.fillStyle = "#516C6F";
      context.fillText("复习单词", 334, 628);

      // 下边左边第二个
      context.font = "bold 64px DINExp";
      context.fillStyle = "#163B3F";
      context.fillText("6885", 60, 762);

      context.font = "24px PingFangSC";
      context.fillStyle = "#516C6F";
      context.fillText("当日累计学习时间(分钟)", 60, 804);
    },
    async handleDrawCode(context: any, canvas: any) {
      const image = canvas.createImage()
      await new Promise(resolve => {
        image.onload = resolve
        image.src = 'https://m.xiwang.com/resource/2PyeR4jcp3E6PgQNHlE3i-1721806959358.jpg'
      })
      context.drawImage(image, 494, 696, 100, 100);

      context.textAlign = "left";

      // 左边日期
      context.font = "24px PingFangSC";
      context.fillStyle = "#8A9C9F";
      context.fillText("扫码进入", 496, 830);
    }
  }
})