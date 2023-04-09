/*

CASE SENSITIVE

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por Seletor: querySelector()
*/
let nomeBOK=false
let emailBOK=false
let assuntoBOK=false

let mapa= document.querySelector('#mapa')



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
        nomeBOK=true

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
        emailBOK=true

    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >100 ){
    txtAssunto.innerHTML = 'Utilize até 100 caracteres.'
    txtAssunto.style.color ='#f00'
    txtAssunto.style.display="block"
    
    }else{
        txtAssunto.style.display = 'none'
        assuntoBOK=true
} 
}

function enviar(){
    if(nomeBOK==true && emailBOK==true && assuntoBOK== true){

    alert('formulário Enviado com Sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar!')
    }

}

function mapaZoom(){
    mapa.style.width='100%'
}

function mapaNormal(){
    mapa.style.width='80%'
}