	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	var imgObj = new Image();

	context.fillStyle = "";
	context.fill();
	
	function drawCirc (xvar, yvar, radius)
	{
	context.beginPath();
	context.arc(xvar + 50, yvar + 50,radius, 0, 2* Math.PI, false);
	context.fillStyle = 'white';
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle = "#2222222";
	context.stroke();
	}

	for(var i = 0; i < 1500; i++)
	{
		var xvar = Math.random() * 400;
		var yvar = Math.random() * 400;
		if((xvar < 250 && xvar > 150) && (yvar < 250 && yvar > 150))
		{
			continue;
		}
		
		for(var j = 14; j > 0; j = j - 3)
		{
			drawCirc(xvar, yvar, j);	
		}
	}

