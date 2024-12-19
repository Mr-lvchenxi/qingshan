Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: 0,
    // 生成一个头像地址
    headImg: `https://m.xiwang.com/resource/__private__/4c49adcdd99a6bd53fa15bac814cfa6b/aaa.png`,
    userName: '小明',
    sex: 1, // 1: 男 2: 女
    day: 2014,
    wordNum: 1000,
    todayWordNum: 100,
    // headImg: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 胶囊信息
    const menu = wx.getMenuButtonBoundingClientRect();
    this.setData({
      navBarHeight: menu.top
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2,
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  handleGoNewWordBook() {
    wx.navigateTo({
      url: '/pages/newWordBook/index',
    })
  }
})