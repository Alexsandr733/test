$('#n1').val('');
$('#n2').val('');
$('#n3').val('');
function getRandom(min, max)
	{
	  return Math.round(Math.random() * (max - min) + min);
	}
var num1=getRandom(6, 9);
var endX1, controlX1, controlX2,num, num1, num2, num3, result, color1, color2, color3, colorb1, colorb2, colorb3, start;
var interval=14-num1;
var num2=getRandom(5, interval);

num3=num1+num2;
$('#num1').html(num1);
$('#num2').html(num2);
function canvas (start, num){
	var canvas = document.getElementById('c1');
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	controlX1=start;
	var controlY1=199;
	var controlY2=50;
	var endY=199;
	endX1 = (num*38.5)+start;
	controlX2 = ((endX1-start)/2)+start;
	ctx.strokeStyle = 'red';
	ctx.lineWidtx = 2;
	ctx.moveTo(start, 199);
	ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX1, endY);
	ctx.lineTo(endX1-15,190);
	ctx.moveTo(endX1, 199);
	ctx.lineTo(endX1-3,185);
	ctx.stroke();
}

canvas(39,num1);
$("#n1").offset({top:325, left:controlX2-10});
	alert (num1);
var inps, next, checks, style;
var endX2, control2X2;

function check(inps,next,checks,style){
		var in2 = $(inps).val();
    in2 = parseInt(in2);
		if (checks==in2) {
				var colorr = $(style);
				colorr.addClass("right");
			  $(next).show();
			if(inps == '#n1')
			{
				canvas(endX1, num2);
				$("#n2").offset({top:325, left:controlX2-10});
				i++;
			}
    }
    else{
			var colorf = $(style);
			colorf.addClass("wrong");
    }
}
