// index.js
const Promise = require('../../utils/promise');
const ajax = require('../../utils/ajax');
Page({
  data: {
    
  },
  onLoad(){
    // wx.playBackgroundAudio({
    //     dataUrl: 'http://sc1.111ttt.com/2016/1/06/25/199251943186.mp3',
    // })
    var _self = this;
    // 这里其实可以异步加载、纯粹是为了使用promise才这样写
    wx.showToast({
      title: '加载中',
      icon: 'loading',
    })
    ajax("https://api.douban.com/v2/movie/in_theaters")
    .then(data=>{
      console.log(data);
      data.data.subjects.splice(9,16)
      data.data.type=1;
      _self.setData({
        arr_in_theaters:data.data
      })
    })
    ajax("https://api.douban.com/v2/movie/coming_soon")
    .then(data=>{
      console.log(data)
      data.data.subjects.splice(9,16)
      data.data.type=1;
      _self.setData({
        arr_coming_soon:data.data
      })
    })
    ajax("https://api.douban.com/v2/movie/top250")
    .then(data=>{
      console.log(data)
      data.data.subjects.splice(9,16)
      data.data.type=1;
      _self.setData({
        arr_top250:data.data
      })
      wx.hideToast();
    })
  },
  onPullDownRefresh(){
    this.onLoad();
  }
})