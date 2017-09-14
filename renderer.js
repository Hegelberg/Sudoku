var canvas = document.GetElementByID('cells');
var cnv = canvas.getContext('2d');
var rY = 20;
var rX = 20;
var rW = 40;
var rL = 40;

drawBorder(rX,rY,rW,rL);

cnv.fillStyle='white';
cnv.fillRect(rX,rY,rW,rL);

function drawBorder(xPos, yPos, width, height, thickness = 1)
{
 cnv.fillStyle='#000';
  cnv.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
}
