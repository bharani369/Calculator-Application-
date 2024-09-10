const display = document.getElementById("display");

function add(input) {
    display.value += input;

}
function not() {
    display.value = ""
}
function equal() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}