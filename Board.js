const Cell = require("./Cells.js");
class Board {
	constructor(_cells) {
		this.cells=[];
		for(let i=0; i<_cells; i++) {
			this.cells.push(new Cells(i));
		}
document.addEventListener("click", ((evt ) => {
	this.update(evt.clientX, evt.clientY);
	}
})
update(x, y) {
	let did = false;
	this.Cells.forEach(((cells) => {
		if (cells.range.nX < x && x < cells.range.mX && y > cells.range.nY && y < cells.range.mY) {
		did = true; 
			}
		}
		
	}
	
}
