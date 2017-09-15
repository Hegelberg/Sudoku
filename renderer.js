const Board = require("./Board.js"); 
var canvas = document.getElementById('cells'),
	cv = canvas.getContext('2d'),
	WIDTH = 420,
	HEIGHT = 420,
	render = () => {
		cv.fillStyle = 'black';
		cv.fillRect(0, 0, WIDTH, HEIGHT); // Clear the screen to redraw for this frame
		cv.fillStyle = "white"
		cv.fillRect(3, 3, WIDTH - 6, WIDTH - 6);
		cv.strokeStyle = 'black';
		for (let i = 1;i<9; i++) {
			cv.beginPath();
			if (i == 3 || i==6) {
				cv.lineWidth = 3;
			} else {
				cv.lineWidth = 1;
			}
			cv.moveTo((WIDTH / 9) * i, 0);
			cv.lineTo((WIDTH / 9) * i, 420);
			cv.stroke();
			cv.closePath();
		}
		for (let i = 0;i<9; i++) {
			cv.beginPath();
			if (i == 3 || i==6) {
                                cv.lineWidth = 3;
                        } else {
                                cv.lineWidth = 1;
                        }
                        cv.moveTo(0, (HEIGHT / 9) * i);
                        cv.lineTo(420, (HEIGHT / 9) * i);
			cv.stroke();
			cv.closePath();
                }

		cv.stroke();
		requestAnimationFrame(render);
	};
requestAnimationFrame(render);
