
  var  num1, num2, num3, interval;

  num1=getRandom(6, 9);
  interval=14-num1;
  num2=getRandom(5, interval);
  num3=num1+num2;

	var input1 = {
		rightValue: num1,// правильное значение сгенерировано getRandom
    outs:$('#num1'),// вывод на экран правильного значения
    selfs:$('#n1'), // чтение введённого значения
    canvStop:0, // переменная для остановки canvas
    startArc:39 // значение для начала второй арки
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
  filling(data[0]);
  check(data,0);
  });

  data[1].selfs.on("keyup", function() {
    filling(data[1]);
    check(data,1);
  });

  data[2].selfs.on("keyup", function() {
    filling(data[2]);
    check(data,2);
  });

  data.push(input1.selfs);
  data.push(input2.selfs);

  var ret = canvas(data,0);//массив и номер элемента с значением размера дуги
  var end = ret.ends; // получение из возвращённого обьекта значения конца арки
  var start = ret.starts;// получение из возвращённого обьекта значения начала арки
  var cont1 = ((end-start)/2)+start;// середина дуги для расположения input
  var pozleft = cont1-10;
  data[0].selfs.css('left', pozleft);
