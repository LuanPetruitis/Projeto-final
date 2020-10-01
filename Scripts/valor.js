var resultado = document.querySelector('#resultado');
var input = document.querySelector('.input');

function iniciaModal(modoID) {
    const modal = document.getElementById(modoID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', function(evento) {
        if (evento.target.id == 'fechar') {
            modal.classList.remove('mostrar');
            resultado.innerHTML = '';
            input.value = '';
        }
    })
}

const simulador = document.querySelector('.simulador')
simulador.addEventListener('click', function() {
    iniciaModal('valor');
})

function Calcular() {
    var tempo = document.querySelector('#meses').value;
    resultado.innerHTML = '';
    if (tempo >= 24) {
        var mes = 60;
        var total = parseFloat(mes) * parseFloat(tempo);
    } else if (tempo < 24 && tempo >= 12) {
        var mes = 70;
        var total = parseFloat(mes) * parseFloat(tempo);
    } else {
        var mes = 80;
        var total = parseFloat(mes) * parseFloat(tempo);
    }
    input.value = '';
    resultado.innerHTML = `<p>O valor total de ${tempo} meses é R$ ${total}. Terá que ser pago R$ ${mes} por mês</p>`;
}