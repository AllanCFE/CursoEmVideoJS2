var aNumber = []

function inserir () {
    //Creating the reference to the input number
    var nInput = document.getElementById('nInput')

    //Checking ig it is a valid number
    if (nInput.value < 1 || nInput.value > 100) alert("Número inválido!")
    else if (aNumber.indexOf(nInput.value) != -1) alert("Número já inserido!")
    else{
        //Add number to the list
        aNumber.push(Number(nInput.value))

        //Creating the reference to the list of numbers (user interface)
        let nList = document.getElementById('nlist')
        
        //Add number to interface list
        let item = document.createElement('option')
        item.innerHTML = `Valor ${nInput.value} adicionado`
        nList.appendChild(item)

        //Reset the input space
        nInput.value = ''
        nInput.focus()
    }
}

function calcular () {
    //Creating and reset the reference to the answer area
    var res = document.getElementById('res')
    res.innerHTML = ""

    //Checking if there is at least one number in the list
    if (aNumber.length < 1) alert("Por favor, insira algum número!")
    else{
        //Sorting the list of numbers
        aNumber = aNumber.sort(function(a,b){
                return a-b
            })

        addParagraph(res, `Ao todo, ${aNumber.length} números foram cadastrados`)
        addParagraph(res, `O maior valor informado foi: ${aNumber[aNumber.length-1]}`)
        addParagraph(res, `O menor valor informado foi: ${aNumber[0]}`)

        //Calculating the sum of the list
        let sum = 0
        sum = aNumber.reduce(
            (previous, current) => previous + current,
            sum
        )
        addParagraph(res, `Somando todos os valores temos: ${sum}`)
        addParagraph(res, `A média dos valores digitados é: ${(sum/aNumber.length).toFixed(2)}`)
    }
}

function addParagraph (array, text) {
    let item = document.createElement('p')
    item.innerHTML = text
    array.appendChild(item)
}