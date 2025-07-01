import { gridLayouts, flexLayouts } from './data/gridLayouts.js';

function createCard(layout) {
  const col = document.createElement('div');
  col.className = 'col-6 col-md-4 col-lg-3';
  col.innerHTML = `
    <div class="card-layout p-3 text-center">
      <img src="${layout.img}" alt="${layout.name}" />
      <div class="mt-2 small">${layout.name}</div>
      <button class="btn btn-sm btn-outline-light btn-copy mt-2">Copiar HTML</button>
    </div>`;
  const btnCopy = col.querySelector('.btn-copy');
  btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(layout.html)
      .then(() => alert('✅ HTML copiado'))
      .catch(() => alert('❌ Error al copiar'));
  });
  return col;
}

export function renderLayouts() {
  const gridContainer = document.getElementById('gridSection');
  gridLayouts.forEach(l => gridContainer.appendChild(createCard(l)));

  const flexContainer = document.getElementById('flexSection');
  flexLayouts.forEach(l => flexContainer.appendChild(createCard(l)));
}
