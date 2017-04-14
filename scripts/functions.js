
	function getRandom(min, max){
  	return Math.round(Math.random() * (max - min) + min);
	}

//	function canvas (start, num, mass){
	function canvas (mass, iterator){
		var start = mass[0].startArc;
		var num = mass[iterator].rightValue;
		var span = {}
    var canvas = $('#c1');
    var ctx = canvas[0].getContext('2d');
    ctx.beginPath();
    var controlX1=start;
    var controlY1=199;
    var controlY2=50;
    var endY=199;
    var endX1 = (num*38.5)+start;
    var controlX2 = ((endX1-start)/2)+start;
    ctx.strokeStyle = 'red';
    ctx.lineWidtx = 2;
    ctx.moveTo(start, 199);
    ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX1, endY);
    ctx.lineTo(endX1-15,190);
    ctx.moveTo(endX1, 199);
    ctx.lineTo(endX1-3,185);
    ctx.stroke();
		span.starts = start;
		span.ends = endX1;
		mass[0].startArc = endX1;
		return(span);
  }

	function filling (elmass){

				var ins =elmass.selfs.val();
		    ins = parseInt(ins);
		    elmass.invalue=ins;
  }



	function check(mass, iterator){

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
					var ret = canvas(data, 1);
					var end = ret.ends; // получение из возвращённого обьекта значения конца арки
					var start = ret.starts;// получение из возвращённого обьекта значения начала арки
					var cont = ((end-start)/2)+start;// середина дуги для расположения input
	    		var pozleft2 = cont-10;
					alert(pozleft);
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
