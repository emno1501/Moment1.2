//Ändra färg på header när man scrollar nedåt
window.onscroll = function () {
    var header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('headerBackground');
    } else {
        header.classList.remove('headerBackground');
    }
}
