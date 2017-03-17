//This file contains helper functions not included in jquery.main.js and are meant to be usable throughout the application.

function sideMenuSelect() {

    var selectedNavLi = $('.side-menu > li')

    selectedNavLi.on('click', function () {
        console.log("Ya clicked meh!")
    });
}