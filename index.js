let rs = document.getElementById("result")
function add() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    rs.innerText = `addition of ${n1} + ${n2} = ${n1 + n2}`
}
function min() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    rs.innerText = `addition of ${n1} - ${n2} = ${n1 - n2}`
}
function Multiply() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    rs.innerText = `addition of ${n1} * ${n2} = ${n1 * n2}`
}
function Divide() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    rs.innerText = `addition of ${n1} / ${n2} = ${n1 / n2}`
}
