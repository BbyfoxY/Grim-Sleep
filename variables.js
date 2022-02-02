//---IMPORTS---
import { Player } from "./constructors.js";
import { Camera } from "./constructors.js";
//---Image Variables---
var grimRight0 = new Image();
grimRight0.src = 'src/grimRight0.png';
var grimLeft0 = new Image();
grimLeft0.src = 'src/grimLeft0.png';

//---Variables---
var gravity = 25;
var level = 0;
var tileSize = 120;
var grim = new Player();
//---EXPORTS---
export { grimRight0 };
export { grimLeft0 };
export { gravity };
export { level };
export { tileSize };
export { grim };