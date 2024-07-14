let registros = [];

function registrarTemperatura() {
    // Obtener valores del formulario
    const ubicacion = document.getElementById('ubicacion').value;
    const fecha = document.getElementById('fecha').value;
    const tempInterna = parseFloat(document.getElementById('tempInterna').value);
    const tempExterna = parseFloat(document.getElementById('tempExterna').value);
    const humedad = parseFloat(document.getElementById('humedad').value);
    const observaciones = document.getElementById('observaciones').value;

    // Validar los campos
    if (!ubicacion || !fecha || isNaN(tempInterna) || isNaN(tempExterna) || isNaN(humedad)) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    // Agregar registro al array
    registros.push({
        ubicacion,
        fecha,
        tempInterna,
        tempExterna,
        humedad,
        observaciones
    });

    // Limpiar el formulario
    document.getElementById('ubicacion').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('tempInterna').value = '';
    document.getElementById('tempExterna').value = '';
    document.getElementById('humedad').value = '';
    document.getElementById('observaciones').value = '';
}

function mostrarUltimosRegistros() {
    const tabla = document.getElementById('registros');
    tabla.innerHTML = ''; // Limpiar tabla

    // Recorrer array de registros y añadir filas a la tabla
    const ultimosRegistros = registros.slice(-3); // Obtener los últimos 3 registros
    for (let i = 0; i < ultimosRegistros.length; i++) {
        const registro = ultimosRegistros[i];
        const nuevaFila = tabla.insertRow();

        const celdaUbicacion = nuevaFila.insertCell(0);
        const celdaFecha = nuevaFila.insertCell(1);
        const celdaTempInterna = nuevaFila.insertCell(2);
        const celdaTempExterna = nuevaFila.insertCell(3);
        const celdaHumedad = nuevaFila.insertCell(4);
        const celdaObservaciones = nuevaFila.insertCell(5);

        celdaUbicacion.textContent = registro.ubicacion;
        celdaFecha.textContent = registro.fecha;
        celdaTempInterna.textContent = registro.tempInterna.toFixed(1) + " °C";
        celdaTempExterna.textContent = registro.tempExterna.toFixed(1) + " °C";
        celdaHumedad.textContent = registro.humedad.toFixed(1) + " %";
        celdaObservaciones.textContent = registro.observaciones;
    }
}

function mostrarTodosLosRegistros() {
    const tabla = document.getElementById('registros');
    tabla.innerHTML = ''; // Limpiar tabla

    // Recorrer array de registros y añadir filas a la tabla
    for (let i = 0; i < registros.length; i++) {
        const registro = registros[i];
        const nuevaFila = tabla.insertRow();

        const celdaUbicacion = nuevaFila.insertCell(0);
        const celdaFecha = nuevaFila.insertCell(1);
        const celdaTempInterna = nuevaFila.insertCell(2);
        const celdaTempExterna = nuevaFila.insertCell(3);
        const celdaHumedad = nuevaFila.insertCell(4);
        const celdaObservaciones = nuevaFila.insertCell(5);

        celdaUbicacion.textContent = registro.ubicacion;
        celdaFecha.textContent = registro.fecha;
        celdaTempInterna.textContent = registro.tempInterna.toFixed(1) + " °C";
        celdaTempExterna.textContent = registro.tempExterna.toFixed(1) + " °C";
        celdaHumedad.textContent = registro.humedad.toFixed(1) + " %";
        celdaObservaciones.textContent = registro.observaciones;
    }
}