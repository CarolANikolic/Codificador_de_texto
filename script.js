//obtem acesso ao valor do input atraves do id. Usa método replace() para substituir todas as instâncias (g). Salva o texto codificado em variavel e exibe in output.
function codificarTexto() {
      let mensagem = document.getElementById("entrada-texto").value;
      let mensagemCodificada = mensagem.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
//remove imagem para exiber output
      document.getElementById("saida-texto").style.backgroundImage = "none";
      document.getElementById("saida-texto").value = mensagemCodificada;
}

function descodificarTexto() {
      let mensagem = document.getElementById("saida-texto").value;
      let mensagemDescodificada = mensagem.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
      document.getElementById("saida-texto").value = mensagemDescodificada;

}

//Cria funcao async (assíncrona) pois clipboard retorna uma Promise (valor que pode estar disponível agora, no futuro ou nunca).
async function copiarTexto() {
//Obtem acesso ao botao "Copiar" a partir do id. Adiciona uma escuta de evento, ou seja, o gatilho para a ativacao do botao - um clique.
      document.getElementById("btnCopiar").addEventListener("click", btnCopiar);
//Guarda valor do texto criptografado. Seleciona e espera o retorno do valor.
      let mensagemSelecionada = document.getElementById("saida-texto").value;
      await navigator.clipboard.writeText(mensagemSelecionada); 
}
