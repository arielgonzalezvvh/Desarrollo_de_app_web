/* =========================================================
   Interacciones y funciones (todo en español)
   - Scroll activo en navbar
   - Carrusel About
   - Eventos (onmouseover, onmouseout, onclick, onchange) con this
   - DOM dinámico (agregar/eliminar tarjetas)
   - Validación simple de formulario
========================================================= */ // Explica el propósito general del archivo

function activarEnlaceAlScroll() { // Marca en el menú qué sección estás viendo
    const offset = 120; // Altura de referencia desde el top para activar una sección
    const navLinks = document.querySelectorAll('.navbarPadre .nav-link'); // Toma todos los enlaces del menú
    const sections = document.querySelectorAll('main section[id]'); // Toma todas las secciones con id dentro de <main>

    let found = false; // Bandera para saber si ya activamos algún enlace

    sections.forEach(section => { // Recorre cada sección de la página
        const id = section.getAttribute('id'); // Obtiene el id de la sección, ej: "home"
        const target = document.querySelector(`.navbarPadre .nav-link[href="#${id}"]`); // Busca el enlace que apunta a ese id
        if (!target) return; // Si no existe ese enlace, no hace nada

        const rect = section.getBoundingClientRect(); // Ubicación de la sección en pantalla
        const isActive = rect.top <= offset && rect.bottom >= offset; // ¿La línea de offset cae dentro de la sección?

        if (isActive && !found) { // Si es la sección activa y aún no marcamos ninguna
            navLinks.forEach(l => l.classList.remove('active')); // Quita "active" de todos los enlaces
            target.classList.add('active'); // Agrega "active" al enlace correspondiente
            found = true; // Marca que ya encontramos la activa (evita activar varias)
        }
    });

    if (!found) { // Si ninguna sección está activa (muy arriba o muy abajo)
        navLinks.forEach(l => l.classList.remove('active')); // Limpia todos los "active"
    }
} // Fin activarEnlaceAlScroll



function iniciarCarruselAbout() { // Crea un carrusel suave de imágenes en la sección "About"
    const imgs = document.querySelectorAll('.about-transicion .img-sobreMi'); // Todas las imágenes del carrusel
    if (!imgs.length) return; // Si no hay imágenes, termina

    let current = 0; // Índice de la imagen actual

    imgs.forEach((img, i) => { // Configura la visibilidad inicial
        img.style.opacity = i === 0 ? '1' : '0'; // La primera visible, el resto ocultas
        img.style.transform = 'scale(1) translate(0, 0)'; // Sin zoom ni movimiento al inicio
    });

    setInterval(() => { // Cada cierto tiempo cambia de imagen
        imgs[current].style.opacity = '0'; // Oculta la imagen actual
        imgs[current].style.transform = 'scale(1.08) translate(-5px, -5px)'; // Le da un leve zoom/salida

        current = (current + 1) % imgs.length; // Avanza al siguiente índice y vuelve al principio al llegar al final

        imgs[current].style.opacity = '1'; // Muestra la siguiente imagen
        imgs[current].style.transform = 'scale(1.03) translate(5px, 5px)'; // Leve zoom/entrada
    }, 8000); // Cambia cada 8 segundos
} // Fin iniciarCarruselAbout



/* Hover/Click con this */ // Efectos visuales para botones usando "this"
function resaltarBoton(btn) { // Sube y aclara el botón al pasar el mouse
    btn.style.transform = 'translateY(-2px)'; // Lo mueve 2px hacia arriba
    btn.style.filter = 'brightness(1.06)'; // Aumenta un poco el brillo
}

function restaurarBoton(btn) { // Vuelve el botón a su estado normal al sacar el mouse
    btn.style.transform = 'none'; // Quita el movimiento
    btn.style.filter = 'none'; // Quita el brillo extra
}

function cambiarTexto(btn) { // Cambia el texto del botón por un momento
    const original = btn.textContent; // Guarda el texto actual
    btn.textContent = '¡Listo!'; // Muestra un feedback rápido
    setTimeout(() => { btn.textContent = original; }, 900); // Vuelve al texto original en 0.9s
} // Fin efectos de botón



/* Perfil - hover */ // Efectos para la foto de perfil
function agrandar(img) { // Agranda la foto cuando pasas el mouse
    img.style.transform = 'scale(1.2)'; // Aumenta el tamaño un 20%
    img.style.transition = 'transform .5s'; // Anima el cambio en 0.5s
}

function reducir(img) { // Devuelve la foto a su tamaño normal
    img.style.transform = 'scale(1)'; // Tamaño original
} // Fin efectos perfil



/* Cards - hover */ // Efectos para tarjetas de servicios/experiencia
function elevarCarta(card) { // Eleva la tarjeta y le agrega sombra
    card.style.transform = 'translateY(-6px)'; // La sube 6px
    card.style.boxShadow = '0 14px 40px rgba(0,0,0,.28)'; // Aplica una sombra marcada
}

function bajarCarta(card) { // Quita la elevación y la sombra
    card.style.transform = 'none'; // Vuelve a su lugar
    card.style.boxShadow = 'none'; // Sin sombra
} // Fin efectos cards



/* Skills - overlay */ // Tarjetas de habilidades con texto extra al click/hover
function agrandarElemento(el) { // Da énfasis a la tarjeta al pasar el mouse
    el.style.transform = 'scale(1.05)'; // La agranda un poco
    el.style.boxShadow = '0 10px 20px rgba(0,0,0,.1)'; // Sombra suave
}

function restaurarElemento(el) { // Quita el énfasis al sacar el mouse
    el.style.transform = 'scale(1)'; // Tamaño normal
    el.style.boxShadow = '0 2px 5px rgba(0,0,0,.05)'; // Sombra mínima
}

function toggleDesc(card) { // Muestra u oculta el texto extra de la habilidad
    card.classList.toggle('activo'); // Alterna la clase que activa el overlay
} // Fin skills



/* Experience - filtro */ // Muestra sólo las tarjetas que coinciden con el filtro elegido
function filtrarTarjetas(selectEl) { // Filtra por "todas", "linux", "domotica" o "web"
    const tipo = selectEl.value; // Toma el valor seleccionado
    document
        .querySelectorAll('#experience .tarjeta-portfolio') // Busca todas las tarjetas de experiencia
        .forEach(t => {
            const ok = (tipo === 'todas') || (t.dataset.tipo === tipo); // ¿Coincide con el filtro?
            t.style.display = ok ? '' : 'none'; // Muestra u oculta según corresponda
        });
} // Fin filtro experiencia



/* References - mostrar contacto */ // Muestra el email del referente al tocar el botón
function mostrarContacto(boton, email) { // Cambia el botón por el correo visible
    const p = document.getElementById('infoContacto'); // Párrafo donde se mostrará el email
    if (!p) return; // Si no existe, no hace nada

    p.innerText = 'Email de contacto: ' + email; // Escribe el correo
    p.style.display = 'block'; // Lo hace visible
    boton.style.display = 'none'; // Oculta el botón para no repetir
} // Fin referencias



/* Portfolio - clonar desde Experience */ // Copia las tarjetas de experiencia al portafolio
function popularPortafolio() { // Llena el grid del portafolio automáticamente
    const grid = document.getElementById('grid-portfolio'); // Contenedor de tarjetas del portafolio
    if (!grid) return; // Si no existe, termina

    const expCols = document.querySelectorAll('#experience .col-md-4'); // Columnas de experiencia (3 tarjetas)
    expCols.forEach(col => { // Recorre cada tarjeta de experiencia
        const clone = col.cloneNode(true); // Crea una copia completa de la tarjeta
        const card = clone.querySelector('.card'); // Busca la tarjeta dentro del clon
        if (card) {
            card.classList.add('portfolio-card'); // Le agrega estilo de "tarjeta de portafolio"
        }
        grid.appendChild(clone); // Inserta el clon en el portafolio
    });
} // Fin popularPortafolio



/* Portfolio - agregar demo / eliminar (DOM) */ // Permite añadir y quitar tarjetas de ejemplo
function eliminarTarjeta(btn) { // Elimina la tarjeta donde está este botón
    const col = btn.closest('.col'); // Busca el contenedor .col más cercano
    if (col) col.remove(); // Si lo encuentra, lo saca del DOM
}

function agregarProyectoDemo(btn) { // Crea una tarjeta de ejemplo y la agrega arriba
    const grid = document.getElementById('grid-portfolio'); // Contenedor del portafolio
    if (!grid) return; // Si no existe, termina

    const col = document.createElement('div'); // Crea una columna nueva
    col.className = 'col'; // Le da la clase de columna


    grid.prepend(col); // Agrega la tarjeta al inicio del portafolio
    cambiarTexto(btn); // Feedback en el botón que usaste para agregar
}

function vaciarPortfolio(btn) { // Borra todas las tarjetas del portafolio
    const grid = document.getElementById('grid-portfolio'); // Contenedor del portafolio
    if (!grid) return; // Si no existe, termina

    grid.innerHTML = ''; // Deja el contenedor vacío
    cambiarTexto(btn); // Feedback en el botón de "Vaciar"
} // Fin gestión tarjetas demo



/* Contacto - validación simple */ // Comprueba que el formulario tenga datos básicos
function enviarFormulario(ev, formEl) { // Maneja el envío del formulario de contacto
    ev.preventDefault(); // Evita que recargue la página

    const { nombre, correo, mensaje } = formEl; // Toma los campos por nombre

    if (!nombre.value.trim() || !correo.value.trim() || !mensaje.value.trim()) { // Si falta algo
        alert('Por favor completa nombre, correo y mensaje.'); // Muestra aviso
        return false; // No envía
    }

    alert('¡Mensaje enviado! (Demo)'); // Simula que se envió bien
    formEl.reset(); // Limpia los campos
    return false; // Mantiene la página sin recargar
} // Fin validación contacto



/* INIT */ // Arranque: se ejecuta cuando el HTML ya está cargado
document.addEventListener('DOMContentLoaded', function () { // Espera a que el DOM esté listo
    activarEnlaceAlScroll(); // Marca el enlace activo inicial
    window.addEventListener('scroll', activarEnlaceAlScroll); // Actualiza el activo al hacer scroll
    iniciarCarruselAbout(); // Pone en marcha el carrusel del About
    popularPortafolio(); // Copia proyectos a la sección Portafolio

    const anio = document.getElementById('anio'); // Busca el span donde va el año
    if (anio) anio.textContent = new Date().getFullYear(); // Escribe el año actual
}); // Fin INIT


