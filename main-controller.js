// Model
var numNodes = 0
var numArcs = 0

//Node Class
function Node(mouse_x, mouse_y) {



    var node = document.createElementNS("http://www.w3.org/2000/svg","ellipse")
    node.setAttribute("cx", String(mouse_x))
    node.setAttribute("cy", String(mouse_y))
    node.setAttribute("rx", "50px")
    node.setAttribute("ry", "50px")
    node.setAttribute("class","node")
    node.setAttribute("onclick","deleteNode(event)")
    node.setAttribute("nodeID", String(++numNodes))

    return node

}


// Add Node Button
function addNodeEventListener() {
    message("Click on the screen to add a node!")

    var networkEvents = document.getElementById("network-events")
    networkEvents.setAttribute("onclick","addNode(event)")

    var addNodeButton = document.getElementById("addNodeButton")
    addNodeButton.innerHTML = "stop adding nodes"
    addNodeButton.setAttribute("onclick","removeNodeEventListener()")

}

// Cancel Button
function removeNodeEventListener() {
    clrMessage()

    var networkEvents = document.getElementById("network-events")
    networkEvents.setAttribute("onclick","")

    var cancelButton = document.getElementById("addNodeButton")
    cancelButton.innerHTML = "add nodes"
    cancelButton.setAttribute("onclick","addNodeEventListener()")
}


function addNode(event) {

    clrMessage()

    var newNode = new Node(event.clientX, event.clientY)
    var networkView = document.getElementById("network-svg")
    networkView.appendChild(newNode)
    console.log("Added Node at: " + String(event.clientX) + ", " + String(event.clientY))

}

function deleteNode(event) {

    var target = event.target
    var nodeID = target.getAttribute("nodeID")
    var networkView = document.getElementById("network-svg")
    var nodeList = networkView.children
    console.log("nodeList: ")
    console.log(nodeList)


    for (node in nodeList) {
        console.log("node: ")
        console.log(node)
        if () {
        }
    }

    event.stopPropagation()




}



function clearScreen() {

    var networkView = document.getElementById("network-svg")
    var nodeList = networkView.querySelectorAll(".node")
    nodeList.forEach(function(node){networkView.removeChild(node)})
}



//Message Box Functions
function message(string){
    document.getElementById("message-box").innerHTML = string
}

function clrMessage() {
    document.getElementById("message-box").innerHTML = ""
}

