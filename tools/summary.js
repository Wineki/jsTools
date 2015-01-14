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