// comingSoon.js
const Promise = require('../../utils/promise');
const ajax = require('../../utils/ajax');
Page({
	data: {
    
  	},
	onLoad() {
		wx.showToast({
	      title: '加载中',
	      icon: 'loading',
	    })
		var _self = this;
	    ajax("https://api.douban.com/v2/movie/coming_soon")
	    .then(data=>{
			console.log(data)
	    	data.data.type=0;
			_self.setData({
				arr_coming_soon:data.data
			})
			wx.hideToast();
		})
	},
	onPullDownRefresh(){
	  this.onLoad();
	}
})