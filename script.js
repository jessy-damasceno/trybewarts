const email = document.getElementById('email');
const senha = document.getElementById('senha');
const entrar = document.getElementById('loginBtn')

//Requisito 1
entrar.addEventListener('click', validar)

function validar() {
    if (email.value === 'tryber@teste.com' & senha.value === '123456') {
        alert('Olá, Tryber!')
    } else alert('Email ou senha inválidos.')
}