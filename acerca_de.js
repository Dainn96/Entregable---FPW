document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let counter = 0;
    const size = images[0].clientWidth;
    
    // Configuración inicial
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    // Listeners para botones
    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - 1) return;
        counter++;
        slide.style.transition = "transform 0.5s ease";
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
    
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        slide.style.transition = "transform 0.5s ease";
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
    
    // Reiniciar al llegar al final
    slide.addEventListener('transitionend', () => {
        if (images[counter].id === 'last-clone') {
            slide.style.transition = "none";
            counter = images.length - 2;
            slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (images[counter].id === 'first-clone') {
            slide.style.transition = "none";
            counter = images.length - counter;
            slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
    
    // Responsive
    window.addEventListener('resize', () => {
        const newSize = images[0].clientWidth;
        slide.style.transition = "none";
        slide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });
});