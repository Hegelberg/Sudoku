class Cells {
	constructor(pos) {
		this.nX = 47 * (pos % 9);
		this.xX = 47 * ((pos % 9) + 1);
		this.nY = 47 * Math.floor(pos / 9);
		this.xY = 47 * (Math.floor(pos / 9) + 1);
	}
}
module.exports=Cells;
