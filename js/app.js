// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = []; // Para guardar los cursos seleccionados en el carrito. 

// ================== EVENTOS ==================

registrarEventListeners(); // Llama la funcion globalmente. 
function registrarEventListeners() {
    listaCursos.addEventListener('click', agregarCursos); // click y llama funcion. 

    vaciarCarritoBtn.addEventListener('click', (e) => {
        console.log(e);
        if (e.target.classList.id = 'vacias-carrito') {
            // linpiarHTML();
            contenedorCarrito.innerHTML = '';
            articulosCarrito = [];
        }
    })

    carrito.addEventListener('click', eliminarCurso)
}

// ================== FUNCIONES ==================

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

    // Revisa si un elemento ya existe  en el carrito. 

    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    
    if (existe) {
        const cursos = articulosCarrito.map( curso => {
            if ( curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        })
        articulosCarrito = [...cursos];
    } else {
        // Agregar elementos al arreglo 'articulosCarrito'.
        articulosCarrito = [...articulosCarrito, infoCurso];
       
    }
    
     carritoHTML();


}

// Muestra el carrito de compra en el HTML. 

function carritoHTML() {

    // Llamar funcion de limpiar carrito. 
    // linpiarHTML();
    let row = '';
    // Recorrer el carrito y general el HTML.
    articulosCarrito.forEach( articulo => {
        // const row = document.createElement('tr');
        // inserta el html cons los valores. 
        const {imagen, titulo, precio, cantidad, id} = articulo;

            row += `
            <tr>
                <td> <img src="${imagen}" width="100"> </td>    
                <td> ${titulo} </td>
                <td> ${precio} </td>
                <td> ${cantidad} </td>
                <td> <a class="borrar-curso" data-id="${id}"> X </a> </td>
            </tr>
        `;
        
        // Agregar el html del carrito en el tbody.
        // contenedorCarrito.appendChild(row);
    }) 
    contenedorCarrito.innerHTML = row;
}
/* 
// Limpiar los cursos del tbody. 
function linpiarHTML() {
    // forma lenta. 
    // contenedorCarrito.innerHTML = '';

    // Mas performan y rapido. 
    // Elimina los nodos del html. 
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
 */

function eliminarCurso(e) {

     if (e.target.classList.contains('borrar-curso')) {

        const cursoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)
        carritoHTML(); // volver a iterar el carrito y agregar el HTML. 
    }
}

