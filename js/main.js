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

// const tecnologiesHover = () => {
//     const tecnology1 = document.querySelectorAll('.tecnology');
//     // const project2 = document.querySelectorAll('.project')[1];
//     // const project3 = document.querySelectorAll('.project')[2];
//     // const project4 = document.querySelectorAll('.project')[3];

//     const title1 = document.querySelector('.title1');
//     // const title2 = document.querySelector('.title2');
//     // const title3 = document.querySelector('.title3');
//     // const title4 = document.querySelector('.title4');

//     title1.classList.add('titleHide');
//     // title2.classList.add('titleHide')
//     // title3.classList.add('titleHide')
//     // title4.classList.add('titleHide')

//     tecnology1.addEventListener("mouseover", event => {
//         if (title1.classList.contains('titleHide')) {
//             title1.classList.remove('titleHide')
//             title1.classList.add('titleShow')
//         }
//     });

//     tecnology1.addEventListener("mouseout", event => {
//         if (title1.classList.contains('titleShow')) {
//             title1.classList.remove('titleShow')
//             title1.classList.add('titleHide')
//         }
//     });

//     // project2.addEventListener("mouseover", event => {
//     //     if (title2.classList.contains('titleHide')) {
//     //         title2.classList.remove('titleHide')
//     //         title2.classList.add('titleShow')
//     //     }
//     // });

//     // project2.addEventListener("mouseout", event => {
//     //     if (title2.classList.contains('titleShow')) {
//     //         title2.classList.remove('titleShow')
//     //         title2.classList.add('titleHide')
//     //     }
//     // });

//     // project3.addEventListener("mouseover", event => {
//     //     if (title3.classList.contains('titleHide')) {
//     //         title3.classList.remove('titleHide')
//     //         title3.classList.add('titleShow')
//     //     }
//     // });

//     // project3.addEventListener("mouseout", event => {
//     //     if (title3.classList.contains('titleShow')) {
//     //         title3.classList.remove('titleShow')
//     //         title3.classList.add('titleHide')
//     //     }
//     // });

//     // project4.addEventListener("mouseover", event => {
//     //     if (title4.classList.contains('titleHide')) {
//     //         title4.classList.remove('titleHide')
//     //         title4.classList.add('titleShow')
//     //     }
//     // });

//     // project4.addEventListener("mouseout", event => {
//     //     if (title4.classList.contains('titleShow')) {
//     //         title4.classList.remove('titleShow')
//     //         title4.classList.add('titleHide')
//     //     }
//     // });
// }