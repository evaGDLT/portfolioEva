new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['principal'],
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
        // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
        //     console.log("esto es al cargar el fullpage")
        //     changeMenu(index);
        //     // console.log(index);
        //     // console.log(slideAnchor);
        //     // console.log(slideIndex)
        // }

});

// function changeMenu(index) {
//     let hovers = document.getElementsByClassName('dropdown');
//     if (index.anchor == "slide1") {
//         hovers[0].classList.add("underline");
//         hovers[1].classList.remove("underline");
//         hovers[2].classList.remove("underline");
//         hovers[3].classList.remove("underline");
//     }
//     if (index.anchor == "slide2") {
//         hovers[1].classList.add("underline");
//         hovers[0].classList.remove("underline");
//         hovers[2].classList.remove("underline");
//         hovers[3].classList.remove("underline");
//     }
//     if (index.anchor == "slide3") {
//         hovers[2].classList.add("underline");
//         hovers[1].classList.remove("underline");
//         hovers[3].classList.remove("underline");
//         hovers[0].classList.remove("underline");
//     }
//     if (index.anchor == "slide4") {
//         hovers[3].classList.add("underline");
//         hovers[1].classList.remove("underline");
//         hovers[2].classList.remove("underline");
//         hovers[0].classList.remove("underline");
//     }

// }

function moveTo(slide) {
    //Si no estoy en el slide de inicio, elimino los hovers para evitar redundancia
    let hovers = document.getElementsByClassName('dropdown');
    if (slide !== 0) {
        for (var i = 0; i < hovers.length; i++) {
            hovers[i].classList.add("no-hover");
            if (i == (slide - 1)) {
                hovers[slide - 1].classList.add("underline")
            } else {
                hovers[i].classList.remove("underline")
            }
        }


    } else {
        for (var i = 0; i < hovers.length; i++) {
            hovers[i].classList.remove("no-hover");
            if (i == 3) {
                hovers[3].classList.add("underline")
            } else {
                hovers[i].classList.remove("underline")
            }
        }

    }

    // hovers[slide].classList.add("underline")
    fullpage_api.moveTo("principal", slide);
}
//Funciones para mostrar el rango de conocimiento de las tecnologias
function hoverTecnologies(element, nStars) {
    element.setAttribute('src', `./imgs/star${nStars}.png`);
}

function unhoverTecnologies(element, tecnology) {
    if (tecnology == "html5") {
        element.setAttribute('src', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png');
    }
    if (tecnology == "css3") {
        element.setAttribute('src', 'http://www.myiconfinder.com/uploads/iconsets/256-256-8b61de4c84033266e15317a6eb9fda2d-css3.png');
    }
    if (tecnology == "sass") {
        element.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-256/sass-13-1175092.png');
    }
    if (tecnology == "js") {
        element.setAttribute('src', 'http://www.cantabriatic.com/wp-content/uploads/2015/11/javascript-shield-logo.png');
    }
    if (tecnology == "angular") {
        element.setAttribute('src', 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/square_256/angular2.png');
    }
    if (tecnology == "node") {
        element.setAttribute('src', 'https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png');
    }
    if (tecnology == "mysql") {
        element.setAttribute('src', 'http://www.tuprogramacion.com/images/mysql.svg');
    }
    if (tecnology == "ionic") {
        element.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/1200px-Ionic_Logo.svg.png');
    }
    if (tecnology == "git") {
        element.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-256/git-225996.png');
    }
    if (tecnology == "cordova") {
        element.setAttribute('src', 'https://miro.medium.com/max/1120/0*uSskDBZlO4EMZm-K.png');
    }

}