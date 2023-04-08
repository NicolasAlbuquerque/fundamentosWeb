/*

CASE SENSITIVE

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por Seletor: querySelector()
*/


let nome = window.document.getElementById("nome")

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')


nome.style.width = '100%'

email.style.width='100%'


function validaNome(){
    let txt= document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML='nome inválido'
        txt.style.color='#f00'
    
    }else{
        txt.innerHTML='nome valido'
        txt.style.color="#0f0"
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@' && '.') == -1 ){
        txtEmail.innerHTML="E-mail Inválido"
        txtEmail.style.color = '#f00'
    }else{
        txtEmail.innerHTML="E-mail Válido."
        txtEmail.style.color='#0f0'

    }

}