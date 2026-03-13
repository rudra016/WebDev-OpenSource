
var rows = 3;
var columns = 3;

var cT;
var oT;

var turns = 0;

var imgOrder = ["3", "8", "9", "1", "2", "7", "5", "4", "6"];

window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            tile.addEventListener("dragstart", dragStart);  
            tile.addEventListener("dragover", dragOver);    
            tile.addEventListener("dragenter", dragEnter);  
            tile.addEventListener("dragleave", dragLeave);  
            tile.addEventListener("drop", dragDrop);        
            tile.addEventListener("dragend", dragEnd);      

            document.getElementById("board").append(tile);

        }
    }
}

function dragStart() {
    cT = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    oT = this;
}

function dragEnd() {
    if (!oT.src.includes("3.jpg")) {
        return;
    }

    let cC = cT.id.split("-");
    let r = parseInt(cC[0]);
    let c = parseInt(cC[1]);

    let oC = oT.id.split("-");
    let r2 = parseInt(oC[0]);
    let c2 = parseInt(oC[1]);

    let L = r == r2 && c2 == c - 1;
    let R = r == r2 && c2 == c + 1;

    let U = c == c2 && r2 == r - 1;
    let D = c == c2 && r2 == r + 1;

    let Adj = L || R || U || D;

    if (Adj) {
        let cI = cT.src;
        let oI = oT.src;

        cT.src = oI;
        oT.src = cI;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }


}