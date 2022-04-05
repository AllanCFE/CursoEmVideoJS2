function calcular () {
    var number = document.getElementById('tn').value
    var res = document.getElementById('res')

    if(number == "") alert("Digite um valor para iniciar o cálculo!")
    else {
        res.innerHTML = ""
        for(let i = 1 ; i <= 10 ; i++){
            number = Number(number)
            res.innerHTML += `${number} x ${i} = ${number*i}<br>`
        }
    }
}