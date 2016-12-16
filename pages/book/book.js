// book.js
const Promise = require('../../utils/promise');
const ajax = require('../../utils/ajax');
Page({
  data: {
    
  },
  onLoad(options) {
    
  },
  inputValue:"",
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },
  searchBook(){
  	if(this.inputValue){

      var _self = this;
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      })
      ajax(encodeURI("https://api.douban.com/v2/book/search?q="+this.inputValue))
      .then(data=>{
        console.log(data);
        _self.setData({
          arr_booklist:data.data
        })
        wx.hideToast();
      })
    }else{
      wx.showModal({
        title:"关键字不能为空",
        showCancel:false
      })
    }
  }
})
