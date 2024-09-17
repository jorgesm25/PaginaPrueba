function changeChart(chart) {
    document.getElementById('chart-iframe').src = chart;
}

function mostrarMensaje(mensaje, esError) {
    if (esError) {
        console.error(mensaje);
        alert("Error:\n" + mensaje);
    } else {
        console.log(mensaje);
        alert("Mensaje:\n" + mensaje);
    }
}

function enviarDatos() {
    // Simulando datos a enviar
    var datosSimulados = {
        nombre: "Ejemplo Nombre",
        genero: "Masculino",
        area: "Estadística",
        pais: "México",
        perfil: "Estudiante"
    };

    // Simulación de envío de datos
    fetch('recibirForm.php', {
        method: 'POST',
        body: JSON.stringify(datosSimulados),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            mostrarMensaje('Datos enviados con éxito', false);
        } else {
            mostrarMensaje(data.message, true);
        }
    })
    .catch(error => {
        mostrarMensaje('Error al enviar los datos', true);
    });

    return false;
}

let index = 0;

function showImage(n) {
    const slider = document.querySelector('.slider');
    const iframes = document.querySelectorAll('.slider iframe');
    const totalImages = iframes.length;

    if (n >= totalImages) { index = 0; }
    if (n < 0) { index = totalImages - 1; }
    slider.style.transform = `translateX(${-index * (100 / totalImages)}%)`;
}

function prevImage() {
    index--;
    showImage(index);
}

function nextImage() {
    index++;
    showImage(index);
}

// Inicializar la galería
showImage(index);


// Enviar informacion
<script>
document.getElementById('send-button').addEventListener('click', function() {
    // Capturar la selección del usuario
    const selectedOption = document.querySelector('input[name="view-toggle"]:checked').value;

    // Datos a enviar
    <script>
document.getElementById('send-button').addEventListener('click', function() {
    // Captura la opción seleccionada
    const selectedOption = document.querySelector('input[name="view-toggle"]:checked').value;

    // Datos a enviar
    const data = {
        email: 'example@example.com',  // Puedes ajustar esto según sea necesario
        message: `La selección del usuario es: ${selectedOption}`
    };

    // Crear una nueva instancia de XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/f/mldrkvjb', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');

    // Enviar los datos en formato JSON
    xhr.send(JSON.stringify(data));

    // Manejar la respuesta del servidor
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Recargar la página después del envío exitoso
            window.location.reload();
        } else {
            document.getElementById('confirmation-message').innerText = 'Hubo un problema al enviar tu respuesta. Inténtalo de nuevo más tarde.';
        }
    };

    // Manejar errores de red
    xhr.onerror = function() {
        document.getElementById('confirmation-message').innerText = 'Hubo un problema con la solicitud. Inténtalo de nuevo más tarde.';
    };
});
</script>


