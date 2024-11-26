//draggable elements
dragElement(document.getElementById("info"));
dragElement(document.getElementById("links"));
dragElement(document.getElementById("image"));
dragElement(document.getElementById("video"));
dragElement(document.getElementById("browser"));


// code for dragging windows/elements (from w3schools)
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt.querySelector('.title-bar')) {
        // if present, the header is where you move the DIV from:
        elmnt.querySelector('.title-bar').onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        if (elmnt.firstElementChild.nodeName == "IMG") {
            e.preventDefault();
        }
        elmnt.parentElement.appendChild(elmnt);
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

}

// js clock
function clock() {
    const d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var a = "";
    h = modHours(h)
    m = modTime(m)

    // check AM or PM
    if (h > 12) {
        a = " PM";
    } else {
        a = " AM";
    }

    // set time
    document.getElementById("clocktxt").innerHTML = h + ": " + m + a;
    
    // update
    setTimeout(clock, 1000);

    // add 0 to beginning if under 10
    function modTime(t) {
        if (t < 10) {
            t = "0" + t;
        }
        return t;
    }

    // sets hours to 12hr clock
    function modHours(ht) {
        if (ht > 12) {
            ht = ht - 12;
        }
        return modTime(ht);
    }
    
}