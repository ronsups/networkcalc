import Network from '../model/network.js'


// Network Model
const networkModel = new Network();
const networkView = document.getElementById("network-svg");

function addNode() {
    message("Node Added!");
    var node = networkModel.newNode() // Add Node to Model
    networkView.appendChild(node) // Add Node to View
}

function addArc() {

}

function bulkAddNodes() {

}

function bulkAddArcs() {

}

function importNetwork () {

}

function saveNetwork () {

}



//Message Box Functions
function message(string){
    document.getElementById("network-svg").innerHTML = string;
};

function clrMessage() {
    document.getElementById("network-svg").innerHTML = "";
}

