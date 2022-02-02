//---IMPORTS---
import { grimRight0 } from "./variables.js";
import { grimLeft0 } from "./variables.js";
import { gravity } from "./variables.js";
import { level } from "./variables.js";
import { tileSize } from "./variables.js";
import { grim } from "./variables.js";
import { map } from "./map.js";
//Get Canvas and Context(CTX)
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
//---Constructors---
//Player Constructor
function Player() {
	this.x = 1;
	this.y = 1;
	this.width = tileSize;
	this.height = tileSize;
	this.speed = 15;
	this.velY = 0;
	this.prevDir = 'right';
	this.canJump = true;
	this.moveKeys = {
		a: false,
		d: false
	};

	this.draw = function() {
		//Draw Grim By Checking the Previous Direction
		if (this.prevDir === 'right') {
			ctx.drawImage(grimRight0, this.x, this.y, this.width, this.height);
		} else if (this.prevDir === 'left') {
			 ctx.drawImage(grimLeft0, this.x, this.y, this.width, this.height);
		}
	}

	this.update = function() {
		//Move Left
		if (this.moveKeys.a === true) {
			this.x -= this.speed;
			//Sets Previous Direction Again for Drawing Purposes
			this.prevDir = 'left';
		}
		//Move Right
		if (this.moveKeys.d === true) {
			this.x += this.speed;
			//Sets Previous Direction Again for Drawing Purposes
			this.prevDir = 'right';
		}
		//Apply Gravity
		this.velY += gravity;
		this.y += this.velY;
		//Stay On Floor / Above Ground
		if (this.y + this.height > canvas.height) {
			this.y = canvas.height - this.height;
			this.canJump = true;
		}
	}

	//Dashing Mechanic
	this.dash = function() {
		if (this.prevDir === 'left') {
			this.x -= this.speed * 15;
		} else if (this.prevDir === 'right') {
			this.x += this.speed * 15;
		}
	}

	//Check For Collision
	this.collide = function() {
		var row, col;

		var left = this.x - this.width / 2;
		var right = this.x + this.width / 2 -1;
		var top = this.y - this.height / 2;
		var bottom = this.y + this.height / 2 -1;

		var collision = map.isSolidAtXY(left, top) || map.isSolidAtXY(right, top) || map.isSolidAtXY(right, bottom) || map.isSolidAtXY(left, bottom);
		if (!collision) {
			return;
		}
	}
}
//Camera Constructor
function Camera(width, height) {
	this.x = 0;
	this.y = 0;
	this.width = width;
	this.height = height;
	this.maxX = map.columns * tileSize - width;
	this.maxY = map.rows * tileSize - height;

	this.follow = function(sprite) {
		this.following = sprite;
		sprite.screenX = 0;
		sprite.screenY = 0;
	}

	this.update = function() {
		this.following.screenX = this.width / 2;
		this.following.screenY = this.height / 2;

		this.x = this.following.x - this.width / 2;
		this.y = this.following.y - this.height / 2;

		this.x = Math.max(0, Math.min(this.x, this.maxX));
		this.y = Math.max(0, Math.min(this.y, this.maxY));

		if (this.following.x < this.width / 2 || this.following.x > this.maxX + this.width / 2) {
			this.following.screenX = this.following.x - this.x;
		}

		if (this.following.y < this.height / 2 || this.following.y > this.maxY + this.height / 2) {
			this.following.screenY = this.following.y - this.y;
		}
	}
}
//---EXPORTS---
export { Player };
export { Camera };