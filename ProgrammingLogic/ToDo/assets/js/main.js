const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  //botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  li.appendChild(botaoApagar);
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); // transforma um array em string em formato json
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas); // transforma uma string em json em um array

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

function criaTarefa(texto) {
  const li = criaLi();
  li.innerText = texto;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    //do meu elemento o pai dele sera removido
    el.parentElement.remove();
    salvarTarefas();
  }
});
