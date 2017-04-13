
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
		return(controlX2);
  }

	function filling (elmass){

				var ins =elmass.selfs.val();
		    ins = parseInt(ins);
		    elmass.invalue=ins;
  }

	//function check(next,style,obj,startArc,cont){
//	function check(next,elmass,startArc){
	function check(mass, iterator, startArc){

		if (mass[iterator].invalue == mass[iterator].rightValue){
			if(mass[iterator]!=input3){
				mass[iterator].outs.addClass("right");
			}
			else{
				mass[iterator].selfs.addClass("right");
			}
				next = iterator+1;
				$(mass[next].selfs).show();
	      if (mass[iterator] == input1 && mass[iterator].canvStop==0){
	        mass[iterator].canvStop=1;
				//var cont = canvas(startArc, input2.rightValue);
					var cont = canvas(startArc, mass[1].rightValue);
	    		var pozleft2 = cont-10;
					alert(cont);
					alert(pozleft2);
	    		mass[1].selfs.css('left', pozleft2);
	    	}
	  }
		else{
			if(mass[iterator]!=input3){
				mass[iterator].outs.addClass("wrong");
			}
			else{
				mass[iterator].selfs.addClass("wrong");
			}
		}
	}
