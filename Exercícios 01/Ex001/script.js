function carregar() {
    var horario = document.getElementById('horario')
    var foto = document.querySelector('img')
    var data = new Date()
    var hora = data.getHours()
    horario.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora <12) {
        foto.src = "foto_manha.png"
        document.body.style.background = "#fbae8e"
    } else if(hora >=12 && hora < 17) {
        foto.src = "foto_tarde.png"
        document.body.style.background = "#afb8c2"
    } else {
        foto.src = "foto_noite.png"
        document.body.style.background = "#fd9255"
    }
}