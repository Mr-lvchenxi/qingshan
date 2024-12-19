// pages/newWordBook/index.ts
interface WordDescItem {
  key: string;
  desc: string;
}

interface WordItem {
  id: number;
  word: string;
  phonetic: string;
  wordDescList: Array<WordDescItem>;
  isShow?: boolean;
}

const newWordList: Array<WordItem> = []

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isAllShow: false, // 是否都展开
    newWordList, // 单词列表
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
    console.log("onShow");
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

  init() {
    // 获取单词列表
    let newWordList: WordItem[] = [];
    newWordList = [
      {
        id: 1,
        word: "content",
        phonetic: "英/'kɑntɛnt/",
        wordDescList: [
          {
            key: "adj.",
            desc: " 满意的；",
          },
          {
            key: "n.",
            desc: "内容；",
          },
        ],
      },
      {
        id: 2,
        word: "content",
        phonetic: "英/'kɑntɛnt/",
        wordDescList: [
          {
            key: "adj.",
            desc: " 满意的；",
          },
          {
            key: "n.",
            desc: "内容；",
          },
          {
            key: "adj.",
            desc: " 满意的；",
          },
          {
            key: "n.",
            desc: "内容；",
          },
        ],
      },
      {
        id: 3,
        word: "content",
        phonetic: "英/'kɑntɛnt/",
        wordDescList: [
          {
            key: "adj.",
            desc: " 满意的；",
          },
          {
            key: "n.",
            desc: "内容；",
          },
        ],
      },
      {
        id: 4,
        word: "content",
        phonetic: "英/'kɑntɛnt/",
        wordDescList: [
          {
            key: "adj.",
            desc: " 满意的；",
          },
          {
            key: "n.",
            desc: "内容；",
          },
        ],
      },
    ];

    // 将单词列表每一项追加一个状态字段
    newWordList = newWordList.map((item) => {
      item.isShow = false;
      return item;
    });

    console.log(12313123)

    console.log('哈哈哈-------》', newWordList)

    this.setData({
      newWordList,
    });
  },

  handleOpenExplain(e: any) {
    // 更改newWordList 中的isShow 状态
    const { id } = e.currentTarget.dataset.item;
    const newWordList = this.data.newWordList.map((item) => {
      if (item.id === id) {
        item.isShow = !item.isShow;
      }
      return item;
    });
    // 检查下newWordList的所有item的isShow状态是否都为true
    const isAllShow = newWordList.every((item) => item.isShow);
    this.setData({
      newWordList,
      isAllShow,
    });
    // console.log(e.currentTarget.dataset.item.isShow);
  },

  handleAllExplain() {
    const isAllShow = !this.data.isAllShow;
    const newWordList = this.data.newWordList.map((item) => {
      item.isShow = isAllShow;
      return item;
    });
    this.setData({
      newWordList,
      isAllShow,
    });
  }
});
