function realizarOperacion(operacion) {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var resultado;
        
        if (operacion === 'suma') {
            resultado = num1 + num2;
        } else if (operacion === 'resta') {
            resultado = num1 - num2;
        } else if (operacion === 'multiplicacion') {
            resultado = num1 * num2;
        } else if (operacion === 'division') {
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                document.getElementById("resultado").textContent = "No se puede dividir por cero.";
                return;
            }
        }

        document.getElementById("resultado").textContent = resultado;
    } else {
        document.getElementById("resultado").textContent = "Ingresa números válidos.";
    }
}
