const form = document.getElementById('form');
form.addEventListener('submit', processarDados);

function processarDados(event) {
    event.preventDefault();
  
    const peso = getInputNumberValue('peso');
    const altura = getInputNumberValue('altura');
    const nome = getName('nome');

    const alturaCM = altura/100;
  
    const imc = (
        (peso/(alturaCM*alturaCM))
    );

    const imcFinal = imc.toFixed(2);
    var situacao;

    if (imcFinal < 18.5) {
      situacao = ("Você está abaixo do peso! Recomendamos procurar um especialista.");
    }if (imcFinal >= 18.5 & imcFinal < 25) {
      situacao = ("Seu peso está normal!");
    }if (imcFinal >= 25 & imcFinal < 30) {
      situacao = ("Você está com sobrepeso! Recomendamos procurar um especialista.");
    }if (imcFinal >= 30 & imcFinal < 35) {
      situacao = ("Você está com obesidade grau I! Recomendamos procurar um especialista.");
    }if (imcFinal >= 35 & imcFinal < 40) {
      situacao = ("Você está com obesidade grau II! Recomendamos procurar um especialista.");
    }if (imcFinal >= 40) {
      situacao = ("Você está com obesidade grau III(mórbida)! Recomendamos procurar um especialista.");
    }
  
    const layout = `
      <div class="card text-white bg-success">
        <div class="card-body">
          <h5>Aqui está o resultado:</h5>
          <strong>${nome}</strong> seu imc é <strong>${imcFinal}</strong>.
          <p>${situacao}<p/>
        </div>
      </div>
    `;
  
    const result = document.getElementById('result');
  
    result.innerHTML = layout;
  }

function getSelectedValue(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}
  
function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}

function getName(id) {
    return (document.getElementById(id).value);
}