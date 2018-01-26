const input = document.getElementById('fax');
var canvas = document.getElementById('holst');
var ctx = canvas.getContext('2d');


function getValue(event) {
	let value;
	let key = event.which || event.keyCode;
	if (key == 13) {
		event.stopPropagation();
		value = event.target.value;
		event.target.value = '';
		console.log(value);
		ctx.moveTo(38,100);
		switch(value){
			case '1': 
			ctx.quadraticCurveTo(70,-90, 75,100);
			ctx.stroke();
			break;
			case '2':
			ctx.quadraticCurveTo(100,-90, 115,100);
			ctx.stroke();
			break;
			case '3':
			ctx.quadraticCurveTo(100,-90, 150,100);
			ctx.stroke();
			break;
			case '4':
			ctx.quadraticCurveTo(115,-90, 192,100);
			ctx.stroke();
			break;
			case '5':
			ctx.quadraticCurveTo(130,-90, 231,100);
			ctx.stroke();
			break;
			case '6':
			ctx.quadraticCurveTo(140,-90, 270,100);
			ctx.stroke();
			break;
			case '7':
			ctx.quadraticCurveTo(170,-90, 310,100);
			ctx.stroke();
			break;
			case '8':
			ctx.quadraticCurveTo(190,-90, 348,100);
			ctx.stroke();
			break;
			case '9':
			ctx.quadraticCurveTo(210,-90, 387,100);
			ctx.stroke();
			break;
			case '10':
			ctx.quadraticCurveTo(240,-90, 425,100);
			ctx.stroke();
			break;
			case '11':
			ctx.quadraticCurveTo(257,-90, 465,100);
			ctx.stroke();
			break;
			case '12':
			ctx.quadraticCurveTo(296,-90, 505,100);
			ctx.stroke();
			break;
			case '13':
			ctx.quadraticCurveTo(310,-90, 543,100);
			ctx.stroke();
			break;
			case '14':
			ctx.quadraticCurveTo(330,-90, 583,100);
			ctx.stroke();
			break;
			case '15':
			ctx.quadraticCurveTo(350,-90, 620,100);
			ctx.stroke();
			break;
			case '16':
			ctx.quadraticCurveTo(370,-90, 659,100);
			ctx.stroke();
			break;
			case '17':
			ctx.quadraticCurveTo(390,-90, 698,100);
			ctx.stroke();
			break;
			case '18':
			ctx.quadraticCurveTo(410,-90, 739,100);
			ctx.stroke();
			break;
			case '19':
			ctx.quadraticCurveTo(430,-90, 778,100);
			ctx.stroke();
			break;
			case '20':
			ctx.quadraticCurveTo(450,-90, 816,100);
			ctx.stroke();
			break;
			default:
			if (value > 20) {
				document.getElementById('fax').style.backgroundColor = "red"
			ctx.stroke();
			break;
			}
		}
		
		// ctx.quadraticCurveTo(100,-90, value,100);
		ctx.stroke();
	}
	
}
function clearV() {
	ctx.clearRect(0,0, 875, 285);
}



document.addEventListener('keypress', getValue);

