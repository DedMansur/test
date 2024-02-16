var minNum = +prompt('Введите минимальное число')
var maxNum = +prompt('Введите максимальное число')
for (let i = 0; minNum < maxNum; i++) {
    let num1 = random(minNum, maxNum)
    let num2 = random(minNum, maxNum)
    let primer = +prompt(num1 + ' + ' + num2 + ' = ?')
    let otver = +alert('Ваш ответ: ' + (primer) + ', Правильный ответ: ' + (num1 + num2))
    let primer2 = +prompt(num1 + ' - ' + num2 + ' = ?')
    let otver2 = +alert('Ваш ответ: ' + (primer2) + ', Правильный ответ: ' + (num1 - num2))
    let primer3 = +prompt(num1 + ' * ' + num2 + ' = ?')
    let otver3 = +alert('Ваш ответ: ' + (primer3) + ', Правильный ответ: ' + (num1 * num2))
    let primer4 = +prompt(num2 + ' / ' + num1 + ' = ?')
    let otver4 = +alert('Ваш ответ: ' + (primer4) + ', Правильный ответ: ' + (num1 / num2))


}

function random(minNum, maxNum) {

    return Math.floor(Math.random() * (maxNum + 1 - minNum) + minNum)
}
random()
