function changeChart(chart) {
    document.getElementById('chart-iframe').src = chart;
}



let index = 0;

function showImage(n) {
    const slider = document.querySelector('.slider');
    const iframes = document.querySelectorAll('.slider iframe');
    const totalImages = iframes.length;

    if (n >= totalImages) { index = 0; }
    if (n < 0) { index = totalImages - 1; }
    slider.style.transform = `translateX(${-index * (100 / totalImages)}%)`;
}

function prevImage() {
    index--;
    showImage(index);
}

function nextImage() {
    index++;
    showImage(index);
}

// Inicializar la galería
showImage(index);

