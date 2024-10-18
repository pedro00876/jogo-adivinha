let numberToFind = 0;
let attempts = 0;
let maxAttempts = 5;

const refresh = () => {
    attempts = 0;
    numberToFind = parseInt(Math.random() * 100) + 1;
    maxAttempts = 5;

    console.log(numberToFind)
}

const verifyNumber = () => {
    let bet = document.querySelector('#bet').value;

    if (bet > 100 || bet < 1) {
        alert('Aposta inválida')
        return;
    }
    if (maxAttempts > 0) {
        if (bet > numberToFind) {
            attempts++;
            maxAttempts--;
            alert('O número para ser encointrado é MENOR!!')

        }
        else if (bet < numberToFind) {
            maxAttempts--;
            attempts++
            alert('O número a ser encontrado é MAIOR!!');
        }
        else {
            alert('Você acertou!! com ' + (maxAttempts - 4) + 'tentativa(s)')
            refresh()
            return

        }
    }

    if (maxAttempts === 0) {
        alert('Você perdeu! A quantidade de chances foi excedida.')
        refresh();

    }
}
refresh();