let index = 1
let slideImagenes = document.getElementsByClassName("carrusel")

slide(index)

function push(n){
    slide(index += n)
}

function slide(n){

    if(n > slideImagenes.length){
        index = 1
    }

    if(n < 1){
        index = slideImagenes.length
    }

    //RECORRE TODAS IMAGENES
    for(i=0; i<slideImagenes.length; i++){
        slideImagenes[i].style.display= "none"
    }
    slideImagenes[index-1].style.display="block"
}
