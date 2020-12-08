/*
 * FastV (Javascript  libraries) 0.1.0
 * 
 *
 * Author: xiaotian
 * Email: 18613505558@163.com
 * update Time 2020/10/29
 *================================================
 */


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
	@autor xiaotian
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