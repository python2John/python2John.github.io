/* 拉姆蕾姆回到顶部或底部按钮 */
$(function() {
    // 回到底部
	$("#lamu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:$(document).height()},800);
		return false;
	});
    
    // 回到顶部
	$("#leimu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:0},800);
		return false;
	});
});