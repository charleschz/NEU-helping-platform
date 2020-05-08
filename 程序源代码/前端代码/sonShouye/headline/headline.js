// pages/sonShouye/headline/headline.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headlineData: [
      {
        id: 1,
        title: "计算机学院开展“职涯领航大讲堂”系列活动",
        author: "计算机科学与工程学院",
        time: "2020-04-30",
        text: "4月20日至28日，为进一步增强2021届“准”毕业生对未来就业的认知，做好下一步就业准备，计算机学院开展“点亮青春蓝图，助梦扬帆起航” 职涯领航大讲堂系列活动。本次活动基于腾讯课堂平台开展，面向2021届“准”毕业生开展专题就业指导，共计972人次积极参与活动。",
        url: "../images/1.jpg"
      },
      {
        id: 2,
        title: "东北大学在2020年国际大学生数学建模竞赛中再获佳绩",
        author: "东北大学",
        time: "2020-04-28",
        text: "近日，2020年国际大学生数学建模竞赛（MCM/ICM）成绩揭晓。我校学生在本次竞赛中获得国际特等奖提名奖（Finalist）3项，国际一等奖（Meritorious Winner）13项，国际二等奖（Honorable Mention）20项，再创佳绩。",
        url: "../images/2.jpg"
      },
      {
        id: 3,
        title: "东北大学举行“相约白山黑水，共庆97华诞”云校庆活动",
        author: "东北大学",
        time: "2020-04-27",
        text: "相约白山黑水，共庆97华诞。4月26日，东北大学迎来97岁生日，广大海内外校友、全校教职员工和同学们通过网络直播的形式在云端相聚，共庆东北大学建校97周年华诞！受疫情影响，今年校庆活动采用“云校庆”的方式，包括校园巡礼、领导致词、校友祝福等内容。遍布全球的东大人如约线上，共同“云赏东大”，祝福母校生日快乐。 ",
        url: "../images/3.jpg"
      },
      {
        id: 4,
        title: "东北大学2020届毕业生专业/行业系列专场网络双选会举行",
        author: "学生指导服务中心",
        time: "2020-04-27",
        text: "网络双选会分为冶金&材料、软件、艺术、文科类、理学、信息、建筑&矿业、计算机、机械&机器人、外语、管理、生医等多个专场，采取线上双选、QQ群、微信校友群、信息汇总发布等多种方式，共吸引了全国各地1700余家优质用人单位参会，提供各类工作岗位近15万个，我校4100余名学生报名参会，共投递简历8400余份。",
        url: "../images/4.jpg"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.setNavigationBarTitle({
      title: '校园头条'
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标
    setTimeout(function () {
      wx.stopPullDownRefresh(); //停止加载
      wx.hideNavigationBarLoading(); //隐藏加载icon
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})