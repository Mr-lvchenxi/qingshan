import { getBookList, startCaptureTask, captureDataInProcess } from '../../api/index'

interface studyItemProps {
  id: number;
  listName: string;
  currentProcess: number;
  allProcess: number;
  num: number;
  isSelected?: boolean;
}

const studyList: studyItemProps[] = [
  {
    id: 1,
    listName: 'List1',
    currentProcess: 12,
    allProcess: 30,
    num: 2,
  },
  {
    id: 2,
    listName: 'List2',
    currentProcess: 12,
    allProcess: 30,
    num: 2,
  },
  {
    id: 3,
    listName: 'List3',
    currentProcess: 12,
    allProcess: 30,
    num: 2,
  },
  {
    id: 4,
    listName: 'List4',
    currentProcess: 12,
    allProcess: 30,
    num: 2,
  },
  {
    id: 5,
    listName: 'List5',
    currentProcess: 12,
    allProcess: 30,
    num: 2,
  },
  {
    id: 6,
    listName: 'List6',
    currentProcess: 12,
    allProcess: 30,
    num: 2,
  },
  {
    id: 7,
    listName: 'List7',
    currentProcess: 12,
    allProcess: 30,
    num: 2,
  },
  {
    id: 8,
    listName: 'List8',
    currentProcess: 12,
    allProcess: 30,
    num: 2,
  },
  {
    id: 9,
    listName: 'List9',
    currentProcess: 12,
    allProcess: 30,
    num: 2,
  },

]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    hasSelected: false, // 是否已经选择了书籍
    isClickAllSelect: false, // 是否点击多选按钮
    studyList: studyList
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

  async init() {
    const result = await getBookList()
    console.log('getBookList---------------------->', result)
  },

  async tapname() {
    // 学习：learn 复习：review 测试：test 刷词：drill，list_id: number[]
    const result = await startCaptureTask({type: 'review', list_id: 1})
    console.log('startCaptureTask------》', result)
  },

  async tapname2() {
    // 学习：learn 复习：review 测试：test 刷词：drill，list_id: number[]
    const result = await captureDataInProcess({type: 'review', id: 17, op: 1})
    console.log('captureDataInProcess------》', result)
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
    const id = e.currentTarget.dataset.item.id
    // // 将当前点击的书籍的isSelected取反
    // item.isSelected = !item.isSelected
    // // 获取当前点击的书籍的id
    // const id = item.id
    // 获取当前的书籍列表
    const studyList = this.data.studyList
    // 遍历当前的书籍列表
    studyList.forEach((book: any) => {
      // 如果当前的书籍id等于当前点击的书籍id
      if (book.id === id) {
        // 将当前的书籍的isSelected取反
        book.isSelected = !book.isSelected
      }
    })
    const hasSelected = studyList.some(studyList => studyList.isSelected);
    // 将当前的书籍列表设置到data中
    this.setData({
      studyList,
      hasSelected
    })
  },
  confirmSelection() {
    if (!this.data.hasSelected) return;

    wx.navigateTo({
      url: '/pages/brush/index',
    })

    // 执行确认逻辑，例如保存选择到服务器或本地存储
    wx.showToast({
      title: '已确认',
      icon: 'success'
    });
  },
  handleClickAllSelect() {
    this.setData({
      isClickAllSelect: true
    })
  },
  handleClickNoAllSelect() {
    // 将所有的书籍的isSelected设置为false
    const studyList = this.data.studyList
    studyList.forEach((study: any) => {
      study.isSelected = false
    })
    this.setData({
      hasSelected: false,
      studyList,
      isClickAllSelect: false
    })
  },
  handleCloseAction() {
    this.setData({
      show: false
    })
  },
  handleGoStudy() {
    wx.navigateTo({
      url: '/pages/study/index',
    })
  },
  handleGoReview() {
    wx.navigateTo({
      url: '/pages/review/index',
    })
  },
  handleGoTest() {
    wx.navigateTo({
      url: '/pages/test/index'
    })
  },
  handleClickItem(e: any) {
    // 如果点击了多选按钮，不执行点击事件
    if (this.data.isClickAllSelect) return
    this.setData({
      show: true
    })
    // const id = e.currentTarget.dataset.item.id
    // wx.navigateTo({
    //   url: `/pages/wordStudy/index?id=${id}`,
    // })
  }
})