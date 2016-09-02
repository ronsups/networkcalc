'use strict';

// Model
var numNodes = 0
var numArcs = 0

//Node Class
var node = function (event) {

    // Fields
    node.nodeID = numNodes + 1
    node.x = event.clientX
    node.y = event.clientY
    node.view = function () {
        console.log("viewed")
        var nodeView = document.createElementNS("http://www.w3.org/2000/svg","ellipse")
        nodeView.setAttribute("cx", String(node.x))
        nodeView.setAttribute("cy", String(node.y))
        nodeView.setAttribute("rx", "50px")
        nodeView.setAttribute("ry", "50px")
        nodeView.setAttribute("class","node")
        nodeView.setAttribute("onclick","deleteNode(event)")
        nodeView.setAttribute("nodeID", String(node.nodeID))
        var networkView = document.getElementById("network-svg")
        networkView.appendChild(nodeView)
    }
    node.view()
}

// Add Node Button - click on network-svg to add nodes
function addNodeEventListener() {
    message("Click on the screen to add a node!")

    var networkEvents = document.getElementById("network-events")
    networkEvents.setAttribute("onclick","new node(event)")

    var addNodeButton = document.getElementById("addNodeButton")
    addNodeButton.innerHTML = "stop adding nodes"
    addNodeButton.setAttribute("onclick","removeNodeEventListener()")

}

// SVG element (network "canvas") - must be on 

// Cancel Button
function removeNodeEventListener() {
    clrMessage()

    var networkEvents = document.getElementById("network-events")
    networkEvents.setAttribute("onclick","")

    var cancelButton = document.getElementById("addNodeButton")
    cancelButton.innerHTML = "add nodes"
    cancelButton.setAttribute("onclick","addNodeEventListener()")
}


function deleteNode(event) {

    //console.log(event.bubbles)
    event.stopPropagation()

    var target = event.target || window.event.target
    var nodeID = target.getAttribute("nodeID")
    var networkView = document.getElementById("network-svg")
    var nodes = document.querySelectorAll(".node")
    console.log(nodes)


    for (var node in nodes) {

        node = nodes[node]
        try {
            var id = node.getAttribute("nodeID")
            if (id == nodeID) {
                console.log("delete node with ID " + String(nodeID))
                networkView.removeChild(target)
            }
        } catch (Error) {
            //console.log(node)
        }
    }

}



function clearScreen() {
    var networkView = document.getElementById("network-svg")
    var nodes = networkView.querySelectorAll(".node")
    nodes.forEach(function(node){networkView.removeChild(node)})
}



//Message Box Functions
function message(string){
    document.getElementById("message-box").innerHTML = string
}

function clrMessage() {
    document.getElementById("message-box").innerHTML = ""
}