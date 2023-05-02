const botoesNavegacao = document.querySelectorAll('.button')
const botaoCriarConta= document.getElementById('criar-conta')
const botaoLogin = document.getElementById('login')
const botaoCardapio = document.getElementById('cardapio')
const imagemFolhaCima = document.getElementById('folha-cima')
const imagemFolhaBaixo = document.getElementById('folha-baixo')

botoesNavegacao.forEach((botao,i) => {
    botao.addEventListener('mouseover', () =>{
        botao.style.backgroundColor = 'white'
        botao.style.color = '#550953'
        botao.style.cursor = 'pointer'
    })
    botao.addEventListener('mouseout', () =>{
        botao.style.background = 'none'
        botao.style.color = '#F0EEE2'
    })
})

botaoCriarConta.addEventListener('click', ()=>{
    window.location.href = "criarconta.html"
})

botaoLogin.addEventListener('click', ()=>{
    window.location.href = "login.html"
})

botaoCardapio.addEventListener('click', ()=>{
    window.location.href = "cardapio.html"
})

imagemFolhaBaixo.addEventListener('load', ()=>{
    
})