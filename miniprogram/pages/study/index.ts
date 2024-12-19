// pages/test/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // startX: 0,
    // currentStage: 0,
    // sliderLeft: 0,
    // containerWidth: 0,
    // stageWidth: 34, // 每个阶段宽度（包括margin）
    colors: [
      '#49EF43', '#6FE639', '#A7E831', '#EAEF4C', '#FEE052',
      '#FFD054', '#FFB864', '#FFAD64', '#FF8B49', '#FF634C'
    ],
    stages: [
      '#E2FEE2','#EAFCDE','#EFFADA','#F5F8D8','#FCF6D3', '#FFF2D3', '#FFEFD6', '#FFEBD9', '#FFE7DC', '#FFE4DF'
    ],
    currentList: [
      '#E2FEE2','#EAFCDE','#EFFADA','#F5F8D8','#FCF6D3', '#FFF2D3', '#FFEFD6', '#FFEBD9', '#FFE7DC', '#FFE4DF',
    ],
    currentStep: 70,
  },
  init(val?: any) {
    let currentStep = (val || val === 0) ? val : this.data.currentStep
    let currentStage = Math.floor(currentStep / 10);
    if (currentStage === 0) {
      this.setData({
        currentList: this.data.stages
      });
      return;
    }
    if (currentStage === 10) {
      this.setData({
        currentList: this.data.colors
      });
      return;
    }
    if (currentStage > 0 && currentStage < 10) {
      let list = new Array(10).fill('').map((item, index) => {
        return index < currentStage ? this.data.colors[index] : this.data.stages[index];
      });
      this.setData({
        currentList: list
      });
      return;
    }
  },

  onChangeStep(event: any) {
    console.log(event);
    wx.showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
    this.init(event.detail);
    // 将event.detail的值分成10份，每份的值为1，
    // 例如：event.detail为50，则currentStage为5,
    // 生成一个新的长度为10的数组list,当currentStage为几的时候，就将this.data.colors中的前几个color放到list中,剩余的位置将this.data.stages中对应的color放到list中，当currentStage为0时，将this.data.stages中对应的color放到list中
    // 最后将list赋值给this.data.colors
    // let currentStage = Math.floor(event.detail / 10);
    // if (currentStage === 0) {
    //   this.setData({
    //     currentList: this.data.stages
    //   });
    //   return;
    // }
    // if (currentStage === 10) {
    //   this.setData({
    //     currentList: this.data.colors
    //   });
    //   return;
    // }
    // if (currentStage > 0 && currentStage < 10) {
    //   let list = new Array(10).fill('').map((item, index) => {
    //     return index < currentStage ? this.data.colors[index] : this.data.stages[index];
    //   });
    //   this.setData({
    //     currentList: list
    //   });
    //   return;
    // }

  },

  onDragStep(event: any) {
    console.log(event);
    wx.showToast({
      icon: 'none',
      title: `当前值：${event.detail.value}`,
    });
    this.init(event.detail.value);
    // 将event.detail的值分成10份，每份的值为1，
    // 例如：event.detail为50，则currentStage为5,
    // 生成一个新的长度为10的数组list,当currentStage为几的时候，就将this.data.colors中的前几个color放到list中,剩余的位置将this.data.stages中对应的color放到list中
    // 最后将list赋值给this.data.colors
    // let currentStage = Math.floor(event.detail.value / 10);
    // if (currentStage === 0) {
    //   this.setData({
    //     currentList: this.data.stages
    //   });
    //   return;
    // }
    // if (currentStage === 10) {
    //   this.setData({
    //     currentList: this.data.colors
    //   });
    //   return;
    // }
    // if (currentStage > 0 && currentStage < 10) {
    //   let list = new Array(10).fill('').map((item, index) => {
    //     return index < currentStage ? this.data.colors[index] : this.data.stages[index];
    //   });
    //   this.setData({
    //     currentList: list
    //   });
    //   return;
    // }
    // this.init(event.detail.value);
  },

  
  // updateStages(currentStage: any) {
  //   let updatedStages = this.data.stages.map((stage, index) => {
  //     return { color: index <= currentStage ? this.data.colors[index] : '#F5F5F5' };
  //   });

  //   this.setData({
  //     currentStage,
  //     stages: updatedStages,
  //     sliderLeft: currentStage * this.data.stageWidth
  //   });
  // },

  // onTouchStart(e: any) {
  //   console.log('onTouchStart--------------------->', e.touches[0].pageX);
  //   this.setData({
  //     startX: e.touches[0].pageX
  //   })
  //   // this.startX = e.touches[0].pageX;
  // },

  // onTouchMove(e: any) {
  //   const moveX = e.touches[0].pageX - this.data.startX;
  //   let newLeft = this.data.sliderLeft + moveX;

  //   if (newLeft < 0) newLeft = 0;
  //   if (newLeft > this.data.containerWidth - this.data.stageWidth) newLeft = this.data.containerWidth - this.data.stageWidth;

  //   const newStage = Math.round(newLeft / this.data.stageWidth);

  //   this.updateStages(newStage);
  //   this.setData({
  //     startX: e.touches[0].pageX
  //   });
  //   // this.startX = e.touches[0].pageX; // 更新起始位置
  // },

  // onTouchEnd(e: any) {
  //   // 可以在这里处理触摸结束后的逻辑
  // },

  handleClickBtn(val: any) {
    console.log("type", val);
    if (val.currentTarget.dataset.type === 'up') {
      wx.showToast({
        title: '已经是第一个了',
        icon: 'none'
      })
    } else {
      wx.navigateTo({
        url: '/pages/studyCenter/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // const query = this.createSelectorQuery();
    // query.select('.slider-container').boundingClientRect((rect) => {
    //   this.setData({
    //     containerWidth: rect.width
    //   });
    //   this.updateStages(this.data.currentStage);
    // }).exec();
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

  }
})