 /*
 * FastV (Javascript  libraries) 0.1.0
 * 
 *
 * Author: xiaotian
 * Email: 18613505558@163.com
 * update Time 2020/10/29
 *================================================
 */


/*
@until工具类
@autor xiaotian
@param box 容器盒子
@param event 事件


*/
function getXY(box, event){
		event = event; 
		var x = document.body.scrollLeft + (event.x || event.layerX);
		var y = document.body.scrollTop + (event.y || event.layerY) ;
		return {
			x:x,
			y:y
		}
}