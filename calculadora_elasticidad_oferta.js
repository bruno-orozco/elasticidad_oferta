function elasticidadOferta() {

    let p_inicial = document.getElementById("precio_inicial").value;
    let p_final = document.getElementById("precio_final").value;
    let q_inicial = document.getElementById("cantidad_inicial").value;
    let q_final = document.getElementById("cantidad_final").value;

    let resultadoTxt = document.getElementById("resultado");

    resultado = ((q_final - q_inicial) / (q_inicial)) / ((p_final - p_inicial) / (p_inicial));

    resultadoTxt.innerText = "La elasticidad precio de la oferta es igual a " + resultado.toFixed(2);

    switch (resultado) {
        case resultado == 0:
            resultado = "La elasticidad precio de la oferta es perfectamente inelástica."
            break;
        case resultado >= 0 || resultado <= 1:
            resultado = "La elasticidad precio de la oferta es inelástica."
        default:
            break;
    }

}
