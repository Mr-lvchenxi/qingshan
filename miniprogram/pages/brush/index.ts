// pages/brush/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    currentTime: 3,
    timeList: [{
      id: 1,
      time: '1s'
    },{
      id: 2,
      time: '2s'
    }, {
      id: 3,
      time: '3s'
    }]
  },

  handleChangeDesc() {
    this.setData({
      show: true
    })
  },

  handleCloseAction() {
    this.setData({
      show: false
    })
  },

  handleSelectTime(val: any) {
    wx.showToast({
      title: `已选择${val.currentTarget.dataset.id}s`,
      icon: 'none'
    })
    this.setData({
      currentTime: val.currentTarget.dataset.id,
      show: false
    })
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
        url: '/pages/brushResult/index',
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