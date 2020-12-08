/*
 * FastV (Javascript  libraries) 0.1.0
 * 
 *
 * Author: xiaotian
 * Email: 18613505558@163.com
 * update Time 2020/10/29
 *================================================
 */







fastV.draw = function(){
	this.ctx.clearRect(0,0,canvas.width,canvas.height)
	for(var i = 0; i< this.links.length; i++){
		this.links[i].draw(this.ctx);
	}
	for(var i = 0; i< this.nodes.length; i++){
		this.nodes[i].draw(this.ctx);
	}
	
}