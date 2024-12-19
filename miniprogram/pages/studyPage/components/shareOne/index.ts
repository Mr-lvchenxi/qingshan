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

      // const dpr = wx.getSystemInfoSync().pixelRatio;

      // console.log('哈哈哈哈哈---------》', dpr)

      // context.scale(dpr, dpr);

      await _this.handleDrawBackground(context, canvas)
      const image = canvas.createImage()
      await new Promise(resolve => {
        image.onload = resolve
        console.log(3333)
        image.src = 'https://m.xiwang.com/resource/2PyeR4jcp3E6PgQNHlE3i-1721806959358.jpg'
      })
      await _this.handleDrawProcess(context, canvas)
      await _this.handleDrawText(context, canvas)
      await _this.handleDrawHeaderImg(context, canvas)

      context.drawImage(image, 500, 720, 100, 100);
      // context.draw();
  
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
    async handleDrawProcess(ctx: any, canvas: any) {
      // bg色
      // 圆的参数
      const radius = 249; // 半径
      const color = 'rgba(22, 59, 63, 0.3)';
      // 计算圆心位置
      const centerX = canvas.width / 2;
      const centerY = 172 + radius;
      // 绘制圆形路径
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.closePath();
      // 填充颜色
      ctx.fillStyle = color;
      ctx.fill();

      // 绘制进度条，进度条是一个圆环，先绘制底色，再绘制进度
      const lineWidth = 35; // 圆环宽度
      const startAngle = Math.PI * 1.5; // 起点位置
      const endAngle = Math.PI * 3.5; // 终点位置
      const end = 0.5; // 进度
      // 绘制底色
      ctx.beginPath();
      ctx.arc(centerX, centerY, 215, startAngle, endAngle);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = '#DDFBDF';
      ctx.stroke();
      // 绘制进度
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.arc(centerX, centerY, 215, startAngle, end * Math.PI * 2 + startAngle);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = '#00B0A5';
      ctx.stroke();
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
      // context.clip()
      context.drawImage(image, 46, 48, 72, 72);
      // context.draw()
      // context.restore(); // 恢复到保存的状态，即取消剪裁区域
      // context.save(); // 再次保存状态
    },
    async handleDrawText(ctx: any, canvas: any) {
      ctx.textAlign="center"

      const text1 = 'Round'
      ctx.font = "24px DingTalkJinBuTi";
      ctx.fillStyle = "#fff";
      ctx.fillText(text1, canvas.width / 2, 300); 

      const text2 = '98'
      ctx.font = "bold 64px DINExp";
      ctx.fillStyle = "#fff";
      ctx.fillText(text2, canvas.width / 2, 396); 

      // 绘制一条直线
      ctx.beginPath();
      ctx.moveTo(192, 430);
      ctx.lineTo(462, 430);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#E7EBEB';
      ctx.stroke();

      const text3 = '2300/4000'
      ctx.font = "bold 48px DINExp";
      ctx.fillStyle = "#fff";
      ctx.fillText(text3, canvas.width / 2, 506); 

      const text4 = '单词进度'
      ctx.font = "24px DingTalkJinBuTi";
      ctx.fillStyle = "#fff";
      ctx.fillText(text4, canvas.width / 2, 556); 

      ctx.textAlign="left"

      const text7 = 'List当前进度'
      ctx.font = "24px PingFangSC";
      ctx.fillStyle = "#AEBABC";
      ctx.fillText(text7, 46, 745); 

      const text8 = '34/80'
      ctx.font = "bold 28px DINExp";
      ctx.fillStyle = "#fff";
      ctx.fillText(text8, 220, 747);

      const text11 = '总学习时间'
      ctx.font = "24px PingFangSC";
      ctx.fillStyle = "#AEBABC";
      ctx.fillText(text11, 46, 820); 

      const text12 = "45’57”"
      ctx.font = "bold 28px DINExp";
      ctx.fillStyle = "#fff";
      ctx.fillText(text12, 220, 822); 

      ctx.textAlign = 'left'
      const text13 = '扫码进入'
      ctx.font = "24px PingFangSC";
      ctx.fillStyle = "#D0D8D9";
      ctx.fillText(text13, 504, 850); 
    },
    
    // async handleDrawCode(context: any, canvas: any) {
    //   console.log('让我看看')
    //   context.textAlign = "left";

    //   // 左边日期
    //   context.font = "24px PingFangSC";
    //   context.fillStyle = "#8A9C9F";
    //   context.fillText("扫码进入", 496, 830);
    // }
  }
})