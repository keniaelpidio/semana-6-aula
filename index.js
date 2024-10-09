console.log("Hello World");

// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

// Carrinho de compras como um array de objetos
let carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarProduto() {
  // Exibir lista de produtos
  let opcoes = produtosDisponiveis.map((produto, index) => 
    `${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`
  ).join("\n");
  let escolha = prompt(`Escolha um produto para adicionar ao carrinho:\n${opcoes}`);
  let indice = parseInt(escolha) - 1;

  if (indice >= 0 && indice < produtosDisponiveis.length) {
    let produtoSelecionado = produtosDisponiveis[indice];
    let quantidade = parseInt(prompt(`Você escolheu ${produtoSelecionado.nome}. Quantidade?`));

    if (confirm(`Você deseja adicionar ${quantidade} ${produtoSelecionado.nome}(s) ao carrinho?`)) {
      let itemCarrinho = {
        nome: produtoSelecionado.nome,
        preco: produtoSelecionado.preco,
        quantidade: quantidade,
        subtotal: produtoSelecionado.preco * quantidade,
      };

      // Adiciona o produto ao carrinho
      carrinho.push(itemCarrinho);
      alert(`${quantidade} ${produtoSelecionado.nome}(s) adicionados ao carrinho!`);
    }
  } else {
    alert("Escolha inválida.");
  }
}
// Função para visualizar o carrinho
function visualizarCarrinho() {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio.");
    return;
  }

  let detalhesCarrinho = carrinho.map(item => 
    `${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade} = R$ ${item.subtotal.toFixed(2)}`
  ).join("\n");

  // Cálculo do total
  let total = carrinho.reduce((acc, item) => acc + item.subtotal, 0);

  alert(`Carrinho de Compras:\n${detalhesCarrinho}\n\nTotal: R$ ${total.toFixed(2)}`);
}

// Loop principal
while (true) {
  let acao = prompt("Escolha uma ação:\n1. Adicionar produto ao carrinho\n2. Visualizar carrinho\n3. Sair");

  if (acao === "1") {
    adicionarProduto();
  } else if (acao === "2") {
    visualizarCarrinho();
  } else if (acao === "3") {
    alert("Saindo...");
    break;
  } else {
    alert("Opção inválida. Tente novamente.");
  }
}