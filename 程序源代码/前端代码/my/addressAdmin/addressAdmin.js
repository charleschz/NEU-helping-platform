var tcity = require("../../area/citys.js");

var app = getApp()
Page({
  data: {
    provinces: [],
    province: "",
    citys: [],
    city: "",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false
  },
  bindViewTapindex: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
onPullDownRefresh(){
  wx.setNavigationBarTitle({
    title: '地址管理'
  });
  wx.showNavigationBarLoading(); //在标题栏中显示加载图标
  setTimeout(function () {
    wx.stopPullDownRefresh(); //停止加载
    wx.hideNavigationBarLoading(); //隐藏加载icon
  }, 2000)
},
  bindChange: function (e) {
    //console.log(e);
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;

    if (val[0] != t[0]) {
      console.log('province no ');
      const citys = [];
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }

      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys: citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })

      return;
    }
    if (val[1] != t[1]) {
      console.log('city no');
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }

      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }


  },
  open: function () {
    this.setData({
      condition: !this.data.condition
    })
  },
  onLoad: function () {
    console.log("onLoad");
    var that = this;

    tcity.init(that);

    var cityData = that.data.cityData;


    const provinces = [];
    const citys = [];
    const countys = [];

    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    console.log('省份完成');
    for (let i = 0; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    console.log('city完成');
    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }

    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      'province': cityData[0].name,
      'city': cityData[0].sub[0].name,
      'county': cityData[0].sub[0].sub[0].name
    })
    console.log('初始化完成');
  },
  changeProvince:function(e) { 
    var that = this;
    var province = this.data.province;
    var provinceIndex = e.detail.value;
    var provinces = this.data.provinces;
    console.log(provinces[provinceIndex])
    that.setData({
      show: false,
      province: provinces[provinceIndex]
    })
  },
  changeCity: function(e) {
    var that = this;
    var city = this.data.city;
    var cityIndex = e.detail.value;
    var citys = this.data.citys;
    console.log(citys[cityIndex])
    that.setData({
      show: false,
      city: citys[cityIndex]
    })
  },
  changeDistrict: function(e) {
    var that = this;
    var county = this.data.county;
    var countyIndex = e.detail.value;
    var countys = this.data.countys;
    console.log(countys[countyIndex])
    that.setData({
      show: false,
      county: countys[countyIndex]
    })
  },
  showsuccess: function() {
    wx.showToast({
      title: '修改成功',
      icon: 'success',
      duration: 2000
    })
  }
})
