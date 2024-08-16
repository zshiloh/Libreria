let index = 1;
let slideImagenes = document.getElementsByClassName("carrusel fade");
let puntos = document.getElementsByClassName("punto");

slide(index);

let timer = setInterval(() => push(1), 3500);

function push(n) {
    slide(index += n);
    resetTimer();
}

function irASlide(n) {
    slide(index = n);
    resetTimer();
}

function slide(n) {
    if (n > slideImagenes.length) {
        index = 1;
    }
    if (n < 1) {
        index = slideImagenes.length;
    }

    for (let i = 0; i < slideImagenes.length; i++) {
        slideImagenes[i].style.display = "none";
    }
    for (let i = 0; i < puntos.length; i++) {
        puntos[i].classList.remove("active");
    }
    slideImagenes[index - 1].style.display = "block";
    puntos[index - 1].classList.add("active");
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => push(1), 3000);
}