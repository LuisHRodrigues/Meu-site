const tela = document.getElementById("tela");
let expressao = "";

function adicionarValor(valor) {
  expressao += valor;
  tela.value = expressao;
}

function limpar() {
  expressao = "";
  tela.value = "0";
}

function backspace() {
  expressao = expressao.slice(0, -1);
  tela.value = expressao || "0";
}

function calcular() {
  try {
    expressao = eval(expressao.replace(/÷/g, "/").replace(/×/g, "*")) || "";
  } catch {
    expressao = "Erro";
  }
  tela.value = expressao;
}
