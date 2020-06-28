new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['principal'],
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
});


function moveTo(slide) {
    console.log("me he metido")
    fullpage_api.moveTo("principal", slide);
}

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

function hoverProject(element, tipoRepo) {

}

function unhoverProject(element) {
    element.setAttribute('src', `./imgs/portfolio.png`);
}