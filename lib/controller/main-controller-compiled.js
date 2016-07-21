"use strict";

var _network = require("../model/network.js");

var _network2 = _interopRequireDefault(_network);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

// Network Model
var networkModel = new _network2.default();
var networkView = document.getElementById("network-svg");

function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

    return raw ? parseInt(raw[2], 10) : false;
}

// Add Node to network-svg
function addNode() {
    clrMessage();
    var node = networkModel.newNode(); // Add Node to Model
    networkView.appendChild(node); // Add Node to View
}

function deleteNode(id) {}

//Message Box Functions
function message(string) {
    document.getElementById("network-svg").innerHTML = string;
};

function clrMessage() {
    document.getElementById("network-svg").innerHTML = "";
};

//# sourceMappingURL=main-controller-compiled.js.map