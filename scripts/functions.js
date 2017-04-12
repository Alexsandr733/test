
	function getRandom(min, max){
  	return Math.round(Math.random() * (max - min) + min);
	}

	function canvas (start, num){
    var canvas = $('#c1');
    var ctx = canvas[0].getContext('2d');
    ctx.beginPath();
    var controlX1=start;
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

  function filling (inps,obj){
    var ins = $(inps).val();
    ins = parseInt(ins);
    obj.invalue=ins;
  }

	function check(next,style,obj){
		if (obj.invalue == obj.rightValue){
      var colorr = style;
			colorr.addClass("right");
			$(next).show();
      if (obj == input1 && obj.canvStop==0){
    		canvas(endX1, num2);
        obj.canvStop=1;
    		var cont = controlX2;
    		var pozleft2 = cont-10;
    		inputs[1].css('left', pozleft2);
    	}
  	}
	  else{
			var colorf = $(style);
			colorf.addClass("wrong");
	  }
	}
