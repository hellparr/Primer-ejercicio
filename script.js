// PRIMER EJERCICIO.
// Funciones para calcular el perímetro y el área de cada figura

/* function perimetroTriangulo(a, b, c) {
    return a + b + c;
}

function areaTriangulo(b, h) {
    return (b * h) / 2;
}

function perimetroRectangulo(a, b) {
    return 2 * (a + b);
}

function areaRectangulo(a, b) {
    return a * b;
}

function perimetroCuadrado(a) {
    return 4 * a;
}

function areaCuadrado(a) {
    return a * a;
}

function perimetroCirculo(r) {
    return 2 * Math.PI * r;
}

function areaCirculo(r) {
    return Math.PI * r * r;
}

// Función principal que solicita datos al usuario y calcula según la elección
function calcular() {
    const figura = prompt("Elige la figura (triangulo, rectangulo, cuadrado, circulo):").toLowerCase();
    const tipoCalculo = prompt("¿Qué deseas calcular? (area o perimetro):").toLowerCase();

    let resultado;
 
    switch (figura) {
        case 'triangulo':
            const a = parseFloat(prompt("Ingresa el lado a:"));
            const b = parseFloat(prompt("Ingresa el lado b:"));
            const c = parseFloat(prompt("Ingresa el lado c:"));
            const h = parseFloat(prompt("Ingresa la altura h:"));

            if (tipoCalculo === 'area') {
                resultado = areaTriangulo(b, h);
            } else {
                resultado = perimetroTriangulo(a, b, c);
            }
            break;

        case 'rectangulo':
            const ladoA = parseFloat(prompt("Ingresa el lado a:"));
            const ladoB = parseFloat(prompt("Ingresa el lado b:"));

            if (tipoCalculo === 'area') {
                resultado = areaRectangulo(ladoA, ladoB);
            } else {
                resultado = perimetroRectangulo(ladoA, ladoB);
            }
            break;

        case 'cuadrado':
            const lado = parseFloat(prompt("Ingresa el lado:"));

            if (tipoCalculo === 'area') {
                resultado = areaCuadrado(lado);
            } else {
                resultado = perimetroCuadrado(lado);
            }
            break;

        case 'circulo':
            const radio = parseFloat(prompt("Ingresa el radio:"));

            if (tipoCalculo === 'area') {
                resultado = areaCirculo(radio);
            } else {
                resultado = perimetroCirculo(radio);
            }
            break;

        default:
            alert("Figura no reconocida.");
            return;
    }

    alert(`El resultado es: ${resultado}`);
}

// Llamar a la función principal
calcular(); */



// SEGUNDO EJERCICIO.
/* function obtenerEdades() {
    const edades = [];
    let cantidadMenores = 0, cantidadMayores = 0, cantidadAdultosMayores = 0;
    let edadMasBaja = 120, edadMasAlta = 0, sumaEdades = 0;

    for (let i = 0; i < 10; i++) {
        let edad;
        do {
            edad = parseInt(prompt(`Ingresa la edad de la persona ${i + 1} (1-120 años):`));
            if (edad < 1 || edad > 120) {
                alert("Edad no válida. Debe estar entre 1 y 120.");
            }
        } while (edad < 1 || edad > 120);

        edades.push(edad);
        sumaEdades += edad;
        if (edad < 18) {
            cantidadMenores++;
        } else if (edad >= 60) {
            cantidadAdultosMayores++;
        } else {
            cantidadMayores++;
        }

        if (edad < edadMasBaja) edadMasBaja = edad;
        if (edad > edadMasAlta) edadMasAlta = edad;
    }

    const promedioEdades = sumaEdades / edades.length;

    alert(`Menores de edad: ${cantidadMenores}`);
    alert(`Mayores de edad: ${cantidadMayores}`);
    alert(`Adultos mayores (60+): ${cantidadAdultosMayores}`);
    alert(`Edad más baja: ${edadMasBaja}`);
    alert(`Edad más alta: ${edadMasAlta}`);
    alert(`Promedio de edades: ${promedioEdades.toFixed(2)}`);
}

obtenerEdades(); */

// TERCER EJERCICIO.

/* function obtenerVectorOrdenado(tamano, vectorNum) {
    const vector = [];

    for (let i = 0; i < tamano; i++) {
        let numero;
        do {
            numero = parseInt(prompt(`Ingresa el número ${i + 1} para el vector ${vectorNum}:`));
            if (i > 0 && numero <= vector[i - 1]) {
                alert("El número debe ser mayor que el anterior.");
            }
        } while (i > 0 && numero <= vector[i - 1]);

        vector.push(numero);
    }

    return vector;
}

function mezclarVectores() {
    const vector1 = obtenerVectorOrdenado(5, 1);
    const vector2 = obtenerVectorOrdenado(5, 2);

    const vectorMezclado = vector1.concat(vector2).sort((a, b) => a - b);
    
    alert(`Vector mezclado: ${vectorMezclado}`);
}

mezclarVectores(); */ 

// CUARTO EJERCICIO.

const personas = [];

function agregarPersona() {
    if (personas.length >= 6) {
        alert("Ya se han registrado las 6 personas.");
        return;
    }

    const persona = {
        nombre: prompt("Ingresa el nombre:"),
        cedula: prompt("Ingresa la cédula:"),
        fechaNacimiento: prompt("Ingresa la fecha de nacimiento (DD/MM/AAAA):"),
        correo: prompt("Ingresa el correo electrónico:"),
        ciudadResidencia: prompt("Ingresa la ciudad de residencia:"),
        ciudadOrigen: prompt("Ingresa la ciudad de origen:"),
        cancionesFavoritas: []
    };

    for (let i = 0; i < 3; i++) {
        const artista = prompt(`Ingresa el artista de la canción favorita ${i + 1}:`);
        const titulo = prompt(`Ingresa el título de la canción favorita ${i + 1}:`);
        persona.cancionesFavoritas.push({ artista, titulo });
    }

    personas.push(persona);
    alert("Persona agregada exitosamente.");
}

function mostrarPersona() {
    const posicion = parseInt(prompt("Ingresa la posición de la persona (1-6):")) - 1;

    if (posicion >= 0 && posicion < personas.length) {
        const persona = personas[posicion];
        alert(`Nombre: ${persona.nombre}
Cédula: ${persona.cedula}
Fecha de Nacimiento: ${persona.fechaNacimiento}
Correo: ${persona.correo}
Ciudad de Residencia: ${persona.ciudadResidencia}
Ciudad de Origen: ${persona.ciudadOrigen}
Canciones Favoritas:
1. ${persona.cancionesFavoritas[0].artista} - ${persona.cancionesFavoritas[0].titulo}
2. ${persona.cancionesFavoritas[1].artista} - ${persona.cancionesFavoritas[1].titulo}
3. ${persona.cancionesFavoritas[2].artista} - ${persona.cancionesFavoritas[2].titulo}`);
    } else {
        alert("Posición no válida.");
    }
}

function menu() {
    let opcion;
    do {
        opcion = parseInt(prompt(`Menú:
1. Agregar persona
2. Mostrar persona por posición
3. Salir`));

        switch (opcion) {
            case 1:
                agregarPersona();
                break;
            case 2:
                mostrarPersona();
                break;
            case 3:
                alert("Saliendo...");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (opcion !== 3);
}

menu();

