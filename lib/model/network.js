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