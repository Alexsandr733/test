
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
		//z = controlX2;
		return(controlX2);
  }

	function filling (elmass){

				var ins =elmass.selfs.val();
		    ins = parseInt(ins);
		    elmass.invalue=ins;
  }

	//function check(next,style,obj,startArc,cont){
	function check(next,elmass,startArc){
		if (elmass.invalue == elmass.rightValue){
			if(elmass!=input3){
				elmass.outs.addClass("right");
			}
			else{
				elmass.selfs.addClass("right");
			}
				$(next).show();
	      if (elmass == input1 && elmass.canvStop==0){
	        elmass.canvStop=1;
					var cont = canvas(startArc, input2.rightValue);
	    		var pozleft2 = cont-10;
	    		data[1].selfs.css('left', pozleft2);
	    	}
	  }
		else{
			if(elmass!=input3){
				elmass.outs.addClass("wrong");
			}
			else{
				elmass.selfs.addClass("wrong");
			}
		}
	}
