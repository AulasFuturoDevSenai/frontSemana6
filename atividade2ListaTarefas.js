const inputTarefa = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

let tarefas = [];

// Carregar tarefas do localStorage ao iniciar
window.onload = function() {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
        renderizarTarefas();
    }
};

// Função para atualizar a lista na tela
function renderizarTarefas() {
    lista.innerHTML = ''; // limpa a lista

    tarefas.forEach((tarefa, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = tarefa;

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.style.marginLeft = '10px';

        botaoExcluir.addEventListener('click', () => {
            excluirTarefa(index);
        });

        itemLista.appendChild(botaoExcluir);
        lista.appendChild(itemLista);
    });
}

// Adicionar nova tarefa
botaoAdicionar.addEventListener('click', function() {
    const nomeTarefa = inputTarefa.value.trim();

    if (nomeTarefa !== '') {
        tarefas.push(nomeTarefa);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
        renderizarTarefas();
        inputTarefa.value = '';
        inputTarefa.focus();
    } else {
        alert('Por favor, digite uma tarefa');
    }
});

// Excluir tarefa
function excluirTarefa(index) {
    tarefas.splice(index, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    renderizarTarefas();
}

//Adicionar um evento de clique no botão
botaoAdicionar.addEventListener('click', function() {
    const nomeTarefa = inputTarefa.value.trim();  //  Pega o texto digitado no input

    if (nomeTarefa !== '') {      //Verifica se o input não está vazio
        const itemLista = document.createElement('li');
        itemLista.textContent = nomeTarefa;
        lista.appendChild(itemLista);
        inputTarefa.value = '';
        inputTarefa.focus();
    } else {
        alert('Por favor, digite uma tarefa');
    }    
    
});
