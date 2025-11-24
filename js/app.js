// Variables
const carrito = document.querySelector('#carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
console.log(listaCursos.children);

registrarEventListeners();
function registrarEventListeners() {
    listaCursos.addEventListener('click', agregarCursos);
    
}

// Funciones:

function agregarCursos(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        console.log(e.target.parentNode.children);
    }
    // console.log(e.target.classList);
    
}