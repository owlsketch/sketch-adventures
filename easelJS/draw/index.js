function init() {
	var stage = new createjs.Stage("easel_canvas");	

	var back_circle = new createjs.Shape();
	back_circle.graphics.beginFill("#995599").drawCircle(0,0,100);
	back_circle.x = 150;
	back_circle.y = 100;
	stage.addChild(back_circle);

	var circle = new createjs.Shape();
	circle.graphics.beginFill("#B955B9").drawCircle(0,0,50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);

	var small_circle = new createjs.Shape();
	small_circle.graphics.beginFill("#D555D5").drawCircle(0,0,25);
	small_circle.x = 75;
	small_circle.y = 100;
	stage.addChild(small_circle);

	stage.update();
};
