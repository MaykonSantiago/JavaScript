function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')   
    
    //Verifica se o campo do ano está vazio ou se o ano que foi colocado é maior que o ano presente
    if(fano.value.length == 0 || Number(fano.value) > ano) {
     window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    /*Depois de verificar o campo do ano verifica qual das duas opçoes foi selecionada e informa qual
    imagem vai aparecer, de acordo com a idade e o sexo, na pagina*/
    if(fsex[0].checked) {
        genero = 'Homem'
        if(idade >= 0 && idade <10) {
            //CRIANÇA
            img.setAttribute('src', 'fotos/menino_bebe.jpg')
        } else if(idade < 21){
            // JOVEN
            img.setAttribute('src', 'fotos/homem_jovem.jpg')
        }else if(idade < 50){
            //ADULTO
            img.setAttribute('src', 'fotos/homem_adulto.jpg')
        }else{
            // IDOSO
            img.setAttribute('src', 'fotos/homem_idoso.jpg')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if(idade >= 0 && idade <10) {
            //CRIANÇA
            img.setAttribute('src', 'fotos/menina_bebe.jpg')
        } else if(idade < 21){
            // JOVEN
            img.setAttribute('src', 'fotos/mulher_jovem.jpg')
        }else if(idade < 50){
            //ADULTO
            img.setAttribute('src', 'fotos/mulher_adulta.jpg')
        }else{
            // IDOSO
            img.setAttribute('src', 'fotos/mulher_idosa.jpg')
        }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    //Coloca a imagem na página 
    res.appendChild(img)
    

 }

}