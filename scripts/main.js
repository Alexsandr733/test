
  var endX1, controlX2, num1, num2, num3, interval;

  num1=getRandom(6, 9);
  interval=14-num1;
  num2=getRandom(5, interval);
  num3=num1+num2;

	var input1 = {
		rightValue: num1,
    outs:$('#num1'),
    selfs:$('#n1'),
    canvStop:0,
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

  var data = [];
  data.push(input1);
  data.push(input2);
  data.push(input3);

  data[0].selfs.val('');
  data[1].selfs.val('');
  data[2].selfs.val('');

  data[0].outs.html(num1);
	data[1].outs.html(num2);

  data[0].selfs.on("keyup", function() {
    //illing (input1.selfs,input1);
  filling(data[0]);
    //filling (input1);
    //check(input2.selfs, input1.outs,input1,endX1);
  //  check(data[1].selfs,data[0],endX1);
  check(data,0,endX1);

  });

  data[1].selfs.on("keyup", function() {
    //filling (input2.selfs,input2);
    filling(data[1]);
    //filling (input2);
  	//check(input3.selfs, input2.outs,input2,'');
    //check(data[2].selfs,data[1],'');
    check(data,1,'');
  });

  data[2].selfs.on("keyup", function() {
  	//filling (input3.selfs,input3);
    filling(data[2]);
    //filling (input3);
  	//check('',input3.selfs,input3,'');
    //check('',data[2],'');
    check(data,2,'');
  });

  data.push(input1.selfs);
  data.push(input2.selfs);

  var cont1 = canvas(39,num1);
  var pozleft = cont1-10;
  data[0].selfs.css('left', pozleft);
