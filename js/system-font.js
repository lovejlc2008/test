	
	var isMac = function() {
		return /macintosh|mac os x/i.test(navigator.userAgent);
	}();
	var isWindows = function() {
		return /windows|win32/i.test(navigator.userAgent);
	}();
	if(isWindows){
		document.getElementsByTagName('html')[0].style.fontFamily = "arial,simsun";
	}
	if(isMac){
		document.getElementsByTagName('html')[0].style.fontFamily = "Hiragino Sans GB,Microsoft YaHei";
//		alert(document.body.style.fontFamily);
	} 