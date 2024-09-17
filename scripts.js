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
  function updateFormMessage() {
    // Obtiene el valor del radio seleccionado
    const selectedOption = document.querySelector('input[name="view-toggle"]:checked');
    
    // Verifica si hay una opción seleccionada
    if (selectedOption) {
      // Obtiene el valor del radio seleccionado
      const message = selectedOption.nextElementSibling.textContent;

      // Actualiza el campo de mensaje en el formulario
      document.getElementById('message').value = message;
    }
  }

  // Asocia la función al evento click de los radios
  document.querySelectorAll('input[name="view-toggle"]').forEach(input => {
    input.addEventListener('change', updateFormMessage);
  });

  // Establece el valor inicial cuando se carga la página
  window.addEventListener('load', updateFormMessage);
</script>
