let cálculo = localStorage.getItem('cálculo') || '';
let cálculoElement = document.querySelector('.js-calculus');
cálculoElement.innerHTML = localStorage.getItem('cálculo') || '';
var tema = 'LIGHT'

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

const botaoTema = document.querySelector('.js-change-theme');
const themeIcon = document.querySelector('.js-theme-icon')

function alterarTema() {
    if (tema === 'LIGHT') {
        tema = 'DARK'

        botaoTema.classList.add('change-theme-dark')
        botaoTema.innerHTML = (`<img src="light-theme-icon.png" alt="light-theme-icon" style="height:17px; margin: 0px 5px;" class="theme-icon js-theme-icon">
        Change to light mode`) } else {
        tema = 'LIGHT'

        botaoTema.classList.remove('change-theme-dark')
        botaoTema.innerHTML = (`<img src="dark-theme-icon.png" alt="dark-theme-icon" style="height:17px; margin: 0px 5px;" class="theme-icon js-theme-icon">
        Change to dark mode`)
    }
};
