/*
 * FastV (Javascript  libraries) 0.1.0
 * 
 *
 * Author: xiaotian
 * Email: 18613505558@163.com
 * update Time 2020/10/29
 *================================================
 */


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