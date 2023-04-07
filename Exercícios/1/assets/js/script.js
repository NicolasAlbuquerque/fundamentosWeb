// criação de variáveis
//três tipps


//escopo global e pode ser redefinido.- n é mais indicado
var nome1 = 'Nicolas'

var idade= 36

// escopo local- e pode ser redefinido 
let nome2 ='Elisabett' 


//escopo local e não pode ser redefinido.
const nome3 = 'Ariane'

// capturando elementos da DOM
const nome= window.document.getElementById('nome')
//window.document.getElementsByTagName('input')


//criando função com o js

function lerNome() {
    const txtNome= document.querySelector('#txtNome')
  // console.log(nome.value.lenght)
    if(nome.value.length <= 3){
        console.log('Nome inválido')
        txtNome.innerHTML='<small>Nome inválido</small>'

    }else{
        console.log('Nome válido')
        txtNome.innerHTML='<small>Nome valido</small>'
}
}



console.log(nome+idade)
