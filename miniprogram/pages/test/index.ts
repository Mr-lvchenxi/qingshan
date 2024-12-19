// pages/test/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleClickBtn(val: any) {
    console.log("type", val);
    if (val.currentTarget.dataset.type === 'up') {
      wx.showToast({
        title: '已经是第一个了',
        icon: 'none'
      })
    } else {
      wx.navigateTo({
        url: '/pages/testResult/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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