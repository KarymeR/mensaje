document.addEventListener('DOMContentLoaded', function(){

    leerMensaje();
    
});

function leerMensaje() {
    // Evitar que se altere el mensaje
    const mensaje = document.querySelector('.leerMensaje');

    mensaje.addEventListener('click', function(){
        // Obtener contenido 
        let mensaje = document.getElementById('mensaje').value;

        // Limpiar espacios
        mensaje = mensaje.trim();
        mensaje = mensaje.replaceAll(/\s+/g, ' ');

        // Agregar campo para buscar texto
        if(mensaje !== "") {
            document.getElementById('mensaje').value = mensaje;
            document.getElementById('mensaje').readOnly = true;

            // Agregar campo de busqueda
            contenedor = document.getElementById('contenedor');
            let div = document.createElement('DIV');
            div.className = 'contenido';      
            contenedor.appendChild(div);  

            let input = document.createElement('INPUT');
            input.type = 'text';
            input.id = 'texto';
            input.placeholder = 'Ingresa texto a buscar';
            div.appendChild(input);

            let button = document.createElement('BUTTON');     
            button.classList.toggle('buscar');
            button.innerHTML = 'Buscar';
            div.appendChild(button);

            buscarTexto();
        }
    })
}

function buscarTexto() {
    const buscar = document.querySelector('.buscar');

    buscar.addEventListener('click', function(){
        // Obtener contenido 
        let mensaje = document.getElementById('mensaje').value;

        // Limpiar espacios
        mensaje = mensaje.trim();
        mensaje = mensaje.replaceAll(/\s+/g, ' ');

        let texto = document.getElementById('texto').value;

        texto = texto.trim();

        // Separar contenido mensaje
        let arrM = mensaje.split(' ');

        // Buscar texto en arreglo
        let existe = arrM.includes(texto);

        let resultado = '';
        if(existe){
            resultado =  'El texto \"' + texto + '\" existe en el mensaje';
        } else {
            resultado = 'El texto \"' + texto + '\"no existe en el mensaje';
        }

        // Crear etiqueta
        contenedor = document.getElementById('contenedor');
        let label = document.createElement('LABEL');
        label.innerHTML = resultado;

        // Mostrar resultado
        contenedor.appendChild(label);  
    });
}