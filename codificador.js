//remove imagem para exiber output

function removeImagem() {
  document.getElementById("imagemSearch").remove();
}

//limpa a area de output para receber frase descodificada
function apagaTexto() {
  document.getElementById("outputTexto").value = "";
}

function codificaTexto() {

//obtem acesso ao valor do input atraves do id. Usa método replace() para substituir todas as instâncias (g). Salva o texto codificado em variavel e exibe in output.
      var frase = document.getElementById("inputTexto").value;
     /var fraseCodificada = frase.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
     // removeImagem();
      document.getElementById("outputTexto").value = fraseCodificada;
  }

  function descodificaTexto() {
    var frase = document.getElementById("inputTexto").value;
    outputTexto.value = "";
    var fraseDescodificada = frase.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    //apagaTexto();
    //removeImagem();
    document.getElementById("outputTexto").value = fraseDescodificada;

  }

//cria funcao async (assíncrona) pois clipboard retorna uma Promise (valor que pode estar disponível agora, no futuro ou nunca).
async function copiaTexto() {
  //obtem acesso ao botao "Copiar" a partir do id. Adiciona uma escuta de evento, ou seja, o gatilho para a ativacao do botao - um clique.
    document.getElementById("botaoCopiar").addEventListener("click", botaoCopiar);
    //guarda valor do texto criptografado. Seleciona e espera o retorno do valor.
    var textoSelecionado = document.querySelector("#outputTexto").value;
    await navigator.clipboard.writeText(textoSelecionado); 
}
