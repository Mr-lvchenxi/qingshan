// pages/reviewResult/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: 0,
  },

  handleGoBack() {
    wx.navigateBack()
  },

  handleGoOne() {
    wx.reLaunch({
      url: '/pages/studyPage/index',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 胶囊信息
    const menu = wx.getMenuButtonBoundingClientRect();
    this.setData({
      navBarHeight: menu.top,
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

  }
})