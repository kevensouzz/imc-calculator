function calcular() {
    let height = document.getElementById('campo-altura').value / 100

    let weight = document.getElementById('campo-peso').value

    let imc = weight / height ** 2

    document.getElementById('campo-resultado-imc').innerHTML = imc.toFixed(3)

    if (imc < 18.5) {
        document.getElementById('campo-resultado-text').innerHTML = 'ABAIXO DO PESO IDEAL!'
    }

    else if (imc < 24.9) {
        document.getElementById('campo-resultado-text').innerHTML = 'PESO IDEAL!'
    }

    else if (imc < 39.9) {
        document.getElementById('campo-resultado-text').innerHTML = 'ACIMA DO PESO IDEAL!'
    }

    else if (imc > 39.9) {
        document.getElementById('campo-resultado-text').innerHTML = 'MUITO ACIMA DO PESO IDEAL!'
    }
}