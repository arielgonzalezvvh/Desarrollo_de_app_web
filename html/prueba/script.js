function cambioVideo(elemento) {
    const mainVideo = document.getElementById("mainVideo");
    let rutaMainVideo = mainVideo.src;
    let videoPequeno = elemento.src;

    // Intercambiar los src
    elemento.src = rutaMainVideo;
    mainVideo.src = videoPequeno;

    // Intercambio de texto
    const textoMain = document.getElementById("textoMain");
    let contentTextoMain = textoMain.textContent;
    const textoPequeno = elemento.nextElementSibling; // el span al lado del video
    let contentTextoPequeno = textoPequeno.textContent;

    textoMain.textContent = contentTextoPequeno;
    textoPequeno.textContent = contentTextoMain;
}


function cambioVideoYoutube(videoId, title) {
    const iframe = document.getElementById("mainVideo");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    const titleElement = document.getElementById("textoMain");
    if (titleElement) {
        titleElement.textContent = title;
    }
}
