function sideMenuRouter() { // View Controller

    var selectedNavLi = $('.side-menu > li')

    selectedNavLi.on('click', function () {
        console.log(this.getAttribute('id'));
        var html
        if (this.getAttribute('id') === 'home') {
            console.log("home selected")
            html = "home view"
        }

        if (this.getAttribute('id') === 'admin') {
            html = "admin view"
        }

        if (this.getAttribute('id') === 'reports') {
            html = "reports view"
        }

        document.querySelector(".viewer").innerHTML = html

    });
}

sideMenuRouter();