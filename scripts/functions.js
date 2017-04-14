
	function getRandom(min, max){
  	return Math.round(Math.random() * (max - min) + min);
	}

	function canvas (mass, iterator){
		var span = {};
		if (mass[iterator].canvStop==0){
			var start = mass[0].startArc;
			var num = mass[iterator].rightValue;
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
			span.stat = 1;
			mass[0].startArc = endX1;
			mass[iterator].canvStop = 1;
			return(span);
		}
		else{
			span.stat = 0;
			return(span);
		}
  }

	function filling (elmass){
		var ins =elmass.selfs.val();
		ins = parseInt(ins);
		elmass.invalue=ins;
  }

	function showInput (mass, iterator, retin){
		mass[iterator].selfs.show();
		if(retin.stat!=0){
			var end = retin.ends; // получение из возвращённого обьекта значения конца арки
			var start = retin.starts;// получение из возвращённого обьекта значения начала арки
			var cont = ((end-start)/2)+start;// середина дуги для расположения input
			var pozleft2 = cont-10;
			mass[iterator].selfs.css('left', pozleft2);
			mass[iterator].selfs.focus();
		}
	}

	function check(mass, iterator){
		if (mass[iterator].invalue == mass[iterator].rightValue){
			if (iterator==0){
				var ret1 = canvas(mass, 1);
				showInput(mass, 1, ret1);
			}
			else{
				showInput(mass, 2, '');
			}
			if(iterator!=2){
				mass[iterator].outs.addClass("right");
			}
			else{
				mass[iterator].selfs.addClass("right");
			}
	  }
		else{
			if(iterator!=2){
				mass[iterator].outs.addClass("wrong");
			}
			else{
				mass[iterator].selfs.addClass("wrong");
			}
		}
	}
