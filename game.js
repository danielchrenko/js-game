var user;

/* NOTES

	grid layout plan:
	500 x 500
	20 x 20
	
*/


function startGame() {
	myGameArea.start();
	
	var pikachu = new Image();
    pikachu.src = 'pikachu.png'
	
	pikachu.onload = function() {
		user = new sprite(pikachu, 120, 120);
	};
}

var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 500;
		this.canvas.height = 500;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea, 17);
		// 60 fps
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

function sprite(image, x, y) {
	this.image = image;
	this.x = x;
	this.y = y;
	this.speedX = 0;
	this.speedY = 0;
	this.update = function(){
		ctx = myGameArea.context;
		ctx.drawImage(this.image, this.x, this.y);
	}
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
	}
	
}

function updateGameArea() {
	myGameArea.clear();
	user.newPos();
	user.update();
	
	var text = "X: " + user.x + " Y: " + user.y;
	
	ctx = myGameArea.context;
	ctx.fillStyle = "black";
	ctx.fillText(text, 30, 30);
	
	console.log(user.speedY, user.speedX, user.y, user.x);

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
  user.speedY -= 1;
}

function movedown() {
  user.speedY += 1;
}

function moveleft() {
  user.speedX -= 1;
}

function moveright() {
  user.speedX += 1;
}

function stopMove() {
  user.speedX = 0;
  user.speedY = 0;
}



// Call the startgame function when the page loads
window.onload = startGame;