function reserva() {
  document.getElementById("novaPagina").style.display = "flex";
}
function cofirmButton() {
  alert("Reserva confirmada! Por favor, verifique seu email.");
  document.getElementById("novaPagina").style.display = "none";
  //Fazendo com que apos o botão de confirmações ser clicado, os inputs fiquem em branco
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}
function cancelButton() {
  alert("Reserva cancelada!");
  document.getElementById("novaPagina").style.display = "none";
}
