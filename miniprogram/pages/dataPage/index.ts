// pages/dataPage/index.ts
interface DayItem {
  day: number;
  status: string;
  isCurrentDay?: boolean;
}

const daysArray: Array<DayItem> = [];

Page({
  /**
   * 页面的初始数据
   */

  data: {
    navBarHeight: 0,
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    weekDays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    daysArray,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.generateCalendar();
    // 胶囊信息
    const menu = wx.getMenuButtonBoundingClientRect();
    this.setData({
      navBarHeight: menu.top,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
      });
    }
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

  generateCalendar() {
    const { year, month } = this.data;
    const firstDayOfWeek = new Date(year, month - 1, 1).getDay(); // 获取当月第一天是星期几
    const lastDateOfLastMonth = new Date(year, month - 1, 0).getDate(); // 上个月最后一天日期
    const lastDateOfCurrentMonth = new Date(year, month, 0).getDate(); // 当月最后一天日期

    let daysArray = [];

    // 添加上个月末尾几天
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      daysArray.push({
        day: lastDateOfLastMonth - i,
        status: "invalid",
        isCurrentDay: false,
      });
    }

    // 添加当前月份的天数
    // 初始化当前日期的学习状态
    // 分为5个状态，无效日期，当天未学习，背词100以下，背词100以上，未到时间
    // 1. 无效日期英文状态：invalid
    // 2. 当天未学习英文状态：unstudied
    // 3. 背词100以下英文状态：lessThan100
    // 4. 背词100以上英文状态：moreThan100
    // 5. 未到时间英文状态：notTime
    // mock一个数组, 1-31号，取2-5状态, 当天日期以后的日期取5状态, 当天日期取3状态, 之前的日期取2-4状态
    // 增加一个isCurrentDay字段，标识是否是当天日期
    for (let i = 1; i <= lastDateOfCurrentMonth; i++) {
      if (i > new Date().getDate()) {
        daysArray.push({ day: i, status: "notTime", isCurrentDay: false });
        continue;
      }
      if (i === new Date().getDate()) {
        daysArray.push({ day: i, status: "lessThan100", isCurrentDay: true });
        continue;
      }
      if (i >= 1 && i < new Date().getDate()) {
        // 随机生成unstudied，lessThan100，moreThan100三种状态
        let arr = ["unstudied", "lessThan100", "moreThan100"];

        const status = Math.floor(Math.random() * 3) + 2;
        daysArray.push({
          day: i,
          status: arr[status - 2],
          isCurrentDay: false,
        });
        continue;
      }
    }

    console.log("daysArray:-------------xx---------->", daysArray);

    const nextMonthDays = 7 - (daysArray.length % 7);
    if (nextMonthDays === 7) {
      return this.setData({ daysArray });
    }
    for (let i = 1; i <= nextMonthDays; i++) {
      daysArray.push({ day: i, status: "invalid", isCurrentDay: false });
    }

    this.setData({ daysArray });
  },

  prevMonth() {
    let { year, month } = this.data;
    if (month === 1) {
      year--;
      month = 12;
    } else {
      month--;
    }
    this.setData({ year, month }, () => this.generateCalendar());
  },
  nextMonth() {
    let { year, month } = this.data;
    if (month === 12) {
      year++;
      month = 1;
    } else {
      month++;
    }
    this.setData({ year, month }, () => this.generateCalendar());
  },

  selectDay(event: any) {
    const date = event.currentTarget.dataset.date;
    console.log("Selected date:", date);
  },

  async handleShareDateOne() {
    console.log('开始绘制--------------------')
    // 创建一个canvas实例，拿到context
    let canvas: any = wx.createOffscreenCanvas({
      type: "2d",
      width: 654,
      height: 904,
    });
    // const canvas = document.createElement('canvas');
    let context = canvas.getContext("2d");

    context.font = "40px DingTalkJinBuTi";


    // 创建图片，加载图片
    let backImg = canvas.createImage();
    let qrCodeImg = canvas.createImage();
    // await new Promise((resolve) => {
    //   backImg.onload = resolve;
    //   backImg.src =
    //     "https://m.xiwang.com/resource/HAbejYmV62n7tzG97Wym5-1725291588618.png";
    // });
    // await new Promise((resolve) => {
    //   qrCodeImg.onload = resolve;
    //   qrCodeImg.src =
    //     "https://m.xiwang.com/resource/__private__/4c49adcdd99a6bd53fa15bac814cfa6b/aaa.png";
    // });

    // context.drawImage(backImg, 0, 0, 654, 904);
    // context.drawImage(qrCodeImg, 494, 694, 100, 100);

    context.fillStyle = "red";
    context.fillText("学习日历222", 10, 50);



    // canvas一个背景色区域,并且需要这个区域左上角和右上角有40rpx的圆角
    // context.beginPath();
    // context.moveTo(0, 0);
    // context.lineTo(654, 0);
    // context.lineTo(654, 102);
    // context.arcTo(654, 102, 654, 0, 48);
    // context.lineTo(654, 0);
    // context.arcTo(654, 0, 0, 0, 48);
    // context.lineTo(0, 0);
    // context.fillStyle = "#9CF7AE";
    // context.fillRect(0, 0, 654, 102);

    // canvas添加一行文字，需要自定义字体
  

    // const { userInfo } = App.globalData
    // const { studyData, progress } = this.properties
    // const userName = userInfo.real_name || userInfo.nick_name
    // context.font = '48px DIN-Bold'
    // context.fillStyle = '#00CF8A'
    // context.fillText(100, 96, 552)
    // context.fillText(200, 96, 678)
    // context.fillText(300.value, 96, 804)
    // context.font = '64px DIN-Bold'
    // context.fillStyle = '#00CF8A'
    // const percentMetrics = Math.abs(context.measureText(progress + '%').width)
    // context.fillText(progress + '%', 590 - percentMetrics / 2, 630)
    // context.font = 'bold 32px PingFang SC'
    // context.fillStyle = '#FAFDFE'
    // context.fillText('userName', 144, 100)

    // canvas添加一行文字
    // context.font = "40px DingTalkJinBuTi";
    // context.fillStyle = "#163B3F";
    // context.fillText("学习日历", 10, 50);

    let imageUrl = canvas.toDataURL();

    const fs = wx.getFileSystemManager();
    let filePath = `${wx.env.USER_DATA_PATH}/signature.png`;
    // 使用文件管理器 先将图片保存在上传
    fs.writeFile({
      filePath,
      data: imageUrl.replace(/^data:image\/\w+;base64,/, ""),
      encoding: "base64",
      success(res) {
        // console.log("res------------: ", filePath);
        wx.showShareImageMenu({
          path: filePath,
          success(res) {
            console.log("res: ", res);
          },
          fail(res) {
            console.error(res);
          },
        });
        // _this.setData({uploadLoading: false})
        // // 成功后在执行上传文件操作
        // _this.uploadFile(src);
      },
      fail(res) {
        console.error(res);
      },
    });
  },
});
