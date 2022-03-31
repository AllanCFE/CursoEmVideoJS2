function verificar(){
    //Ano atual
    var data = new Date()
    var ano = data.getFullYear()
    //Ano de nascimento do usuário
    var fano = document.getElementById('txtano')
    //Tag onde a resposta vai ser inserida
    var res = document.getElementById('res')
    //Criando tag onde a imagem de resposta vai ser inserida
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    //Verificando se já foi preenchido
    if(fano.value.length == 0 || fano.value > ano) alert(`[ERRO] Verifique os dados e tente novamente!`)
    else {
        //Verificando sexo
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        genero = fsex[0].checked ? "h" : "m"
        //Verificando idade e faixa etária
        var idade = ano - Number(fano.value)
        var etaria = ''

        if(idade < 10) etaria = "bebe"
        else if (idade < 22) etaria = "jovem"
        else if (idade < 60) etaria = "adulte"
        else etaria = "idose"

        //Configurando a resposta
        img.setAttribute('src',`foto_${genero}${etaria}.png`)
        res.innerHTML=`<p>Você tem ${idade} anos</p>`
        res.appendChild(img)
    }
}