cálculoElement = document.querySelector('.js-calculus');
cálculoElement.innerHTML = 'Hello World!';
let cálculo = '';
let verificador = false;
var tema = localStorage.getItem('tema') || 'LIGHT';

const botaoTema = document.querySelector('.js-change-theme');
const themeIcon = document.querySelector('.js-theme-icon');
const bgColor = document.querySelector('.js-body-theme');

const mainContainer = document.querySelector('.js-main-container');

const botaoEqual = document.querySelector('.js-equal-button');
const botaoC = document.querySelector('.js-C-button');
const botaoParênteses1 = document.querySelector('.js-P1-button');
const botaoParênteses2 = document.querySelector('.js-P2-button');
const botaoDivide = document.querySelector('.js-divide-button');
const botaoMultiplica = document.querySelector('.js-mult-button');
const botaoMenos = document.querySelector('.js-menos-button');
const botaoMais = document.querySelector('.js-mais-button');

if (tema === 'DARK') {
    tema = 'LIGHT'
    alterarTema();
}

function alterarTema() {
    if (tema === 'LIGHT') {
        // console.log('Switching to DARK theme');
        tema = 'DARK'
        localStorage.setItem('tema', 'DARK');

        botaoTema.classList.add('change-theme-dark')
        botaoTema.innerHTML = (`<img src="theme-icon-sun.png" alt="light-theme-icon" style="height:17px; margin: 0px 10px;" class="theme-icon js-theme-icon">
        Change to light mode`) 
        
        bgColor.classList.add('bodyTheme2');
        mainContainer.classList.add('main-container2');

        botaoEqual.classList.add('equal2');
        botaoParênteses1.classList.add('special2');
        botaoParênteses2.classList.add('special2');
        botaoDivide.classList.add('special2');
        botaoMultiplica.classList.add('special2');
        botaoMenos.classList.add('special2');
        botaoMais.classList.add('special2');
        botaoC.classList.add('special2');

    } else {
        // console.log('Switching to LIGHT theme');
        tema = 'LIGHT'
        localStorage.setItem('tema', 'LIGHT');

        botaoTema.classList.remove('change-theme-dark')
        botaoTema.innerHTML = (`<img src="theme-icon-moon.png" alt="dark-theme-icon" style="height:17px; margin: 0px 10px; opacity: 0.85;" class="theme-icon js-theme-icon">
        Change to dark mode`)

        bgColor.classList.remove('bodyTheme2');
        mainContainer.classList.remove('main-container2');

        botaoEqual.classList.remove('equal2');
        botaoParênteses1.classList.remove('special2');
        botaoParênteses2.classList.remove('special2');
        botaoDivide.classList.remove('special2');
        botaoMultiplica.classList.remove('special2');
        botaoMenos.classList.remove('special2');
        botaoMais.classList.remove('special2');
        botaoC.classList.remove('special2');
    }
    // console.log('Current Theme:', tema);
};

function calcular(dígito) {
    if (dígito === ' = ') {
        if (!verificador) {
            cálculoElement.innerHTML = '';
            verificador = true
        }
        // localStorage.setItem('cálculo', cálculo);
        try {
            cálculoElement.innerHTML += ` = ${eval(cálculo)}`;
        } catch (error) {
            cálculoElement.innerHTML += ` = ERRO`;
        }
    
    } else if (dígito === 'C') {
        cálculo = '';
        verificador = false
        // localStorage.removeItem('cálculo');
        cálculoElement.innerHTML = 'Hello World!';
    
    } else {
        if (!verificador) {
            cálculoElement.innerHTML = '';
            verificador = true
        }
        cálculo += dígito;
        // localStorage.setItem('cálculo', cálculo);
        cálculoElement.innerHTML += dígito;
    }
}   

function detectKeydownEnter(event) {
    if (event.key === '0') {
        calcular('0');
    } else if (event.key === '1') {
        calcular('1');
    } else if (event.key === '2') {
        calcular('2');
    } else if (event.key === '3') {
        calcular('3');
    } else if (event.key === '4') {
        calcular('4');
    } else if (event.key === '5') {
        calcular('5');
    } else if (event.key === '6') {
        calcular('6');
    } else if (event.key === '7') {
        calcular('7');
    } else if (event.key === '8') {
        calcular('8');
    } else if (event.key === '9') {
        calcular('9');
    } else if (event.key === '=' || event.key === 'enter') {
        calcular(' = ');
    } else if (event.key === 'c' || event.key === 'C') {
        calcular('C');
    } else if (event.key === '+') {
        calcular(' + ');
    } else if (event.key === '-') {
        calcular(' - ');
    } else if (event.key === '/') {
        calcular(' / ');
    } else if (event.key === '*') {
        calcular(' * ');
    } else if (event.key === '.') {
        calcular('.');
    } else if (event.key === '(') {
        calcular(' ( ');
    } else if (event.key === ')') {
        calcular(' ) ');
    }
}    