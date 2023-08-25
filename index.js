const botao1 = document.querySelector(".botao");
const lista = document.querySelector(".minhaLista");
const input = document.querySelector(".input1");



botao1.addEventListener("click", adicionar)

const listaDePessoas = [];


function adicionar() {
  const valorDoCampo = input.value;
  alert(valorDoCampo)
  listaDePessoas.pust(valorDoCampo);
}