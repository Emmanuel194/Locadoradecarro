const anoInput = document.querySelector(".ano");
const modeloInput = document.querySelector(".modelo");
const corInput = document.querySelector(".cor")
const marcaInput = document.querySelector(".marca");
const botao1 = document.querySelector(".botao");
const carrosCadastrado = document.querySelector(".carroCadastrado");
const carroAlugado = document.querySelector(".carroAlugado");
// puxando as class passada na div para javascript.
botao1.addEventListener("click", armazenarLista) 

const listaDeCarros = [];
const carrosDeAlugados = [];

// function para armazenar os nomes passado pelo input


function armazenarLista() {
  const veiculos = {
    marca: marcaInput.value,
    modelo: modeloInput.value,
    ano: anoInput.value,
    cor: corInput.value,
  };
  listaDeCarros.push(veiculos);
  enviandoLista();
  limparImput();
};


// function para criar a lista que séra enviada para as outas div obtendo o valor que veio da array recebida no input

function enviandoLista(){
  carrosCadastrado.innerHTML = "";
  listaDeCarros.forEach((carro, index) => {
    const ol = document.createElement("ol");
    ol.innerHTML = `
      <li>${carro.marca}</li>
      <li>${carro.ano}</li>
      <li>${carro.modelo}</li>
      <li>${carro.cor}</li>
      <button class="botaoAlugar" data-index="${index}">Alugar</button>
      <button class="botaoExcluir" data-index="${index}">Retirar</button>
    `;
    carrosCadastrado.appendChild(ol); 
    // o appendchield é usado para inserir uma informação no html , tabela ou div 
  });


  // mesma fuçao de cima para receber as string da input para outra div
  carroAlugado.innerHTML = "";
  carrosDeAlugados.forEach((carro, index) => {
    const ol = document.createElement("ol");
    ol.innerHTML = `
    <li>${carro.marca}</li>
    <li>${carro.ano}</li>
    <li>${carro.modelo}</li>
    <li>${carro.cor}</li>
    <button class="botaoRecadastrar" data-index="${index}">Recadastrar</button>
    <button class="botaoExcluir" data-index="${index}">Excluir</button>
    `
    carroAlugado.appendChild(ol);
  });

}


// metodo para toda vez que clicar no botao de enviar, ele vai pegar todas as função.
// é atribuir as função para determinado objetivo
carrosCadastrado.addEventListener("click", event => {
  if(event.target.classList.contains("botaoAlugar")) {
    const index = event.target.getAttribute("data-index");
    alugarCarro(index);
  } else if (event.target.classList.contains("botaoExcluir")) {
    const index = event.target.getAttribute("data-index");
    excluirCarro(index);
  }
});

// function das LI de carros alugados

carroAlugado.addEventListener("click", event => {
  if(event.target.classList.contains("botaoRecadastrar")) {
    const index = event.target.getAttribute("data-index");
    recadastrarCarro(index);
  } else if (event.target.classList.contains("botaoExcluir")) {
    const index = event.target.getAttribute("data-index");
    excluirCarroAlugado(index);
  }
})

















//---------------------------------------- FUNCTIONS DE APOIO ----///

function excluirCarroAlugado(index) {
  carroAlugado.splice(index, 0);
  enviandoLista();
}

// function para exluir a lista dentro da div
function excluirCarro(index) {
  listaDeCarros.splice(index, 1);
  enviandoLista();
}

// fucntion para transmitir a lista de carro para a div de carros alugados
function alugarCarro(index) {
  const carroAlugado = listaDeCarros[index];
  listaDeCarros.splice(index, 1);
  carrosDeAlugados.push(carroAlugado);
  enviandoLista();
}


function recadastrarCarro(index) {
  const carrosCadastrado = listaDeCarros[index];
  listaDeCarros.splice(index, 0);
  carrosDeAlugados.push(carrosCadastrado)
  enviandoLista();
}

// Fuction para LIMPAR OS INPUT TODA VEZ QUE CLICAR NO BOTAO ENVIAR
function limparImput (){
  marcaInput.value = "";
  modeloInput.value = "";
  anoInput.value = "";
  corInput.value = "";
}








