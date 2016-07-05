/**
 * Created by rawn_sups on 2016-07-02.
 */


function Node(div) {

    // Node fields
    id = div.id
    numAdjacent = 0;
    adjacent = [];

    // supply or demand form
    supplyField = "Supply (+) or demand (-): <input type='number' id='supply' value='0'>"

    // delete button
    deleteButton = "<button id ='delete' onclick='deleteNode(" + id + ")'>Delete Node</button>"

    // svg
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS (null, "width", 200);
    svg.setAttributeNS (null, "height", 100);

    var e = document.createElementNS ("http://www.w3.org/2000/svg", "ellipse");
    e.setAttributeNS (null, 'cx', '100');
    e.setAttributeNS (null, 'cy', '50');
    e.setAttributeNS (null, 'rx', '100');
    e.setAttributeNS (null, 'ry', '50');
    e.setAttributeNS (null, 'style', 'fill:hotpink;stroke:hotpink;stroke-width:2');
    svg.appendChild (e);

    // setters
    div.appendChild(svg);
    div.innerHTML = supplyField + deleteButton;



    return div


}