
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
/*
 function filling (inps,obj){
    var ins = $(inps).val();
    ins = parseInt(ins);
    obj.invalue=ins;
*/
		function filling (elmass){
		    //var ins = $(obj.selfs).val();
				var ins =elmass.selfs;
				alert(attr(elmass.selfs));
				alert(ins);
			//	alert(obj.selfs);
		    ins = parseInt(ins);
		    elmass.invalue=ins;
				//elmass.obj.invalue=elmass.obj.selfs;
  }

	function check(next,style,obj,startArc,cont){
		if (obj.invalue == obj.rightValue){
	//if (obj.selfs == obj.rightValue){
      var colorr = style;
			colorr.addClass("right");
			$(next).show();
      if (obj == input1 && obj.canvStop==0){
      //  var startArc = endX1;
    		canvas(startArc, input2.rightValue);
        obj.canvStop=1;
    		cont = controlX2;
    		pozleft2 = cont-10;
    		inputs[1].css('left', pozleft2);
    	}
  	}
	  else{
			var colorf = $(style);
			colorf.addClass("wrong");
	  }
	}
