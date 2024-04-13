function add() {
    let num1;
    let num2;
    let sum;
    num1 = parseInt(document.getElementById("first").value);
    num2 = parseInt(document.getElementById("second").value);
    let select = document.getElementById("tags").value;

    switch (select) {
        case "add":
        sum = num1 + num2;
        break;

        case "sub":
        sum = num1 - num2;
        break;

        case "div":
        sum = num1 / num2;
        break;

        case "mult":
        sum = num1 * num2;
        break;
    }
    document.getElementById("ans").value = sum;
}