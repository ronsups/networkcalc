"use strict";

var _network = require("../model/network.js");

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Network Model
var networkModel = new _network2.default();
var networkView = document.getElementById("network-svg");

function addNode() {
    message("Node Added!");
    var node = networkModel.newNode(); // Add Node to Model
    networkView.appendChild(node); // Add Node to View
}

function addArc() {}

function bulkAddNodes() {}

function bulkAddArcs() {}

function importNetwork() {}

function saveNetwork() {}

//Message Box Functions
function message(string) {
    document.getElementById("network-svg").innerHTML = string;
};

function clrMessage() {
    document.getElementById("network-svg").innerHTML = "";
}