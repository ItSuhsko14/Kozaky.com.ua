const container = document.querySelector('.container');

const btnLeft = document.querySelector('.btn-left'),
	  btnRight = document.querySelector('.btn-right'),
	  btnUp = document.querySelector('.btn-up'),
	  btnDown = document.querySelector('.btn-down'),
	  buttonStart = document.querySelector('.button-start');

const ball = document.querySelector('.ball'),
	  ball2 = document.querySelector('.ball2'),
	  target = document.querySelector('.target');

const modal = document.querySelector('.modal');
const vinner=document.getElementById('vinner');
let scoreRed = document.querySelector('.score-red');
let scoreBlue = document.querySelector('.score-blue');
let scRed=0;
let scBlue=0;
console.log(scoreRed+""+scoreBlue);

let l=0, t=0, l2=90, t2=90, tl=50, tt=50;
	ball.style.left="0%", 
	ball.style.top="0%", 
	ball2.style.left="90%",
	ball2.style.top="90%";
	target.style.top="-100%";
	target.style.left="-100%"


// Game begin
buttonStart.addEventListener('click', () => {
	targetRandome();
	ballsStart();
	modal.classList.remove('active');
	intStart();
})

function ballsStart() {
	ball.style.left="0%";
	ball.style.top="0%";
	ball2.style.left="90%";
	ball2.style.top="90%";
	l=0;
	t=0;
	l2=90;
	t2=90;
}

function targetRandome() {
	tl = Math.round(Math.random()*4)*10+20;
	target.style.left =tl+"%";
	tt=Math.round(Math.random()*4)*10+20;
	target.style.top =tt+"%";
	console.log("target.left="+tl+" target.top="+tt);
}

function victory() {
	if (ball.style.left==target.style.left && ball.style.top==target.style.top) {
		modal.classList.add('active');
		vinner.innerHTML="red";
		modal.style.background="red";
		intStop(); //stop target
	} else if (ball2.style.left==target.style.left && ball2.style.top==target.style.top) {
		modal.classList.add('active');
		vinner.innerHTML="blue";
		modal.style.background="blue";
		intStop(); //stop target
		} else {}
	}

let intMove;
// функція починає рух мішені
function intStart() {
	intMove = setInterval(move, 500);
}

// функція зупиняє рух мішені
function intStop() {
	clearInterval(intMove);
}

// функція задає рух мішені
function move() {
	tld = (Math.round(Math.random()*2)-1)*10; // переміщення вліво
	tsl=tl+tld;								  // положення по горизонталі
	ttd=(Math.round(Math.random()*2)-1)*10;   // переміщення вправо
	tst=tt+ttd;								  // положення по вертикалі;
	if (tsl+"%"==ball2.style.left && tst+"%"==ball2.style.top || //чи співпадає мішень з гравцем
		tsl+"%"==ball.style.left && tst+"%"==ball.style.top) {
		console.log("done");
		tsl=tsl-tld;
		ttd=ttd-ttd;
	} else {
	target.style.left = tsl+"%";
	target.style.top = tst+"%";
	console.log("targetPlace:"+tsl+"%, "+tst+"%");
	console.log("ball:"+ball2.style.left+", "+ball2.style.top);}
}

btnLeft.addEventListener('click', left);
btnRight.addEventListener('click', right);
btnUp.addEventListener('click', up);
btnDown.addEventListener('click', down);

document.addEventListener('keydown', (event) =>{
	const keyCode = event.keyCode;
	switch (keyCode) {
		case 37: left2(); break;
		case 38: up2(); break;
		case 39: right2(); break;
		case 40: down2(); break;
	}
});

function left2() {
	l2=l2-10;
	if (l2<0) {
		l2=0;
	}
	ball2.style.left=l2+"%";
	console.log('l2='+l2);
	victory();
}

function right2() {
	l2=l2+10;
	if (l2>90) {
		l2=90;
	}
	ball2.style.left=l2+"%";
	console.log('l2='+l2);
	victory();
}

function up2() {
	t2=t2-10;
	if (t2<0) {
		t2=0;
	}
	ball2.style.top=t2+"%";
	console.log('t2='+t2);
	victory();
}

function down2() {
	t2=t2+10;
	if (t2>90) {
		t2=90;
	}
	ball2.style.top=t2+"%";
	console.log('t2='+t2);
	victory();
}

function left() {
	l=l-10;
	if (l<0) {
		l=0;
	}
	ball.style.left=l+"%";
	console.log("l="+l);
	victory();
}

function right() {
	l=l+10;
	if (l>90) {
		l=90;
	}
	ball.style.left=l+"%";
	console.log("l="+l);
	victory();
}

function up() {
	t=t-10;
	if (t<0) {
		t=0;
	}
	ball.style.top=t+"%";
	console.log("t="+t);
	victory();
}

function down() {
	t=t+10;
	if (t>90) {
	t=90;
}
	ball.style.top=t+"%";
	console.log("t="+t);
	victory();
}



function victory() {
	if (ball.style.left==target.style.left && ball.style.top==target.style.top) {
		modal.classList.add('active');
		vinner.innerHTML="red";
		modal.style.background="red";
		console.log("ball:"+ball.style.left+", "+ball.style.top);
		console.log("target:"+target.style.left+", "+target.style.top);
		scRed++;
		let brickRed = document.createElement('div');
		brickRed.className="brick-red";
		scoreRed.appendChild(brickRed);
		intStop(); //stop target
	} else if (ball2.style.left==target.style.left && ball2.style.top==target.style.top) {
		modal.classList.add('active');
		vinner.innerHTML="blue";
		modal.style.background="blue";
		scBlue++;
		let brickBlue = document.createElement('div');
		brickBlue.className="brick-blue";
		scoreBlue.appendChild(brickBlue);
		intStop(); //stop target
		} else {}
	}




/* Анімація пакманов */
let x=30;// початкове положення рота па
let i=1;

function eat() {
const ctx = document.getElementById('pacman').getContext("2d");
const ctx2 = document.getElementById('pacman2').getContext("2d");
x=x+i;
if (x>50 || x<0) {
	i=-i
}
let y=360-x;
	const bA = y*Math.PI/180; //begin angle
    const eA = x*Math.PI/180; //end engle
	/* pacman 1 */
	ctx.clearRect(0,0,50,50);
	ctx.beginPath();
    ctx.arc(25,25,25,bA,eA,true); // Внешняя окружность
    ctx.lineTo(25,25);
    ctx.fillStyle = 'red';
    ctx.fill();

    const bA2 = (180-y)*Math.PI/180; //begin angle
    const eA2 = (180-x)*Math.PI/180; //end engle
    /* pacman 2 */
	ctx2.clearRect(0,0,50,50);
	ctx2.beginPath();
    ctx2.arc(25,25,25,bA2,eA2,false); // Внешняя окружность
    ctx2.lineTo(25,25);
    ctx2.fillStyle = 'blue';
    ctx2.fill();
    window.requestAnimationFrame(eat);
}

window.requestAnimationFrame(eat);

function walk() {
	const ctx3=document.getElementById('pacman3').getContext("2d");
	ctx3.clearRect(0,0,50,50);
	ctx.beginPath();
    ctx.arc(25,25,25,0,0,true);
}	ctx3.fillStyle = 'green';

console.log(target.style.top);
console.log(target.style.left);
console.log(ball.style.top);
console.log(ball.style.left);

