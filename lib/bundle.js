(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"../model/network.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Arc;
/**
 * Created by rawn_sups on 2016-07-02.
 */

function Arc(node1, node2) {}

function Arc(node1, node2) {}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Network;

var _node = require('./node.js');

var _node2 = _interopRequireDefault(_node);

var _arc = require('./arc.js');

var _arc2 = _interopRequireDefault(_arc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by rawn_sups on 2016-07-02.
 */
function Network() {

    var numNodes = 0; // Total node count
    var numArcs = 0; // Total arc count
    var nodes = []; // Array of Node objects
    var arcs = []; // Array of Arc Objects
    //var directed = document.getElementsByName('input')[0].getAttribute('value') == 'directed';

    function newNode() {
        var node = new _node2.default(numNodes); // Create new Node object
        nodes.push(node); // Add Node Object to Array
        numNodes++; // Add to the Total Node Count
    }

    function connect(node1, node2) {
        var arc = new _arc2.default(node1, node2);
        arcs.push(arc);
        numArcs++;
    }
}
},{"./arc.js":2,"./node.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Node;
/**
 * Created by rawn_sups on 2016-07-02.
 */

function Node() {}

function Node(div) {

    // Node fields
    var id = div.id;
    var numAdjacent = 0;
    var adjacent = [];
    var supplyField = "Supply (+) or demand (-): <input type='number' id='supply' value='0'>";
    var deleteButton = "<button id ='delete' onclick='deleteNode(" + id + ")'>Delete Node</button>";

    // svg
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", 200);
    svg.setAttributeNS(null, "height", 100);

    var e = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    e.setAttributeNS(null, 'cx', '100');
    e.setAttributeNS(null, 'cy', '50');
    e.setAttributeNS(null, 'rx', '100');
    e.setAttributeNS(null, 'ry', '50');
    e.setAttributeNS(null, 'style', 'fill:hotpink;stroke:hotpink;stroke-width:2');
    svg.appendChild(e);

    // setters
    div.appendChild(svg);
    div.innerHTML = supplyField + deleteButton;

    return div;
}
},{}]},{},[1]);

function addArc() {}
console.log("this", this);
console.log("this === window", this === window);
console.log("this === document", this === document);

console.log("addArc", addArc);
console.log("this.addArc", this.addArc);
