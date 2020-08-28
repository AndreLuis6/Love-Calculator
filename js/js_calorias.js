const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const nome = getName('nome');
  const gender = getSelectedValue('sexo');
  const age = getInputNumberValue('idade');
  const weight = getInputNumberValue('peso');
  const height = getInputNumberValue('altura');
  const activityLevel = getSelectedValue('nivel_atividade');

  const tmb = Math.round(
    gender === 'feminino'
      ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
      : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
  );
  const maintenance = Math.round(tmb * Number(activityLevel));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  const layout = `
    <div class="card text-white bg-success">
        <div class="card-body">
          <h5><strong>${nome}</strong> aqui está o resultado:</h5>
          <p>Seu metabolismo basal é de <strong>${tmb} calorias</strong>.<p/>
          <p>Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.<p/>
          <p>Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.<p/>
          <p>Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.<p/>
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