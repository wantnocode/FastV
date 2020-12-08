var fastV = {
	version:"0.1.0"
}


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


fastV.Node = function (id) {
		this.id = id;
		this.width = 35;
		this.height = 35;
		this.x = 0;
		this.y = 0;
		this.style = {fillStyle: '71, 167, 184', fontSize: '10pt', font:"Consolas"};
		this.type = null;
		this.selected = false;

		this.alpha = 1;
		this.scala = 1;
		this.rotate = 0;
};

/*
	@circleNode
	@id/id
	@autor xgl
*/
fastV.CircleNode = function(id,x,y){
		var node = new fastV.Node(id);
		node.r = 10;
		node.x = x;
		node.y = y;	
		node.beginDegree = 0;
		node.endDegree = 2 * Math.PI;
		node.draw = function(ctx){
			if(this.visible == false) return;
			var w = node.r * 2;
			// var w = node.r * 2 * this.scala;
			// var h = node.r * 2 * this.scala;
			// this.setWidth(w);
			// this.setHeight(h);
			ctx.save();
			ctx.moveTo(node.x,node.y);
			ctx.beginPath();
			ctx.fillStyle = 'rgba(' + this.style.fillStyle + ',' + this.alpha + ')';
			// ctx.arc(node.x+ w/2, node.y+ h/2, w/2, this.beginDegree, this.endDegree, true);
			ctx.arc(node.x, node.y, node.r, this.beginDegree, this.endDegree, true);
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		};
		return node;
}
fastV.Link = function(nodeA, nodeB) {
		this.nodeA = nodeA;
		this.nodeB = nodeB;
		this.style = {strokeStyle: '116, 166, 250', alpha: 1, lineWidth: 2};
};

fastV.FoldLink = function(nodeA, nodeB) {
		var link = new fastV.Link(nodeA, nodeB);
		link.draw = function (ctx) {
			var x1 = this.nodeA.x;
			var y1 = this.nodeA.y;
			var x2 = this.nodeB.x;
			var y2 = this.nodeB.y;
			var mx = x1;
			var my = y1;
				ctx.save();
				ctx.beginPath();
				ctx.strokeStyle = 'rgba(' + this.style.strokeStyle + ',' + this.style.alpha + ')';
				ctx.lineWidth = this.style.lineWidth;
				ctx.moveTo(this.nodeA.x, this.nodeA.y);
				ctx.lineTo(this.nodeB.x, this.nodeB.y);
				ctx.closePath();
				ctx.stroke();
				ctx.restore();
			
		};

		return link;
};





fastV.draw = function(){
	this.ctx.clearRect(0,0,canvas.width,canvas.height)
	for(var i = 0; i< this.links.length; i++){
		this.links[i].draw(this.ctx);
	}
	for(var i = 0; i< this.nodes.length; i++){
		this.nodes[i].draw(this.ctx);
	}
	
}