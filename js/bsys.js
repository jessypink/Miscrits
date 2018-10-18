
var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");
var hUP = 160;

var sire = new Image();
var sirem = new Image();
var salo = new Image();
var salom = new Image();
var bgr = new Image();
var stb = new Image();
var stbr = new Image();
var sklsbar = new Image();
var sklbtn = new Image();

	var pHPpb=186;
	var bHPpb=186;

sire.src = "img/sire.png";
sirem.src = "img/sirem.png";
salo.src = "img/salo.png";
salom.src = "img/salom.png";
bgr.src = "img/BGbc.jpg";
stb.src = "img/statbar.png";
stbr.src = "img/statbarreverse.png";
sklsbar.src = "img/skillsbar.png";
sklbtn.src = "img/sklbr.png";

//Прогресс-бар жизней игрока
function drawPPB() {
	  ctx.fillRect(95,105,pHPpb,18);
  };
//Прогресс-бар жизней бота
function drawBPB() {
	  ctx.fillRect(990,105,bHPpb,18);
}

//Отрисовка всех элементов
function draw() {
	ctx.drawImage(bgr, 0, 0);
	ctx.drawImage(sire, 725, hUP, 500, 350);
	ctx.drawImage(salo, 55, hUP+15, 550, 350);
	ctx.drawImage(stb, 55, 20, 248, 150);
	ctx.drawImage(stbr, 970, 20, 248, 150);
	ctx.drawImage(salom, 62, 27, 65, 63);
	ctx.drawImage(sirem, 1150, 27, 60, 63);
	ctx.drawImage(sklsbar, 300,550);
	ctx.drawImage(sklbtn,480, 610);
	drawPPB();
	drawBPB();
	//Правая кнопка ctx.fillRect(482,610,170,60);
	//Левая кнопка  ctx.fillRect(310,610,170,60);
}


//Обработка нажатия
window.onload = function(){
    cvs.addEventListener("mousedown",onDown,false);
  };
  function onDown(event){
    cx = event.pageX;
    cy = event.pageY;
    //alert("X,Y="+cx+","+cy);

		drawPPB();

		//Левая кнопка
		if (cx > 310 && cx < 480 && cy < 680 && cy > 610 && bHPpb >= 20) {
     bHPpb = bHPpb - 20;
	 ctx.clearRect(990,105,bHPpb+20,18);
	 //alert("loal");
	 drawBPB();
	 sleep(2000);
	 return dmgBota();
  }

  		//Правая кнопка
		 if (cx > 482 && cx < 652 && cy < 680 && cy > 610 && pHPpb <= 166) {
	   pHPpb = pHPpb + 20;
     ctx.clearRect(95,105,pHPpb-20,18);
		 return drawPPB();
  }

  };

  function dmgBota() {
		//var t = (new Date()).getTime();
	  pHPpb = pHPpb - 20;
	   ctx.clearRect(95,105,pHPpb+20,18);
		return drawPPB();

  };

	function sleep(millis) {
	    var t = (new Date()).getTime();
	    var i = 0;
	    while (((new Date()).getTime() - t) < millis) {
	        i++;
	    }
	}

bgr.onload = draw;
