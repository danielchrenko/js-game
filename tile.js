var game = {
	canvas: document.getElementById("gameCanvas"),
	ctx: null,
	tileSize: 20,
	rows: 10,
	cols: 10,
	tileMap: [],  // Initialize as an empty array
	player: {
		x: 1,
		y: 1,
	},
};

game.ctx = game.canvas.getContext("2d");
game.canvas.style.border = "1px solid #000";

// Initialize the tile map
for (var i = 0; i < game.rows; i++) {
	game.tileMap[i] = [];
	for (var j = 0; j < game.cols; j++) {
		// Assign tile values here (e.g., 0 or 1)
		game.tileMap[i][j] = 0;
	}
}

function handleInput() {
	/* used to handle the inputs of the user
	
	the if else in each statement is to prevent the user from
	going out of bounds
	*/
	document.addEventListener('keydown', function (event) {
		switch (event.key) {
			case 'ArrowUp':
				if (game.player.y == 0) {
					break;
				} else {
					game.player.y -= 1;
					break;
				}
			case 'ArrowDown':
				if (game.player.y == game.cols - 1) {
					break;
				} else {
					game.player.y += 1;
					break;
				}
			case 'ArrowLeft':
				if (game.player.x == 0) {
					break;
				} else {
					game.player.x -= 1;
					break;
				}
			case 'ArrowRight':
				if (game.player.x == game.rows - 1) {
					break;
				} else {
					game.player.x += 1;
					break;
				}
		}
	});
}

function drawTileMap() {
	for (var row = 0; row < game.rows; row++) {
		for (var col = 0; col < game.cols; col++) {
			var tileType = game.tileMap[row][col];
			var x = col * game.tileSize;
			var y = row * game.tileSize;

			if (tileType === 1) {
				game.ctx.fillStyle = "gray";
				game.ctx.fillRect(x, y, game.tileSize, game.tileSize);
			}
		}
	}
}

function drawPlayer() {
	var x = game.player.x * game.tileSize;
	var y = game.player.y * game.tileSize;

	var pikachu = new Image();
    pikachu.src = 'pikachu.png'

	game.ctx.drawImage(pikachu, x, y);

	//game.ctx.fillStyle = "blue";
	//game.ctx.fillRect(x, y, game.tileSize, game.tileSize);
}

function updateGame() {
	// Update game logic here
}

function renderGame() {
	game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
	drawTileMap();
	drawPlayer();
}

function gameLoop() {
	console.log(game.player.x, game.player.y);
	updateGame();
	renderGame();
	requestAnimationFrame(gameLoop);
}

handleInput();
gameLoop();