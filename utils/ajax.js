// ajax.js
const Promise = require('promise');
const ajax = url => {
	var p = new Promise(resolve=>{
		wx.request({
	    	url:url,
	    	header:{
			    "Content-Type":"json"
			},
	    	success:function(data){
	    		resolve(data)
	    	}
	    })
	})
	return p;
}
module.exports=ajax;