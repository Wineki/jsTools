/**
 * 获取url的参数
 * @function cutOffStr
 * @param {String} name 需要查找的字段名
 * @return {String} 返回获取的结果
*/
cutOffStr = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var windowHref=decodeURI(window.location.search);
    var r = windowHref.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};
/*为URL添加字段
* @function changeUrl
* @param {String} name 添加字段名称
* @return {String} 返回修改后的Url
*/
changeUrl = function(name,num){
	var hashUrl = window.location.href;
	if(!cutOffStr(name)){
	hashUrl = hashUrl+'&'+name+'='+num;
	}else{
	hashUrl = hashUrl.split(name+'=')[0]+name+'='+num; 
	}
	window.history.pushState({},0,hashUrl);
};
/*
*控制目标DIV不随滑动条
*@function fixedDiv
*@param {object} tardiv 目标jquery对象 ifix 是否固定
*@return {bool} false固定
*/
 fixedDiv = function(tardiv,ifix){
  if(ifix === true){
    tardiv.bind('touchmove',function(e){
        return false;
      });
  }else{
    tardiv.bind('touchmove',function(e){
        return true;
      });
  }
};
/*
*识别浏览器(基于原生js)
*@function getExploreInfo
*@return {string}浏览器类型 {string} 浏览器版本号
*/
getExploreInfo = function(){
	var explorer = window.navigator.userAgent.toLowerCase() ;
	 //ie 
	 if (explorer.indexOf("msie") >= 0) {
	    var ver=explorer.match(/msie ([\d.]+)/)[1];
	    return {type:"IE",version:ver};
	 }
	 //firefox 
	 else if (explorer.indexOf("firefox") >= 0) {
	    var ver=explorer.match(/firefox\/([\d.]+)/)[1];
	    return {type:"Firefox",version:ver};
	 }
	 //Chrome
	 else if(explorer.indexOf("chrome") >= 0){
	    var ver=explorer.match(/chrome\/([\d.]+)/)[1];
	     return {type:"Chrome",version:ver};
	 }
	 //Opera
	 else if(explorer.indexOf("opera") >= 0){
	 var ver=explorer.match(/opera.([\d.]+)/)[1];
	 return {type:"Opera",version:ver};
	 }
	 //Safari
	 else if(explorer.indexOf("Safari") >= 0){
	 var ver=explorer.match(/version\/([\d.]+)/)[1];
	 return {type:"Safari",version:ver};
	}
};

/*
*基于左右滑动的适配，有些手机不识别swipeleft,非公用函数
*@function swipe
*基于hammer.js基础上使用
**/
swipe = function(tageName){
	tageName.hammer().on("swipeleft panleft", function(event) {
				/*添加对应事件*/
			});
			hammertime.on("swiperight panright", function(event) {
				/*添加对应事件*/
			});

};
/*
*监听input的val事件
*@param {object} jquery对象
*/
event = function(object){
	//IE
	if($.browser.msie){
		object.get(0).addEventListener('input',function(e){
				console.log(e.target.value);
				/*添加对应事件*/
			});
	}else{
	//非IE
		object.get(0).attachEvent('onpropertychange',function(e){
			console.log(e.target.value);
			/*添加对应事件*/
		},false);
	}
};
