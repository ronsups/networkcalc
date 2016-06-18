//Canvas
var canvas = document.getElementById('network-canvas');
var ctx = canvas.getContext("2d");



//Create Node
function createNode () {
	//message("Click to create a node!");
	console.log("meep");
	canvas.onclick = newNode()

	//When you click somewhere, the mouse coordinates are read, and they become the center of a node
};

function newNode(){
	console.log("Node added!");
	//canvas.onclick = null;
}

//Edit Nodes
var editNodes = function (event) {
	console.log("Editing nodes!");
};

//Create Arc
var createArc = function (event) {
	console.log("Arc created!");
};

//Delete Arc
var deleteArc = function (event){
	console.log("Arc deleted!");
};

//Message Box Functions
function message(string){
	document.getElementById("message-box").innerHTML = string;
}

function clrMessage(){
	document.getElementById("message-box").innerHTML = "";
}



