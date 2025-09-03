function enviarWhats(event) {
  event.preventDefault();

  const nome = window.document.getElementById("nome").value;
  const mensagem = window.document.getElementById("mensagem").value;
  const telefone = "55949917xxxx";
  const texto = `Olá, chamo-me ${nome}, ${mensagem}.`;
  const msgFormatada = encodeURIComponent(texto);
  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  console.log(url);

  window.open(url, "_blank");
}
