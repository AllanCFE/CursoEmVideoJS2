function contar (){
    var inicio = Number(document.querySelector('#txtinicio').value)
    var fim = Number(document.querySelector('#txtfim').value)
    var passo = Number(document.querySelector('#txtpasso').value)

    var res = document.querySelector('#res')

    if(inicio == "" || fim == "" || passo == "") alert('Preencha todos os campos')
    else if(passo == 0 || passo < 0 || inicio == fim || Math.abs(fim - inicio) < Math.abs(passo)) alert("Configuração inválida")
    else{
        res.innerHTML = ""
        console.log('s')
        res.innerHTML += inicio
        if(inicio < fim){
            for(let i = inicio+passo ; i <= fim ; i+= passo){
                res.innerHTML += " \u{1F449} " + i
            }
        } else {
            for(let i = inicio-passo ; i >= fim ; i-= passo){
                res.innerHTML += " \u{1F449} " + i
            }
        }
        res.innerHTML += " \u{1F449} \u{1F3C1}"
    }
}