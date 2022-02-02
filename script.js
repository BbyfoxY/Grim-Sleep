/*
========================================
||||||||||||||--- TODO: ---|||||||||||||
----------------------------------------
---Fix Level Loading
---Add Platforms
---Add Collision
---Add Scrolling Camera
---Add Title Screen
---Add Babies
---Add Brick Throwing
---Add Brick Ammo
---Add Cutscenes(Optional)
---Add Story
---Add Music
---Add SFX
---Add Boss Fights(Angry Toddler??? IDK)
---Remove Grim Rendering Bug
========================================
*/



//---IMPORTS---
import { Player } from "./constructors.js";
import { Camera } from "./constructors.js";
import { grimRight0 } from "./variables.js";
import { grimLeft0 } from "./variables.js";
import { gravity } from "./variables.js";
import { level } from "./variables.js";
import { tileSize } from "./variables.js";
import { grim } from "./variables.js";
//Get Canvas and Context(CTX)
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
start();

//---Functions---
//Draw the Map
function drawMap() {
	
}
//Listen For Keypresses(HOLDING DOWN)
document.addEventListener("keydown", (e) => {
	if (e.keyCode === 65) {
		//(---A---)
		grim.moveKeys.a = true;
		//Sets Previous Direction for Drawing Purposes
		grim.prevDir = 'left';
	} else if (e.keyCode === 68) {
		//(---D---)
		grim.moveKeys.d = true;
		//Sets Previous Driection for Drawing Purposes
		grim.prevDir = 'right';
	}
});
//Listen For Keypresses(LETTING GO)
document.addEventListener("keyup", (e) =>{
	if (e.keyCode === 87 && grim.canJump === true) {
		//(---W---)
		grim.velY = -125;
		grim.canJump = false;
	} else if (e.keyCode === 65) {
		//(---A---)
		grim.moveKeys.a = false;
	} else if (e.keyCode === 68) {
		//(---D---)
		grim.moveKeys.d = false;
		//Sets Previous Direction Again for Drawing Purposes
		grim.prevDir = 'right';
	} else if (e.keyCode === 16) {
		//(---Shift---)
		grim.dash();
	}
});
//Listen For Window Resize
window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});
//Draw Function
function draw() {
	ctx.imageSmoothingEnabled = false;
	ctx.fillStyle = '#910909';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	grim.draw();
}
//Start Function
function start() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	console.log('##########');
	console.log('GRIM-SLEEP');
	console.log('##########');
}

//Main Function
setInterval(() => {
	grim.update();

	draw();
}, 50);