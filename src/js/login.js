const botoesFormulario = document.querySelectorAll('.button')
const botaoLogin = document.getElementById('login')

botoesFormulario.forEach((botao) =>{
    botao.addEventListener('mouseover', ()=>{
        botao.style.backgroundColor = 'white'
        botao.style.color = '#550953'
        botao.style.cursor = 'pointer'
    })
    botao.addEventListener('mouseout', () =>{
        botao.style.background = 'none'
        botao.style.color = '#F0EEE2'
    })
})

botaoLogin.addEventListener('click', () =>{
    window.location.href = 'menu-usuario.html'
})