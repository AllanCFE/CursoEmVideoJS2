function contar (){
    var inicio = document.querySelector('#txtinicio')
    var fim = document.querySelector('#txtfim')
    var passo = Number(document.querySelector('#txtpasso').value)

    var res = document.querySelector('#res')

    if(inicio.value == "" || fim.value == "" || passo.value == "") alert('Preencha todos os campos')
    else if(passo.value == 0 || passo < 0 || inicio.value == fim.value || Math.abs(fim.value - inicio.value) < Math.abs(passo.value)) alert("Configuração inválida")
    else{
        var res_string = inicio.value
        if(inicio.value < fim.value){
            for(let i = Number(inicio.value)+Number(passo) ; i <= Number(fim.value) ; i+= passo){
                res_string += ", " + i
            }
        } else {
            for(let i = Number(inicio.value)+Number(passo) ; i >= Number(fim.value) ; i-= passo){
                res_string += ", " + i
            }
        }
        res_string += " | FIM!"
        res.innerHTML = res_string
    }
}