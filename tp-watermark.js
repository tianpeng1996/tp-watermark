// CON  =>  水印文字内容
// H    =>  水印行高
// W    =>  水印宽度
// R    =>  旋转度数（可为负值）
// C    =>  水印字体颜色
// S    =>  水印字体的大小
// O    =>  水印透明度（0~1之间取值）

// 添加水印方法
function TpWatermark(CON,H,W,R,C,S,O) {
	// 判断水印是否存在，如果存在，那么不执行
	if (document.getElementById('tp-watermark') != null) {
		return
	}
	
	var TpLine = parseInt(document.body.clientWidth/W) * 2; // 一行显示几列
	var StrLine = '';
	for(var i = 0; i < TpLine; i++){
		StrLine += '<span style="display: inline-block; line-height:' + H + 'px; width:' + W + 'px; text-align: center; transform:rotate(' + R + 'deg); color:' + C + '; font-size:'+ S + 'px; opacity:' + O + ';">'+ CON +'</span>'
	}
	var DivLine = document.createElement("div");
		DivLine.innerHTML = StrLine;

	var TpColumn = parseInt(document.body.clientHeight/H) * 2; // 一列显示几行
	var StrColumn = '';
	for(var i = 0; i < TpColumn; i++){
		StrColumn += '<div style="white-space: nowrap;">' + DivLine.innerHTML + '</div>';
	}
	var DivLayer = document.createElement("div");
		DivLayer.innerHTML = StrColumn;
		DivLayer.id = "tp-watermark"; // 给水印盒子添加类名
		DivLayer.style.position = "fixed";
		DivLayer.style.top = "0px"; // 整体水印距离顶部距离
		DivLayer.style.left = "-100px"; // 改变整体水印的left值
		DivLayer.style.zIndex = "99999"; // 水印页面层级
		DivLayer.style.pointerEvents = "none";

	document.body.appendChild(DivLayer); // 到页面中
}

// 移除水印方法
function RemoveTpWatermark(){
	// 判断水印是否存在，如果存在，那么执行
	if (document.getElementById('tp-watermark') == null) {
		return
	}
	document.body.removeChild(document.getElementById('tp-watermark'));
}

// 参考文档
// http://sharedblog.cn/post/200.html