
  $('#n1').val('');
  $('#n2').val('');
  $('#n3').val('');

  var endX1, controlX2, num1, num2, num3, interval, arcCenter;


  num1=getRandom(6, 9);
  interval=14-num1;
  num2=getRandom(5, interval);
  num3=num1+num2;

	var input1 = {
		rightValue: num1,
    outs:$('#num1'),
    selfs:$('#n1'),
    canvStop:0
	};
	var input2 = {
		rightValue: num2,
    outs:$('#num2'),
    selfs:$('#n2'),
	};
	var input3 = {
		rightValue: num3,
    outs:$('#num3'),
    selfs:$('#n3'),
	};

  input1.outs.html(num1);
	input2.outs.html(num2);

  input1.selfs.on("keyup", function() {
  	filling (input1.selfs,input1);
  	check(input2.selfs, input1.outs,input1);
    paint();
  });

  input2.selfs.on("keyup", function() {
  	filling (input2.selfs,input2);
  	check(input3.selfs, input2.outs,input2);
    paint();
  });

  input3.selfs.on("keyup", function() {
  	filling (input3.selfs,input3);
  	check('',input3.selfs,input3);
    paint();
  });

  canvas(39,num1);
  var inputs = [];
  inputs.push(input1.selfs);
  inputs.push(input2.selfs);
//  var pozleft = controlX2-10;
  //inputs[0].css('left', pozleft);
  arcCenter=controlX2;
  inputs[0].css('left', function(){
    var pozleft = arcCenter-10;
	        return pozleft;
	    }());
