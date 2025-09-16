function ocultarLoader() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
        content.classList.add('visible');
    }, 500);
}

function mostrarLoader() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    
    
    content.classList.remove('visible');
    
    
    loader.style.display = 'flex';
    setTimeout(() => {
        loader.style.opacity = '1';
    }, 10);
}

function simularCarga() {-
    mostrarLoader();
    setTimeout(() => {
        ocultarLoader();
    }, 2000)
}

window.addEventListener('load', () => {
    setTimeout(ocultarLoader, 1500);
});