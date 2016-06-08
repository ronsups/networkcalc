var createNode = function (event) {
	console.log("Node created!");
};

var createNodeButton = document.getElementById('create-node');

var elem = document.getElementsByTagName('button');
console.log(elem);
console.log(elem.length);
console.log(elem[0]);
for (el in elem) {
	console.log(el);
}
//createNodeButton.addEventListener("click",createNode);