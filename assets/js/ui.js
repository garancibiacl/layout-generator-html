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
      .then(() => mostrarToast("HTML copiado correctamente ", "light"))
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


   // START FUNCION TOAST

   function mostrarToast(mensaje, tipo = 'success') {
    const toastContainerId = 'toastContainer';
  
    // Si no existe el contenedor, lo creamos una vez
    if (!document.getElementById(toastContainerId)) {
      const container = document.createElement('div');
      container.id = toastContainerId;
      container.className = 'position-fixed bottom-0 end-0 p-3';
      container.style.zIndex = '9999';
      document.body.appendChild(container);
    }
  
    // Crear el toast dinámico
    const toastEl = document.createElement('div');
    toastEl.className = `toast align-items-center text-dark bg-${tipo} border-0 mb-2`;
    toastEl.setAttribute('role', 'alert');
    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body d-flex gap-2 align-items-center">${mensaje} <i class="bx bx-check-circle bx-sm"></i></div>
        <button type="button" class="btn-close btn-close-dark me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    `;
  
    document.getElementById(toastContainerId).appendChild(toastEl);
  
    // Iniciar y mostrar el toast
    const bsToast = new bootstrap.Toast(toastEl);
    bsToast.show();
  
    // Eliminar el toast del DOM cuando termine
    toastEl.addEventListener('hidden.bs.toast', () => {
      toastEl.remove();
    });
  }
 // FIN FUNCION TOAST


 document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");

  // Verifica si hay un tema guardado
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    }
  });
});
