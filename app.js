let affichage = document.getElementById("affichage");

document.getElementById("reset").addEventListener("click", function () {
    affichage.innerHTML = [];
});

document.getElementById("0").addEventListener("click", function () {
    affichage.innerHTML += 0;
});

document.getElementById("1").addEventListener("click", function () {
    affichage.innerHTML += 1;
});

document.getElementById("2").addEventListener("click", function () {
    affichage.innerHTML += 2;
});

document.getElementById("3").addEventListener("click", function () {
    affichage.innerHTML += 3;
});

document.getElementById("4").addEventListener("click", function () {
    affichage.innerHTML += 4;
});

document.getElementById("5").addEventListener("click", function () {
    affichage.innerHTML += 5;
});

document.getElementById("6").addEventListener("click", function () {
    affichage.innerHTML += 6;
});

document.getElementById("7").addEventListener("click", function () {
    affichage.innerHTML += 7;
});

document.getElementById("8").addEventListener("click", function () {
    affichage.innerHTML += 8;
});

document.getElementById("9").addEventListener("click", function () {
    affichage.innerHTML += 9;
});

document.getElementById("4").addEventListener("click", function () {
    affichage.innerHTML += 4;
});

document.getElementById("parantheseG").addEventListener("click", function () {
    affichage.innerHTML += "(";
});

document.getElementById("parantheseD").addEventListener("click", function () {
    affichage.innerHTML += ")";
});

document.getElementById("plus").addEventListener("click", function () {
    affichage.innerHTML += "+";
});

document.getElementById("moins").addEventListener("click", function () {
    affichage.innerHTML += "-";
});

document.getElementById("multiplication").addEventListener("click", function () {
    affichage.innerHTML += "*";
});

document.getElementById("division").addEventListener("click", function () {
    affichage.innerHTML += "%";
});

let result = affichage.toString();

// Effectuer le calcul:
document.getElementById("egal").addEventListener("click", function () {
    console.log(result);
    affichage.innerHTML = eval(result);
});

