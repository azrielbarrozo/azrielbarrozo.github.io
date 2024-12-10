//draggable elements
dragElement(document.getElementById("info"));
dragElement(document.getElementById("links"));
dragElement(document.getElementById("browser"));
dragElement(document.getElementById("notepad"));
dragElement(document.getElementById("media"));
dragElement(document.getElementById("image"));

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

function startup() {
    setTimeout(loading, 1000);
    clock();
}

function loading() {
    document.getElementById("loading").style.display = "none";
}

// js clock
function clock() {
    const d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var a = "";

    // check AM or PM
    if (h >= 12) {
        a = " PM";
    } else {
        a = " AM";
    }

    h = modHours(h)
    m = modTime(m)

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

// hide and unhide element
function toggleElement(elid) {
    var el = document.getElementById(elid);
    if (el.style.display == "none") {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }
}

function unhideElement(elid) {
    var el = document.getElementById(elid);
    el.style.display = "block";
    el.parentElement.appendChild(el);
}

function hideElement(elid) {
    var el = document.getElementById(elid);
    el.style.display = "none";
}

// webpages
var linksList = [
    ["error", "./error.html"],
    ["www.titorfans.net", "./titorfans.html"],
    ["www.keystone.live", "./key.html"]
]

function visitSite() {
    var page = document.getElementById("browser-content");
    var linkURL = document.getElementById("browser-input").value;
    var link;

    for(let i = 0; i < linksList.length; i++) {
        link = checkLink(linksList[i]);
        if (link) {
            i = 0;
            page.src=link;
            return 0;
        }
    }
    page.src="./error.html";

    function checkLink(value) {
        if (value[0] == linkURL){
            return value[1];
        } else {
            return false;
        }
    }

}

