// pages/testResult/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentType: 1, // 1: 认识 2: 不认识 3: 错误
    wordList: [{
      word: 'Content',
      wordDesc: `英/'kɑntɛnt/`,
      bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
      isStar: false,
    },{
      word: 'Content',
      wordDesc: `英/'kɑntɛnt/`,
      bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
      isStar: true,
    },{
      word: 'Content',
      wordDesc: `英/'kɑntɛnt/`,
      bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
      isStar: true,
    },{
      word: 'Content',
      wordDesc: `英/'kɑntɛnt/`,
      bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
      isStar: false,
    },{
      word: 'Content',
      wordDesc: `英/'kɑntɛnt/`,
      bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
      isStar: false,
    },{
      word: 'Content',
      wordDesc: `英/'kɑntɛnt/`,
      bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
      isStar: false,
    },]
  },

  handleGoBack() {
    wx.reLaunch({
      url: '/pages/studyPage/index',
    })
  },

  handleClickBtn(val: any) {
    let wordList = this.data.wordList
    if (Number(val.currentTarget.dataset.type) === 1) {
      wordList = [
        {
          word: 'Content',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: false,
        },{
          word: 'Content',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: true,
        },{
          word: 'Content',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: true,
        },{
          word: 'Content',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: false,
        },{
          word: 'Content',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: false,
        },{
          word: 'Content',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: false,
        },
      ]
    }
    if (Number(val.currentTarget.dataset.type) === 2) {
      wordList = [
        {
          word: 'incognizant',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: false,
        },
        {
          word: 'incognizant',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: true,
        },
      ]
    }
    if (Number(val.currentTarget.dataset.type) === 3) {
      wordList = [
        {
          word: 'know',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: false,
        },
        {
          word: 'know',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: true,
        },
        {
          word: 'know',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: false,
        },
        {
          word: 'know',
          wordDesc: `英/'kɑntɛnt/`,
          bigDesc: 'n. 反对票，反对者；反对的论点，反对的理由；反对的论点，反对的',
          isStar: true,
        },
      ]
    }
    this.setData({
      currentType: Number(val.currentTarget.dataset.type),
      wordList,
    })
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