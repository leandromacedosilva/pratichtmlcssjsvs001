function enviarWhats(event) {
  event.preventDefault();

  const nome = window.document.getElementById("nome").vavlue;
  const mensagem = window.document.getElementById("mensagem").vavlue;
  const telefone  = '';
  const texto = `Olá, chamo-me ${nome}, ${mensagem}.`;
  const msgFormatada = encodeURIComponent(texto);
  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  console.log(url);

  window.open(url, '_blank');

}