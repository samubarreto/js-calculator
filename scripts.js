let cálculo = localStorage.getItem('cálculo') || '';
let cálculoElement = document.querySelector('.js-calculus');
cálculoElement.innerHTML = localStorage.getItem('cálculo') || '';

function calcular(dígito) {
if (dígito === ' = ') {
    localStorage.setItem('cálculo', cálculo);
    cálculoElement.innerHTML += ` = ${eval(cálculo)}`;

} else if (dígito === 'C') {
    cálculo = '';
    localStorage.removeItem('cálculo');
    cálculoElement.innerHTML = '';

} else {
    cálculo += dígito;
    localStorage.setItem('cálculo', cálculo);
    cálculoElement.innerHTML += dígito;
}
}