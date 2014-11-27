for(var k = 0; k < 4; k++)
{
var canvas = document.getElementsByTagName('canvas')[k];
	var context = canvas.getContext('2d');
	var imgObj = new Image();

	function drawCirc (xvar, yvar, radius)
	{
	context.beginPath();
	context.arc(xvar + 25, yvar + 25,radius, 0, 2* Math.PI, false);
	context.fillStyle = 'white';
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle = '#222233';
	context.stroke();
	}

	function drawBorder(canv)
	{
		context.beginPath();
		switch(canv) {
		 case 0:
			context.moveTo(0, 250);
			context.lineTo(250, 250);
			context.stroke();
			context.lineTo(250, 0);
			context.stroke();
			context.moveTo(250, 250);
			context.lineTo(0, 0);
			context.stroke();
			break;
		 case 1:
			context.moveTo(250, 250);
			context.lineTo(0, 250);
			context.stroke();
			context.lineTo(0,0);
			context.stroke();
			context.moveTo(0, 250);
			context.lineTo(250, 0);
			context.stroke();
			break; 
		 case 2:
			context.moveTo(0, 0);
			context.lineTo(250, 0);
			context.stroke();
			context.lineTo(250, 250);
			context.stroke();
			context.moveTo(250,0);
			context.lineTo(0, 250);
			context.stroke();
			break;
		 case 3:
			context.moveTo(250, 0);
			context.lineTo(0, 0);
			context.stroke();
			context.lineTo(0,250);
			context.stroke();
			context.moveTo(0, 0);
			context.lineTo(250, 250);
			context.stroke();
			break;
		 default:
		}

	}

	context.strokeStyle = '#111111';
	drawBorder(k);

	var arr = [];
		arr.push({ xtop: '180', xbot: '100', ytop: '180', ybot: '100'});
		arr.push({ xtop: '115', xbot: '35', ytop: '180', ybot: '100' });
		arr.push({ xtop: '180', xbot: '100', ytop: '115', ybot: '35' });
		arr.push({ xtop: '115', xbot: '35', ytop: '115', ybot: '35'});
			

	for(var i = 0; i < 400; i++)
	{
		var xvar = Math.random() * 200;
		var yvar = Math.random() * 200;
		if((xvar < arr[k].xtop && xvar > arr[k].xbot) && (yvar < arr[k].ytop && yvar > arr[k].ybot))
		{
			continue;
		}
		
		for(var j = 14; j > 0; j = j - 3)
		{
			drawCirc(xvar, yvar, j);	
		}
	}


}
