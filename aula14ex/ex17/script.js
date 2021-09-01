function gerar() {
    var numero = document.getElementById('numero')
    var res = document.getElementById('seltab')

    if (numero.value.length == 0) {
        window.alert('Por favor preencha todos os campos.')
    } else{
        var valor = Number(numero.value)       
        res.innerHTML = ""
        for(i = 0; i <= 10; i++) {  
            var item = document.createElement('option')

            item.text = `${valor} x ${i} = ${valor*i}`
            res.appendChild(item)
        }
    }
}