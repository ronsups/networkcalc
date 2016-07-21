/**
 * Created by rawn_sups on 2016-07-02.
 */
import Node from './node.js';
import Arc from './arc.js';

export default function Network() {

    var numNodes = 0;  // Total node count
    var numArcs = 0;  // Total arc count
    var nodes = [];  // Array of Node objects
    var arcs = []; // Array of Arc Objects
    //var directed = document.getElementsByName('input')[0].getAttribute('value') == 'directed';

    function newNode() {
        var node = new Node(numNodes);  // Create new Node object
        nodes.push(node);  // Add Node Object to Array
        numNodes++;  // Add to the Total Node Count
    }

    function connect(node1,node2) {
        var arc = new Arc(node1,node2);
        arcs.push(arc);
        numArcs++;
    }
}


