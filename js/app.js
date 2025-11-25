// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = []; // Para guardar los cursos seleccionados en el carrito. 

registrarEventListeners(); // Llama la funcion globalmente. 
function registrarEventListeners() {
    listaCursos.addEventListener('click', agregarCursos); // click y llama funcion. 
}

// Funciones.

function agregarCursos(e) {
    e.preventDefault(); // Evita accion por defecto. 
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }    
}

// Lee el contenido del curso al que le dimos click.

function leerDatosCurso(curso) {

    // Crear un objeto con el contenido del curso actual. 
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.children[1].querySelector('h4').textContent,
        precio: curso.children[1].querySelector('.precio span').textContent,
        id: curso.children[1].querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Agregar elementos al arreglo 'articulosCarrito'.

    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();
}

// Muestra el carrito de compra en el HTML. 

function carritoHTML() {

    // Llamar funcion de limpiar carrito. 
    linpiarHTML();

    // Recorrer el carrito y general el HTML.
    articulosCarrito.forEach( articulo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${articulo.titulo}
            </td>
        `;
        // Agregar el html del carrito en el tbody.
        contenedorCarrito.appendChild(row);
    }) 
}

// Limpiar los cursos del tbody. 
function linpiarHTML() {
    contenedorCarrito.innerHTML = '';
}