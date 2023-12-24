var myGamePiece;


function startGame() {
	myGameArea.start();
	myGamePiece = new component(140, 10, "red", 10, 120);
}

var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 480;
		this.canvas.height = 480;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 17);
		this.canvas.style.border = "1px solid #000";
		
		// KEY LISTENERS
		window.addEventListener('keydown', function (e) {
            myGameArea.key = e.key;
        });
        window.addEventListener('keyup', function () {
            myGameArea.key = false;
        });
		// ^^
	},
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

function component(width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.speedX = 0;
	this.speedY = 0;
	this.update = function(){
		ctx = myGameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
	}
}

function updateGameArea() {
	myGameArea.clear();
	myGamePiece.newPos();
	myGamePiece.update();
	
	console.log(myGamePiece.speedY, myGamePiece.speedX, myGamePiece.y, myGamePiece.x);

	if (myGameArea.key && myGameArea.key === "ArrowUp") {
        moveup();
		movement_this_frame = true;
    }
    if (myGameArea.key && myGameArea.key === "ArrowDown") {
        movedown();
		movement_this_frame = true;
    }
    if (myGameArea.key && myGameArea.key === "ArrowLeft") {
        moveleft();
		movement_this_frame = true;
    }
    if (myGameArea.key && myGameArea.key === "ArrowRight") {
        moveright();
		movement_this_frame = true;
    }
	if (!(myGameArea.key && myGameArea.key === "ArrowUp") && !(myGameArea.key && myGameArea.key === "ArrowDown") && !(myGameArea.key && myGameArea.key === "ArrowLeft") && !(myGameArea.key && myGameArea.key === "ArrowRight")) {
		stopMove();
	}
}

function moveup() {
  myGamePiece.speedY -= 1;
}

function movedown() {
  myGamePiece.speedY += 1;
}

function moveleft() {
  myGamePiece.speedX -= 1;
}

function moveright() {
  myGamePiece.speedX += 1;
}

function stopMove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}



// Call the startgame function when the page loads
window.onload = startGame;