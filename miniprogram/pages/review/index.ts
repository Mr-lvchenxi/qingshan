// pages/review/index.ts
interface Word {
  title: string;
  smallDesc: string;
  bigDesc: string;
  isOpen?: boolean;
}

let wordList: Word[] = [
  {
    title: "Content",
    smallDesc: `英/'kɑntɛnt/`,
    bigDesc: "adj.满足的；n.内容；adj.满足的；n.内容；adj.满足的；n.内容；",
  },
  {
    title: "Man",
    smallDesc: `英/'kɑntɛnt/`,
    bigDesc:
      "adj.满足的；n.内容；adj.满足的；n.内容；adj.满足的；n.内容；adj.满足的；n.内容；adj.满足的；n.内容；adj.满足的；n.内容；",
  },
  {
    title: "Woman",
    smallDesc: `英/'kɑntɛnt/`,
    bigDesc:
      "adj.满足的；n.内容；adj.满足的；n.内容；adj.满足的；n.内容；adj.满足的；n.内容；adj.满足的；n.内容；adj.满足的；n.内容；",
  },
];

Page({
  data: {
    currentIsOpen: false,
    wordList,
  },

  init() {
    let that = this;
    let wordList = that.data.wordList;
    wordList.forEach((item, index) => {
      item.isOpen = false;
    });
    that.setData({
      wordList,
    });
  },

  handleChangeDesc() {
    //如果currentIsOpen为false，则将所有的isOpen设置为true，否则设置为false
    let that = this;
    let wordList = that.data.wordList;
    wordList.forEach((item, index) => {
      item.isOpen = !that.data.currentIsOpen;
    });
    that.setData({
      wordList,
      currentIsOpen: !that.data.currentIsOpen,
    });
  },

  handleClickBtn(val: any) {
    console.log("type", val);
    if (val.currentTarget.dataset.type === 'up') {
      wx.showToast({
        title: '已经是第一组了',
        icon: 'none'
      })
    } else {
      wx.navigateTo({
        url: '/pages/reviewResult/index',
      })
    }
  },

  handleChangeBg(val: any) {
    console.log(11111);
    console.log("item", val);
    let that = this;
    let wordList = that.data.wordList;
    // 将item.title的isOpen取反，赋值给wordList中对应的item
    wordList.forEach((currentItem, index) => {
      if (val.currentTarget.dataset.item.title === currentItem.title) {
        currentItem.isOpen = !val.currentTarget.dataset.item.isOpen;
      }
    });
    // 如果wordList中有一个item的isOpen为true，那么currentIsOpen为true，否则为false
    let currentIsOpen = wordList.some((item) => item.isOpen);
    that.setData({
      wordList,
      currentIsOpen,
    });
    // that.setData({
    //   wordList,
    // });
    
    // that.setData({
    //   currentIsOpen: !that.data.currentIsOpen,
    // });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.init();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
