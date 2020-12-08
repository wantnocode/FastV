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

@events 绘制类初始化
@autor xiaotian
@param canvas 画布 id

*/
fastV.init = function(canvas){
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.nodes = [];
		this.links = [];
		this.isMousedown = false;
		this.mouseX = 0;
		this.mouseY = 0;
		this.canvas.onmousedown = function(event){
			fastV.isMousedown = true;
			var xy = getXY(fastV.canvas,event);
			fastV.mouseX = xy.x;
			fastV.mouseY = xy.y;

		};
		this.canvas.onmousemove = function(event){
			var xy = getXY(fastV.canvas,event);
			
			if(!fastV.isMousedown) return;
			fastV.ctx.clearRect(0,0,canvas.width,canvas.height)
			for(var i = 0; i< fastV.links.length; i++){
				fastV.links[i].draw(fastV.ctx);
			}
			for(var i = 0; i< fastV.nodes.length; i++){
				fastV.nodes[i].x = fastV.nodes[i].x + xy.x - fastV.mouseX;
				fastV.nodes[i].y = fastV.nodes[i].y + xy.y - fastV.mouseY;
				fastV.nodes[i].draw(fastV.ctx);
			}
			fastV.mouseX = xy.x;
			fastV.mouseY = xy.y;
		};
		this.canvas.onmouseup = function(event){
			fastV.isMousedown = false;
		};

}