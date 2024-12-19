Component({
  data: {
    tabBarShow: true,
    selected: 0,
    tabBar: {
      textColor: "#516C6F",
      selectedColor: "#163B3F",
      items: [
        {
          pagePath: "/pages/studyPage/index",
          name: "学习",
          icon: "/images/tabbar/tabbar_study.png",
          activeIcon: "/images/tabbar/tabbar_study_select.png",
        },
        {
          pagePath: "/pages/dataPage/index",
          name: "数据",
          icon: "/images/tabbar/tabbar_date.png",
          activeIcon: "/images/tabbar/tabbar_date_select.png",
        },
        {
          pagePath: "/pages/minePage/index",
          name: "我的",
          icon: "/images/tabbar/tabbar_mine.png",
          activeIcon: "/images/tabbar/tabbar_mine_select.png",
        },
      ]
    }
  },
  methods: {
    switchTab(e: any) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
      // this.setData({ selected: data.index });
    }
  }
});
