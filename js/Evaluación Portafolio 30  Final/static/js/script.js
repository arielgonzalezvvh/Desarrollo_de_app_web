/* =========================================================
   Interacciones y funciones (todo en español)
   - Scroll activo en navbar
   - Carrusel About
   - Eventos (onmouseover, onmouseout, onclick, onchange) con this
   - DOM dinámico (agregar/eliminar tarjetas)
   - Validación simple de formulario
========================================================= */

function activarEnlaceAlScroll() {
  const offset = 120;
  const navLinks = document.querySelectorAll('.navbarPadre .nav-link');
  const sections = document.querySelectorAll('main section[id]');

  let found = false;

  sections.forEach(section => {
    const id = section.getAttribute('id');
    const target = document.querySelector(`.navbarPadre .nav-link[href="#${id}"]`);
    if (!target) return;

    const rect = section.getBoundingClientRect();
    const isActive = rect.top <= offset && rect.bottom >= offset;

    if (isActive && !found) {
      navLinks.forEach(l => l.classList.remove('active'));
      target.classList.add('active');
      found = true;
    }
  });

  if (!found) {
    navLinks.forEach(l => l.classList.remove('active'));
  }
}



function iniciarCarruselAbout() {
  const imgs = document.querySelectorAll('.about-transicion .img-sobreMi');
  if (!imgs.length) return;

  let current = 0;

  imgs.forEach((img, i) => {
    img.style.opacity = i === 0 ? '1' : '0';
    img.style.transform = 'scale(1) translate(0, 0)';
  });

  setInterval(() => {
    imgs[current].style.opacity = '0';
    imgs[current].style.transform = 'scale(1.08) translate(-5px, -5px)';

    current = (current + 1) % imgs.length;

    imgs[current].style.opacity = '1';
    imgs[current].style.transform = 'scale(1.03) translate(5px, 5px)';
  }, 8000);
}



/* Hover/Click con this */
function resaltarBoton(btn) {
  btn.style.transform = 'translateY(-2px)';
  btn.style.filter = 'brightness(1.06)';
}

function restaurarBoton(btn) {
  btn.style.transform = 'none';
  btn.style.filter = 'none';
}

function cambiarTexto(btn) {
  const original = btn.textContent;
  btn.textContent = '¡Listo!';
  setTimeout(() => { btn.textContent = original; }, 900);
}



/* Perfil - hover */
function agrandar(img) {
  img.style.transform = 'scale(1.2)';
  img.style.transition = 'transform .5s';
}

function reducir(img) {
  img.style.transform = 'scale(1)';
}



/* Cards - hover */
function elevarCarta(card) {
  card.style.transform = 'translateY(-6px)';
  card.style.boxShadow = '0 14px 40px rgba(0,0,0,.28)';
}

function bajarCarta(card) {
  card.style.transform = 'none';
  card.style.boxShadow = 'none';
}



/* Skills - overlay */
function agrandarElemento(el) {
  el.style.transform = 'scale(1.05)';
  el.style.boxShadow = '0 10px 20px rgba(0,0,0,.1)';
}

function restaurarElemento(el) {
  el.style.transform = 'scale(1)';
  el.style.boxShadow = '0 2px 5px rgba(0,0,0,.05)';
}

function toggleDesc(card) {
  card.classList.toggle('activo');
}



/* Experience - filtro */
function filtrarTarjetas(selectEl) {
  const tipo = selectEl.value;
  document
    .querySelectorAll('#experience .tarjeta-portfolio')
    .forEach(t => {
      const ok = (tipo === 'todas') || (t.dataset.tipo === tipo);
      t.style.display = ok ? '' : 'none';
    });
}



/* References - mostrar contacto */
function mostrarContacto(boton, email) {
  const p = document.getElementById('infoContacto');
  if (!p) return;

  p.innerText = 'Email de contacto: ' + email;
  p.style.display = 'block';

  boton.style.display = 'none';
}



/* Portfolio - clonar desde Experience */
function popularPortafolio() {
  const grid = document.getElementById('grid-portfolio');
  if (!grid) return;

  const expCols = document.querySelectorAll('#experience .col-md-4');
  expCols.forEach(col => {
    const clone = col.cloneNode(true);

    // Asegurar estilo de portfolio
    const card = clone.querySelector('.card');
    if (card) {
      card.classList.add('portfolio-card');
    }

    grid.appendChild(clone);
  });
}



/* Portfolio - agregar demo / eliminar (DOM) */
function eliminarTarjeta(btn) {
  const col = btn.closest('.col');
  if (col) col.remove();
}

function agregarProyectoDemo(btn) {
  const grid = document.getElementById('grid-portfolio');
  if (!grid) return;

  const col = document.createElement('div');
  col.className = 'col';

  col.innerHTML = `
    <div class="card h-100 shadow-lg portfolio-card">
      <img
        src="resources/img/demo.png"
        class="card-img-top mt-3 mb-3"
        alt="Proyecto demo"
        loading="lazy" />

      <div class="card-body">
        <h5 class="card-title">Proyecto Demo</h5>
        <p class="card-text">Tarjeta agregada dinámicamente con JS.</p>

        <button
          class="btn btn-outline-danger btn-sm"
          onclick="eliminarTarjeta(this)">
          Eliminar
        </button>
      </div>

      <div class="card-footer text-center">
        <a
          href="https://github.com/arielgonzalezvvh/Desarrollo_de_app_web"
          class="btn btn-dark w-100"
          target="_blank"
          rel="noopener">
          <i class="bi bi-github me-2"></i> Ver Repositorio
        </a>
      </div>
    </div>
  `;

  grid.prepend(col);
  cambiarTexto(btn);
}

function vaciarPortfolio(btn) {
  const grid = document.getElementById('grid-portfolio');
  if (!grid) return;

  grid.innerHTML = '';
  cambiarTexto(btn);
}



/* Contacto - validación simple */
function enviarFormulario(ev, formEl) {
  ev.preventDefault();

  const { nombre, correo, mensaje } = formEl;

  if (!nombre.value.trim() || !correo.value.trim() || !mensaje.value.trim()) {
    alert('Por favor completa nombre, correo y mensaje.');
    return false;
  }

  alert('¡Mensaje enviado! (Demo)');
  formEl.reset();
  return false;
}



/* INIT */
document.addEventListener('DOMContentLoaded', function () {
  activarEnlaceAlScroll();

  window.addEventListener('scroll', activarEnlaceAlScroll);

  iniciarCarruselAbout();

  popularPortafolio();

  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();
});


