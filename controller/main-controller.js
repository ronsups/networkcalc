

// Network Model
var networkModel;

// Create Network (on load)
function createNetwork() {
    networkModel = new Network();
};

// Add Node to network-svg
function addNode() {
    var node = document.createElement("div");
    node.id = networkModel.numNodes++;
    node = new Node(node);
    networkModel.addNode(node);
    
    document.getElementById("network-svg").appendChild(node);
}

function deleteNode(id) {
    networkModel.numNodes--;
    var nodes = document.getElementsByTagName('div')
    for (var node in nodes) {
        if (node.id == id) {
            document.getElementById("network-svg").removeChild(node);
        }
    }
    
}



//Message Box Functions
function message(string){
    document.getElementById("message-box").innerHTML = string;
};

function clrMessage() {
    document.getElementById("message-box").innerHTML = "";
};




