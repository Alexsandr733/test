  var clear = $( "input:reset" );
  alert('zzzzz');
	function getRandom(min, max){
		  return Math.round(Math.random() * (max - min) + min);
		}

	var num1=getRandom(6, 9);
	var endX1, controlX1, controlX2,num, num1, num2, num3, start;
	var interval=14-num1;
	var num2=getRandom(5, interval);
	num3=num1+num2;

	var input1 = {
		rightValue: num1,
    outs:$('#num1'),
    selfs:$('#n1')
	};
	var input2 = {
		rightValue: num2,
    outs:$('#num2'),
    selfs:$('#n2')
	};
	var input3 = {
		rightValue: num3,
    outs:$('#num3'),
    selfs:$('#n3')
	};
  alert('zzzzz');
//	$('#num1').html(num1);
  input1.selfs.html(num1);
	input1.selfs.html(num2);
	function canvas (start, num){
		var canvas = $('#c1');
		var ctx = canvas[0].getContext('2d');
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

  input1.selfs.on("keyup", function() {
  	filling ('#n1',input1);
  	check('#n1','#n2', '#num1',input1);
  });
  input2.selfs.on("keyup", function() {
  	filling ('#n2',input2);
  	check('#n2','#n3', '#num2',input2);
  });
  input3.selfs.on("keyup", function() {
  	filling ('#n3',input3);
  	check('#n3','','#n3',input3);
  });
  canvas(39,num1);
  	function filling (inps,obj){
  		var ins = $(inps).val();
  		ins = parseInt(ins);
  		obj.invalue=ins;
  	}

	var inputs = [];
	inputs.push(input1.selfs);
	inputs.push(input2.selfs);
	var pozleft = controlX2-10;
  //input1.selfs.css('left', pozleft);
	inputs[0].css('left', pozleft);
	var inps, next, style;
	var endX2, pozleft2;

	function check(inps,next,style,obj){
			if (obj.invalue == obj.rightValue)
			{
					var colorr = $(style);
					colorr.addClass("right");
				  $(next).show();
				if(inps == '#n1')
				{
					canvas(endX1, num2);
					var cont = controlX2;
					pozleft2 = cont-10;
					inputs[1].css('left', pozleft2);
				}
	    }
	    else
			{
				var colorf = $(style);
				colorf.addClass("wrong");
	    }
	}
