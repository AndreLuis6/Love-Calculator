const form = document.getElementById('form_texto');
form.addEventListener('submit', processarDados);

function processarDados(event) {
    event.preventDefault();

    var texto = getTexto('texto');
    const textoMai = texto.toUpperCase();
    const textoMin = texto.toLowerCase();
    
    const layout = `
      <div class="card text-white bg-success mt-4 mb-4">
        <div class="card-header">Texto Maiúsculo</div>
        <div class="card-body">
          <h5>Resultado:</h5>
            <p>${textoMai}</p>
            <a class="btn btn-dark" onClick="copiarTexto()">Copiar</a>
        </div>
      </div>
      <div class="card text-white bg-primary">
        <div class="card-header">Texto Minúsculo</div>
        <div class="card-body">
          <h5>Resultado:</h5>
            <p>${textoMin}<p>
            <a class="btn btn-dark" onClick="copiarTexto()"></a>
        </div>
      </div>
    `;
  
    const result = document.getElementById('result_texto');
  
    result.innerHTML = layout;
  }

function getTexto(id) {
    return (document.getElementById(id).value);
}

function copiarTexto() {
    var textoCopiado = document.getElementById("texto");
    textoCopiado.select();
    document.execCommand("Copy");
    alert("Texto Copiado: " + textoCopiado.value);
  }