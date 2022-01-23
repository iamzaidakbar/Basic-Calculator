const btnNumbers = document.querySelectorAll('.btn-num');
const btnSymbols = document.querySelectorAll('.btn-symb')
const btnDel = document.querySelector('#btn-del')
const btnReset = document.querySelector('#btn-reset')
const btnCalculate = document.querySelector('#calculate')

// THEME 
const toggleRadio = document.querySelectorAll('.toggle-radio')
const theme1 = document.querySelector('#theme1');
const theme2 = document.querySelector('#theme2');
const theme3 = document.querySelector('#theme3');

// display

const historyDisplay = document.querySelector('#display-second')
const mainDisplay = document.querySelector('#display')


// NUMBER BUTTONS
for (btns of btnNumbers) {
    btns.addEventListener('click', (e) => {
        if(mainDisplay.innerText === '' && e.target.innerText in ['0']) return;
        mainDisplay.innerText += e.target.innerText;
    })
}
// SYMBOL BUTTONS
for (btns of btnSymbols) {
    btns.addEventListener('click', (e) => {

        const value = mainDisplay.innerText += e.target.innerText;

        function checkIfDuplicateExists(value) {
            return new Set(value).size !== value.length
        }
        if(checkIfDuplicateExists(value) === true){
            console.log('true');
            mainDisplay.innerText = mainDisplay.innerText.substr(0, mainDisplay.innerText.length - 1)
        }

    });
}

// RESET FUNCTION

btnReset.addEventListener('click', (e) => {
    mainDisplay.innerText = '';
    historyDisplay.innerText = ''
})

// DEL FUNCTION

btnDel.addEventListener('click', (e) => {
    mainDisplay.innerText = mainDisplay.innerText.substr(0, mainDisplay.innerText.length - 1);
    if(mainDisplay.innerText === ''){
        historyDisplay.innerText = historyDisplay.innerText.substr(0, historyDisplay.innerText.length - 1);
    }
})

// CALCULATIONS

btnCalculate.addEventListener('click', (e) => {
    historyDisplay.innerText = `${mainDisplay.innerText} = ${eval(mainDisplay.innerText)}`;
    const value = eval(mainDisplay.innerText);
    mainDisplay.innerText = '';
})

// --------THEME TOGGLER------------------//
window.onload = (e)=>{
    const bodyElement = document.querySelector('body');
    bodyElement.className = 'theme1';
}

for(toggler of toggleRadio){
    toggler.addEventListener('change',(e)=>{
        const bodyElement = document.querySelector('body');
        if(toggleRadio[0].checked){
             bodyElement.className = 'theme1';
        } else if(toggleRadio[1].checked){
            bodyElement.className = 'theme2';
        }else if(toggleRadio[2].checked){
            bodyElement.className = 'theme3'
        }
    })
}
