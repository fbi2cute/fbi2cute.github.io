window.addEventListener("click", ()=> {
    const song = new Audio('song.mp3');
    document.querySelector('.before').remove();
    document.querySelector('.after').style.display = 'block';
    song.play();
});