// bookDetails.js
const Promise = require('../../utils/promise');
const ajax = require('../../utils/ajax');
Page({
  data: {
    
  },
  onLoad(options) {
    console.log(options.id);
    var _self = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    ajax("https://api.douban.com/v2/book/"+options.id)
  	.then(data=>{
  		console.log(data);
	    wx.setNavigationBarTitle({
	      title: data.data.title
	    })
  		_self.setData({
  			msg:data.data
  		})
      wx.hideToast();
  	})
  }
})

