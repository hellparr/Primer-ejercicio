// Funciones para calcular el perímetro y el área de cada figura

function perimetroTriangulo(a, b, c) {
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
calcular();