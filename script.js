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

// Requisito 21   -----> https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/ <-----
function pegaNome() {
  const name = document.querySelector('#input-name').value;
  const lname = document.querySelector('#input-lastname').value;

  return `Nome: ${name} ${lname}`;
}

function pegaEmail() {
  return `Email: ${document.querySelector('#input-email').value}`;
}

function pegaCasa() {
  return `Casa: ${document.querySelector('#house').value}`;
}

function pegaFamilia() {
  return `Família: ${
    document.querySelector('input[name="family"]:checked').value
  }`;
}

function pegaMaterias() {
  const materias = [];
  const hofs = document.getElementById('hofs');
  const jest = document.getElementById('jest');
  const promises = document.getElementById('promises');
  const react = document.getElementById('react');
  const sql = document.getElementById('sql');
  const python = document.getElementById('python');

  python.value = " Python";
  sql.value = " SQL";
  react.value = " React";
  promises.value = " Promises";
  jest.value = " Jest";
  hofs.value = " Hofs";

  document
  .querySelectorAll('input[name="materias"]:checked')
  .forEach((materia) => {
      materias.push(materia.value);
    });
  return `Matérias: ${materias}`;
}

function pegaNota() {
  return `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`;
}

function pegaObservacao() {
  return `Observações: ${document.querySelector('#textarea').value}`;
}

 function apagaForm(event) {
   const construcao = [pegaNome(), pegaEmail(), pegaCasa(), pegaFamilia(), pegaMaterias(), pegaNota(), pegaObservacao()];
   const ol = document.createElement('ol');

   event.preventDefault();
   form.innerHTML = '';
   form.appendChild(ol)
   const buscaol = form.firstChild
   for (let i = 0; i < construcao.length; i += 1) {
     criaValor.innerText = construcao[i];
     buscaol.appendChild(criaValor.cloneNode(true));
     
   }
}

const form = document.getElementById('evaluation-form');
const criaValor = document.createElement('li')

botao.addEventListener('click', apagaForm)