
$('#n1').val('');
$('#n2').val('');
$('#n3').val('');
function getRandom(min, max)
	{

	  return Math.round(Math.random() * (max - min) + min);

	}
var num1=getRandom(6, 9);
var endX1, controlX1, controlX2, control2X1, num1, num2, num3, result, color1, color2, color3, colorb1, colorb2, colorb3;
var interval=14-num1;
var num2=getRandom(5, interval);
num3=num1+num2;

$('#num1').html(num1);
$('#num2').html(num2);

var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
ctx.beginPath();
var controlX1=39;
var controlY1=199;
var controlY2=50; 
var endY=199;
endX1 = (num1*38.5)+39;
controlX2 = ((endX1-39)/2)+39;
ctx.strokeStyle = 'red';
ctx.lineWidtx = 2;
ctx.moveTo(39, 199); 
ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX1, endY);
ctx.lineTo(endX1-15,190);
ctx.moveTo(endX1, 199); 
ctx.lineTo(endX1-3,185);
ctx.stroke();
$("#n1").offset({top:325, left:controlX2-10})
function plus(){
    var in1 = document.getElementById('n1').value;
    in1 = parseInt(in1);
    color1 = document.getElementById('n1');  
    color1 = document.getElementById('n1'); 
    colorb1 = document.getElementById('num1'); 
    if (in1 == num1 ) {
        color1.style.color = 'black';
        colorb1.style.backgroundColor = 'white';
        $("#n2").show();
        var canvas = document.getElementById('c1');
        var ctx = canvas.getContext('2d');
		ctx.beginPath();
		var control2X1=endX1;
		var control2Y1=199;
		var control2Y2=50; 
		var endY=199;
		endX2 = (num2*38.5)+endX1;
		control2X2 = ((endX2-endX1)/2)+endX1;
		ctx.strokeStyle = 'red';
		ctx.lineWidtx = 2;
		ctx.moveTo(endX1, 199); 
		ctx.bezierCurveTo(control2X1, control2Y1, control2X2, control2Y2, endX2, endY);
		ctx.lineTo(endX2-15,190);
		ctx.moveTo(endX2, 199); 
		ctx.lineTo(endX2-3,185);
		ctx.stroke();
        $("#n2").offset({top:325, left:control2X2-10})
    }
    else{
         color1.style.color = 'red';
         colorb1.style.backgroundColor = 'yellow';
    }
}
var endX2, control2X2;

function check(){
    var in2 = document.getElementById('n2').value;
    in2 = parseInt(in2);
    color2 = document.getElementById('n2');
    colorb2 = document.getElementById('num2');
    if (num2==in2) {
        color2.style.color = 'black';
        colorb2.style.backgroundColor = 'white';
        $("#n3").show();
    }
    else{
         color2.style.color = 'red';
         colorb2.style.backgroundColor = 'yellow';
    } 
}

function check2(){
    var in3 = document.getElementById('n3').value;
    in3 = parseInt(in3);
    color3 = document.getElementById('n3');
    colorb3 = document.getElementById('num3');
    if (num3 == in3) {
        color3.style.color = 'black';
        color3.style.backgroundColor = 'white';
        document.getElementById('num3').innerHTML=num3;
    }
    else{
        color3.style.color = 'red';
        color3.style.backgroundColor = 'yellow';
    }
}