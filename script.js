const email = document.getElementById('email');
const senha = document.getElementById('senha');
const entrar = document.getElementById('loginBtn');
const check = document.getElementById('agreement');
const botao = document.getElementById('submit-btn');

// Requisito 1

function validar() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else alert('Email ou senha inválidos.');
}

entrar.addEventListener('click', validar);

// Requisito 20

const textArea = document.querySelector('#textarea');
const textoContador = document.querySelector('#counter');

function contador() {
  let count = 500;
  count -= textArea.value.length;
  textoContador.innerText = `Faltam ${count} caracteres`;
}

textArea.addEventListener('input', contador);

// Requisito 19
function ligaBotao() {
  botao.disabled = true;
  if (check.checked) {
    botao.disabled = false;
  }
}

check.addEventListener('click', ligaBotao);
