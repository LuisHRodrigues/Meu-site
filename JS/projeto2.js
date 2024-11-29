function reserva() {
  document.getElementById("novaPagina").style.display = "flex";
}
function confirmButton(event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário
  alert("Reserva confirmada! Por favor, verifique seu email.");
  document.getElementById("novaPagina").style.display = "none";
  // Fazendo com que após o botão de confirmações ser clicado, os inputs fiquem em branco
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}

function cancelButton(event) {
  event.preventDefault(); // Impede o envio do formulário
  alert("Reserva cancelada!");
  document.getElementById("novaPagina").style.display = "none";
}
