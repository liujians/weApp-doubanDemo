// top250.js
const Promise = require('../../utils/promise');
const ajax = require('../../utils/ajax');
Page({
  data: {
    
  },
  onLoad(){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
    })
  	var _self = this;
    ajax("https://api.douban.com/v2/movie/top250")
    .then(data=>{
  		console.log(data)
      data.data.type=0;
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