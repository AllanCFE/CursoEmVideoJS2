function calcular () {
    var number = document.getElementById('tn').value
    var res = document.getElementById('res')

    if(number == "") alert("Digite um valor para iniciar o cálculo!")
    else {
        res.innerHTML = ""
        number = Number(number)
        for(let i = 1 ; i <= 10 ; i++){
            let item = document.createElement('option')
            item.innerHTML= `${number} x ${i} = ${number*i}`
            res.appendChild(item)
        }
    }
}