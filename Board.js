const Cell = require("./Cells.js");
class Board {
	constructor(_Cells) {
		console.log('Constructed with:', _Cells);
		this.Cells = [];
		for (var i = 0; i < _Cells; ++i) this.Cells.push(new Cell(i));
		const me = this;
		document.addEventListener("click", evt => {
			me.update(evt.clientX, evt.clientY);
		});
	}
	update(x, y) {
		let did = false;
		this.Cells.forEach(cell => {
			if ((cell.nX < x && x < cell.xX) && (y > cell.nY && y < cell.xY)) {
				did = true;
				console.log("You hit this cell:", cell);	
			} else {
				// console.log("You did not hit this cell:", cell); 
			}
		});
	}
}
module.exports = Board;
