console.log(window.innerWidth);
let $winwid = window.innerWidth;
let main = document.getElementsByClassName(".main");

function adaptive() {

    if (window.innerWidth >= 1400 ) {

    } else if (window.innerWidth >= 1199 || ) {

    } else if (window.innerWidth >= 991) {
        
    } else if (window.innerWidth >= 767) {
        
    } else if ((window.innerWidth >= 480) || (window.innerWidth <= 767)) {
        resizemain480();
    }
}

window.addEventListener('resize', (e) => {
    adaptive();
});

function resizemain480() {
    main.style.width = `{$winwid}`;
}