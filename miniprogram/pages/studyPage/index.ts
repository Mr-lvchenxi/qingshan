import { getBookStatus } from '../../api/index'

// pages/studyPage/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: 0,
    config: {
      canvasSize: {
        width: 486,
        height: 486
      },
      percent: 100,
      barStyle: [{ width: 35, fillStyle: '#DDFBDF' }, { width: 35, animate: false, fillStyle: [{ position: 0, color: '#00B0A5' }, { position: 1, color: '#00B0A5' }] }],
      needDot: true,
      dotStyle: [{ r: 14, fillStyle: '#ffffff', shadow: 'rgba(0,0,0,.15)' }, { r: 8, fillStyle: '#00CE99' }]
    },
    percentage: 80,
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
        selected: 0,
      });
    }
    this.init()
  },

  
  formatSeconds(seconds: number) {
    // 计算小时、分钟和秒
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    // 格式化为两位数，如果小于10则在前面补0
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = secs < 10 ? '0' + secs : secs;
    // 拼接成需要的格式
    return `${formattedHours}’ ${formattedMinutes}” ${formattedSeconds}`;
  },

  async init() {
    // const result = await getBookStatus()
    // this.setData({
    //   studyMsg: {
    //     ...result.data,
    //     round: 19,
    //     learnedWordCount: 120,
    //     totalWordCount: 800,
    //     wordsCountToday: 32,
    //     consecutiveDays: 12,
    //     percentage: (result.data.learnedWordCount / result.data.totalWordCount * 100).toFixed(2),
    //     durationToday: result.data.durationToday === 0 ? 0 : (result.data.durationToday / 60).toFixed(2),
    //     duration: this.formatSeconds(Number(result.data.duration))
    //   }
    // })
    // 如果是整数，可以直接传入
    // 如果是小数，保留两位小数
    if(this.data.percentage % 1 === 0) {
      this.setData({
        percentage: this.data.percentage
      })
    }
    let x = 180;

    this.setData({
      studyMsg: {
        // ...result.data,
        round: 19,
        learnedWordCount: 120,
        totalWordCount: 800,
        wordsCountToday: 32,
        consecutiveDays: 12,
        percentage: (120 / 800 * 100).toFixed(2),
        durationToday: x % 1 === 0 ? (x / 60) : (x / 60).toFixed(2),
        duration: this.formatSeconds(Number(3316))
      }
    })
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
  navigateToSearchPage() {
    wx.navigateTo({
      url: '/pages/search/index',
    })
  },
  handleGoSelectBook() {
    wx.navigateTo({
      url: '/pages/selectBook/index',
    })
  },
  handleGoStudyList() {
    wx.navigateTo({
      url: '/pages/selectStudyList/index',
    })
  }
})

