let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if (buttonText == "x") {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'RM') {
            buttonText = '%';
            screenValue += buttonText;
            screen.value = screenValue;
        }else if (buttonText == 'c') {
            screenValue = '';
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screenValue = eval(screenValue);
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
