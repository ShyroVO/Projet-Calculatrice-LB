let affichage = document.getElementById("affichage");
let buttons = document.getElementsByTagName('button');

for(let button of buttons) {
    button.addEventListener('click', function () {

        switch (button.id) {
            case 'reset':
                affichage.innerHTML = " ";
                break;

            case 'egal':
                let result = affichage.innerHTML;
                affichage.innerHTML = eval(result);
                break;

            case 'copy':
                let resultCopy = affichage.innerHTML;
                navigator.clipboard.writeText(resultCopy);
                break;

            default:
                affichage.innerHTML += button.innerHTML;

        }
    });
}