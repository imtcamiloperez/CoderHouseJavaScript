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

function abrirModal() {
    recalcularEstadisticas(); // Recalcular estadísticas al abrir el modal
    document.getElementById('myModal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('myModal').style.display = 'none';
}

function recalcularEstadisticas() {
    const totalRegistros = registros.length;
    if (totalRegistros === 0) return;

    let sumaTempInterna = 0;
    let sumaTempExterna = 0;
    let sumaHumedad = 0;
    let maxTempInterna = -Infinity;
    let minTempInterna = Infinity;
    let maxTempExterna = -Infinity;
    let minTempExterna = Infinity;
    let maxHumedad = -Infinity;
    let minHumedad = Infinity;

    registros.forEach(registro => {
        sumaTempInterna += registro.tempInterna;
        sumaTempExterna += registro.tempExterna;
        sumaHumedad += registro.humedad;

        if (registro.tempInterna > maxTempInterna) maxTempInterna = registro.tempInterna;
        if (registro.tempInterna < minTempInterna) minTempInterna = registro.tempInterna;

        if (registro.tempExterna > maxTempExterna) maxTempExterna = registro.tempExterna;
        if (registro.tempExterna < minTempExterna) minTempExterna = registro.tempExterna;

        if (registro.humedad > maxHumedad) maxHumedad = registro.humedad;
        if (registro.humedad < minHumedad) minHumedad = registro.humedad;
    });

    const promedioTempInterna = sumaTempInterna / totalRegistros;
    const promedioTempExterna = sumaTempExterna / totalRegistros;
    const promedioHumedad = sumaHumedad / totalRegistros;

    document.getElementById('promedioTempInterna').innerText = promedioTempInterna.toFixed(2);
    document.getElementById('maxTempInterna').innerText = maxTempInterna.toFixed(2);
    document.getElementById('minTempInterna').innerText = minTempInterna.toFixed(2);

    document.getElementById('promedioTempExterna').innerText = promedioTempExterna.toFixed(2);
    document.getElementById('maxTempExterna').innerText = maxTempExterna.toFixed(2);
    document.getElementById('minTempExterna').innerText = minTempExterna.toFixed(2);

    document.getElementById('promedioHumedad').innerText = promedioHumedad.toFixed(2);
    document.getElementById('maxHumedad').innerText = maxHumedad.toFixed(2);
    document.getElementById('minHumedad').innerText = minHumedad.toFixed(2);
}

window.onclick = function(event) {
    if (event.target === document.getElementById('myModal')) {
        cerrarModal();
    }
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