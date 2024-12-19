import { loadFontFace } from './utils/base'

App<any>({
  globalData: {},
  onLaunch() {
    this.loadFonts();
  },
  async loadFonts() {
    // 在小程序启动时加载字体
    await loadFontFace('DINExp', 'https://m.xiwang.com/resource/__private__/4c49adcdd99a6bd53fa15bac814cfa6b/D-DINExp-Bold.ttf')
    await loadFontFace('DingTalkJinBuTi', 'https://m.xiwang.com/resource/__private__/4c49adcdd99a6bd53fa15bac814cfa6b/DingTalkJinBuTi.ttf')
    this.drawCanvasText()
  },
  drawCanvasText() {
    let canvas: any = wx.createOffscreenCanvas({
      type: "2d",
      width: 654,
      height: 904,
    });
    let context = canvas.getContext("2d");
    context.font = "40px DingTalkJinBuTi";
    context.fillStyle = "red";
    context.fillText("11", 10, 50);
    context.font = "40px DIn";
    context.fillStyle = "red";
    context.fillText("12", 10, 50);
  }
});
