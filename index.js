const anoInput = document.querySelector(".ano");
const modeloInput = document.querySelector(".modelo");
const corInput = document.querySelector(".cor")
const marcaInput = document.querySelector(".marca");
const botao1 = document.querySelector(".botao");
const carrosCadastrado = document.querySelector(".carroCadastrado");
const carrosAlugados = document.querySelector(".carrosAlugados");

botao1.addEventListener("click", armazenarLista)

const listaDeCarros = [];
const carrosDeAlugados = [];


function armazenarLista() {
  const veiculos = {
    marca: marcaInput.value,
    modelo: modeloInput.value,
    ano: anoInput.value,
    cor: corInput.value,
  };
  listaDeCarros.push(veiculos);

}




function limparImput (){
  marcaInput.value = "";
  modeloInput.value = "";
  anoInput.value = "";
  corInput.value = "";
}