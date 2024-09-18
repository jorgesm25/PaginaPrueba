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

<!-- JavaScript para el carrusel -->

    var slideIndex = 1;
    showSlides(slideIndex);

    function nextImage() {
        showSlides(slideIndex += 1);
    }

    function prevImage() {
        showSlides(slideIndex -= 1);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("iframe");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
    }

