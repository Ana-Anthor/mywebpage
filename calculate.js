
function display(val) {
    document.getElementById("result").value += val;
}

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    if (typeof y == "undefined") {
        document.getElementById("result").value = "";
    } else {
        document.getElementById("result").value = y;
    }

}

function clr() {
    document.getElementById("result").value = "";
}

function pi() {
    document.getElementById("result").value = Math.PI;
}

function e() {
    document.getElementById("result").value = Math.E;
}