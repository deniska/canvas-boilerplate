var t = 0;
var R = 20;
var x = 320;
var y = 240;
var fill = false;
function render(c, delta) {
    t += delta;
    c.strokeStyle="#FFFFFF";
    c.fillStyle = "#000000";
    c.fillRect(0, 0, 640, 480);
    c.beginPath();
    c.arc(x, y, R * (1 + Math.sin(t / 100)) * 0.5, 0, 2 * Math.PI);
    c.stroke();
    if (fill) {
        c.fillStyle = "#00FF00";
        c.fill();
    };
}

function keydown(code, char) {
	if (code === 32) {
		R = 40;
	}
}

function keyup(code, char) {
	if (code === 32) {
		R = 20;
	}
}

function mousemove(_x, _y) {
    x = _x;
    y = _y;
}

function mousedown(x, y, btn) {
    fill = true;
}

function mouseup(x, y, btn) {
    fill = false;
}

base = new GAMEBASE("canvas", render);
base.keydown(keydown);
base.keyup(keyup);
base.mousemove(mousemove);
base.mousedown(mousedown);
base.mouseup(mouseup);
