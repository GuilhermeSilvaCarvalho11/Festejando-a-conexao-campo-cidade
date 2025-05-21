// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animações ao rolar a página (fade-in)
const elementosAnimar = document.querySelectorAll('.animar');

function animarScroll() {
    elementosAnimar.forEach(el => {
        const posicaoTop = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.8;

        if (posicaoTop < alturaTela) {
            el.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);

// Carrossel simples (substitua pelas imagens reais)
let indiceAtual = 0;
const imagens = [
    'img/campo1.jpg',
    'img/campo2.jpg',
    'img/campo3.jpg'
];

function mostrarImagem(indice) {
    const carrossel = document.getElementById('carrossel-img');
    carrossel.src = imagens[indice];
}

function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
}

function anteriorImagem() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(indiceAtual);
}

// Timer automático
setInterval(proximaImagem, 5000);
