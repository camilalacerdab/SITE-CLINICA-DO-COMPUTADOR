
// CARROSSEL DE AVALIAÇÕES

const carousel = document.querySelector('.reviews-carousel');
const arrowLeft = document.querySelector('.carousel-arrow-left');
const arrowRight = document.querySelector('.carousel-arrow-right');

function scrollAmount() {
    const card = carousel.querySelector('.review-card');
    return card ? card.offsetWidth + 24 : 320;
}

arrowLeft.addEventListener('click', () => {
    carousel.scrollBy({
        left: -scrollAmount(),
        behavior: 'smooth'
    });
});

arrowRight.addEventListener('click', () => {
    carousel.scrollBy({
        left: scrollAmount(),
        behavior: 'smooth'
    });
});

// CONTADORES DA TIMELINE

function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 3000;
    const start = performance.now();

    function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        el.textContent =
            Math.floor(target * eased).toLocaleString('pt-BR') + suffix;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

// ANIMAÇÃO DA TIMELINE

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            document.querySelector('.timeline-progress').style.width = '100%';

            const items = document.querySelectorAll('.timeline-item');

            items.forEach((item, i) => {
                setTimeout(() => {

                    item.classList.add('active');

                    const number = item.querySelector('.timeline-number');

                    if (number) {
                        animateCounter(number);
                    }

                }, i * 450);
            });

            timelineObserver.unobserve(
                document.querySelector('.timeline')
            );
        }
    });
}, {
    threshold: 0.4
});

timelineObserver.observe(
    document.querySelector('.timeline')
);

// MAPAS - SALVADOR / LAURO DE FREITAS

const mapUrls = {
    salvador: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.8382777125607!2d-38.37208592955464!3d-12.95042873142942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716177d9a82c2cf%3A0x1dfc97d1922794e3!2sCl%C3%ADnica%20do%20Computador!5e1!3m2!1spt-BR!2sbr!4v1787277229207!5m2!1spt-BR!2sbr',

    lauro: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3984198538774!2d-38.311636829563334!3d-12.882083030198507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7163fe65031e9a7%3A0xff6bb661aea42cc2!2sCl%C3%ADnica%20do%20Computador%20e%20Notebooks!5e0!3m2!1spt-BR!2sbr!4v1787277361102!5m2!1spt-BR!2sbr'
};

document.querySelectorAll('.map-tab').forEach(tab => {

    tab.addEventListener('click', () => {

        document
            .querySelectorAll('.map-tab')
            .forEach(t => t.classList.remove('active'));

        tab.classList.add('active');

        document.getElementById('mapFrame').src =
            mapUrls[tab.dataset.map];
    });

});