// pages/selectBook/index.ts
import { getTags, getBooks } from '../../api/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    hasSelected: false, // 是否已经选择了书籍
    tagsList: ['雅思1', '雅思2', '雅思3', '雅思4', '雅思5', '雅思6'],
    bookList: [
      {
        id: 1,
        coverimage: 'https://img3.doubanio.com/view/subject/l/public/s3365739.jpg',
        title: '活着圣诞快乐方式地方脚手架副科级书法家上的副驾驶飞机',
        description: '活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华',
        allBookNum: 100,
        currentBookNum: 50,
        isSelected: false
      },
      {
        id: 2,
        coverimage: 'https://img3.doubanio.com/view/subject/l/public/s3365739.jpg',
        title: '活着',
        description: '活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华',
        allBookNum: 100,
        currentBookNum: 50,
        isSelected: false
      },
      {
        id: 3,
        coverimage: 'https://img3.doubanio.com/view/subject/l/public/s3365739.jpg',
        title: '活着',
        description: '活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华',
        allBookNum: 100,
        currentBookNum: 50,
        isSelected: false
      },
      {
        id: 4,
        coverimage: 'https://img3.doubanio.com/view/subject/l/public/s3365739.jpg',
        title: '活着',
        description: '活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华',
        allBookNum: 100,
        currentBookNum: 50,
        isSelected: false
      },
      {
        id: 5,
        coverimage: 'https://img3.doubanio.com/view/subject/l/public/s3365739.jpg',
        title: '活着',
        description: '活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华',
        allBookNum: 100,
        currentBookNum: 50,
        isSelected: false
      },
      {
        id: 6,
        coverimage: 'https://img3.doubanio.com/view/subject/l/public/s3365739.jpg',
        title: '活着',
        description: '活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华',
        allBookNum: 100,
        currentBookNum: 50,
        isSelected: false
      },
      {
        id: 7,
        coverimage: 'https://img3.doubanio.com/view/subject/l/public/s3365739.jpg',
        title: '活着',
        description: '活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华',
        allBookNum: 100,
        currentBookNum: 50,
        isSelected: false
      },
      {
        id: 8,
        coverimage: 'https://img3.doubanio.com/view/subject/l/public/s3365739.jpg',
        title: '活着',
        description: '活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华',
        allBookNum: 100,
        currentBookNum: 50,
        isSelected: false
      },
      {
        id: 9,
        coverimage: 'https://img3.doubanio.com/view/subject/l/public/s3365739.jpg',
        title: '活着',
        description: '活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华，活着作者余华',
        allBookNum: 100,
        currentBookNum: 50,
        isSelected: false
      }
    ]
  },

  async init(title?: string) {
    // const tagResult = await getTags()
    // console.log('getTags----------', tagResult)
    // const bookList = await getBooks({tag: title || tagResult.data[0]})

    // console.log('xxxxx---------------->', bookList)
    // this.setData({
    //   tagsList: tagResult.data,
    //   bookList: bookList.data
    // })
  },

  async onChangeTabs(event: any) {
    console.log('event---------->', event)
    this.init(event.detail.title)
    wx.showToast({
      title: `切换到标签 ${event.detail.title}`,
      icon: 'none',
    });
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
    this.init()
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
  toggleSelect(e: any) {
    console.log(e.currentTarget.dataset.item)
    const id = e.currentTarget.dataset.item.id
    // // 将当前点击的书籍的isSelected取反
    // item.isSelected = !item.isSelected
    // // 获取当前点击的书籍的id
    // const id = item.id
    // 获取当前的书籍列表
    const bookList = this.data.bookList
    // 遍历当前的书籍列表
    bookList.forEach((book: any) => {
      // 如果当前的书籍id等于当前点击的书籍id
      if (book.id === id) {
        // 将当前的书籍的isSelected取反
        book.isSelected = !book.isSelected
      } else {
        // 如果当前的书籍id不等于当前点击的书籍id
        // 将其他的书籍的isSelected设置为false
        book.isSelected = false
      }
    })
    const hasSelected = bookList.some(bookList => bookList.isSelected);
    // 将当前的书籍列表设置到data中
    this.setData({
      bookList,
      hasSelected
    })
  },
  confirmSelection() {
    if (!this.data.hasSelected) return;

    // 执行确认逻辑，例如保存选择到服务器或本地存储
    wx.showToast({
      title: '已确认',
      icon: 'success'
    });
    wx.reLaunch({
      url: '/pages/studyPage/index',
    })
  }
})