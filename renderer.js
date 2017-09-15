var canvas = document.getElementById('cells');
var cv = canvas.getContext('2d');
cv.beginPath();
cv.moveTo(1,0);
cv.lineTo(1,480);
cv.moveTo(47,0);
cv.lineTo(47,480);
cv.moveTo(94,0);
cv.lineTo(94,480);
cv.moveTo(141,0);
cv.lineTo(141,480);
cv.moveTo(188,0);
cv.lineTo(188,480);
cv.strokeStyle = 'black';
cv.stroke();

