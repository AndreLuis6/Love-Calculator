const form = document.getElementById('form');
form.addEventListener('submit', processarDados);

function processarDados(event) {
    event.preventDefault();

    const nome1 = getName('nome1');
    const nome2 = getName('nome2');
    const chance = Math.floor(Math.random() * 100);

    const layout = `
      <div class="card text-white bg-danger">
        <div class="card-body">
          <h5>Aqui está o resultado do casal</h5>
          <strong>${nome1}</strong> e <strong>${nome2}</strong> a chance de vocês ficarem juntos ou darem certo é <strong>${chance}%</strong>.
        </div>
      </div>
    `;
  
    const result = document.getElementById('result');
  
    result.innerHTML = layout;
  }



function getName(id) {
    return (document.getElementById(id).value);
}