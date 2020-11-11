// Variables.

const cursos = document.querySelector('#lista-cursos'); // Lista completa de cursos.

const carrito = document.querySelector('#carrito'); // Carrito completo.

const listaCarrito = document.querySelector('#lista-carrito tbody'); // Lista del carrito y su tbody vacio.

const btnVaciarCarrito = document.querySelector('#vaciar-carrito'); // Boton de vaciado de carrito.

// Event Listeners.

listeners();

function listeners(){

    cursos.addEventListener('click', agregarCurso) // Se le asigna el evento click a la lista completa de cursos, para que este mismo ejecute la funcion agregarCurso.

    carrito.addEventListener('click', borrarCurso); // Se le asigna el evento click al boton borrar.

    btnVaciarCarrito.addEventListener('click', vaciarCarrito); // Se le asigna el evento click al boton vaciar carrito.


}

// Funciones.

function agregarCurso(e){

    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')){ // Mediante un if delegamos el evento click al boton agregar al carrito

        const curso = e.target.parentElement.parentElement; // Mediante el parentElement obtenemos la informacion completa del curso.
        
        infoCurso(curso);

    }

}

function infoCurso(curso){
    
    const datosCurso = { // Creamos una constante que muestre de forma mas precisa la informacion del curso.
        
        imagen: curso.querySelector('img').src,
        
        titulo: curso.querySelector('h4').textContent,
        
        precio: curso.querySelector('.precio span').textContent,
        
        id: curso.querySelector('a').getAttribute('data-id'),
    
    }

        enviarCurso(datosCurso); 

}

function enviarCurso(curso){ // La funcion enviara el curso a la lista del carrito.

    const row = document.createElement('tr'); // Creamos un table row ('tr') para el tbody de listaCarrito.

    row.innerHTML = `

    <td>
        <img src='${curso.imagen}'>
    </td>

    <td>${curso.titulo}</td>
    
    <td>${curso.precio}</td>

    <td>
        <a href='#' class='borrar-curso' data-id='${curso.id}'>X</a>
    </td>

    `; // Se asigna el contenido de la table row mediante innerHTML, imprimimos los datos de infoCursos.

    listaCarrito.appendChild(row); // Asignamos a la constante row como un children de listaCarrito.

}

function borrarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains('borrar-curso')){

    e.target.parentElement.parentElement.remove()

    }
}

function vaciarCarrito(e){

    e.preventDefault

    listaCarrito.innerHTML = '';

}