let registros = [];

function registrarTemperatura() {
    // Obtener valores mediante prompt()
    const ubicacion = prompt("Ingresa la ubicación:");
    if (ubicacion === null) return;  // El usuario canceló el prompt

    const fecha = prompt("Ingresa la fecha (AAAA-MM-DD):");
    if (fecha === null) return;  // El usuario canceló el prompt

    const tempInterna = prompt("Ingresa la temperatura interna (°C):");
    if (tempInterna === null) return;  // El usuario canceló el prompt

    const tempExterna = prompt("Ingresa la temperatura externa (°C):");
    if (tempExterna === null) return;  // El usuario canceló el prompt

    const humedad = prompt("Ingresa la humedad (%):");
    if (humedad === null) return;  // El usuario canceló el prompt

    const observaciones = prompt("Ingresa las observaciones:");
    if (observaciones === null) return;  // El usuario canceló el prompt

    // Convertir las entradas numéricas a flotantes
    const tempInternaFloat = parseFloat(tempInterna);
    const tempExternaFloat = parseFloat(tempExterna);
    const humedadFloat = parseFloat(humedad);

    // Validar los campos
    if (!ubicacion || !fecha || isNaN(tempInternaFloat) || isNaN(tempExternaFloat) || isNaN(humedadFloat)) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    // Agregar registro al array
    registros.push({
        ubicacion,
        fecha,
        tempInterna: tempInternaFloat,
        tempExterna: tempExternaFloat,
        humedad: humedadFloat,
        observaciones
    });

    alert("Registro añadido correctamente.");
}

function mostrarUltimosRegistros() {
    console.log("Mostrando los últimos 3 registros:");
    const ultimosRegistros = registros.slice(-3); // Obtener los últimos 3 registros
    for (let i = 0; i < ultimosRegistros.length; i++) {
        const registro = ultimosRegistros[i];
        console.log(`Ubicación: ${registro.ubicacion}, Fecha: ${registro.fecha}, Temp. Interna: ${registro.tempInterna.toFixed(1)} °C, Temp. Externa: ${registro.tempExterna.toFixed(1)} °C, Humedad: ${registro.humedad.toFixed(1)} %, Observaciones: ${registro.observaciones}`);
    }
}

function mostrarTodosLosRegistros() {
    console.log("Mostrando todos los registros:");
    for (let i = 0; i < registros.length; i++) {
        const registro = registros[i];
        console.log(`Ubicación: ${registro.ubicacion}, Fecha: ${registro.fecha}, Temp. Interna: ${registro.tempInterna.toFixed(1)} °C, Temp. Externa: ${registro.tempExterna.toFixed(1)} °C, Humedad: ${registro.humedad.toFixed(1)} %, Observaciones: ${registro.observaciones}`);
    }
}

// Ejemplo de llamada a las funciones:
registrarTemperatura();
mostrarUltimosRegistros();
mostrarTodosLosRegistros();
