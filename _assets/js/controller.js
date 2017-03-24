function sideMenuRouter() { // View Controller

    var selectedNavLi = $('.side-menu > li')

    selectedNavLi.on('click', function() {
        console.log(this.getAttribute('id'));
        if (this.getAttribute('id') === 'home') {

            //Uses jshelper file
            $('.viewer').load('_assets/views/sidenav/home.html', function() {
                chartcreator()
            });
            // chartcreator();
            console.log("chart rendered!")

        }

        if (this.getAttribute('id') === 'admin') {
            $('.viewer').load('_assets/views/sidenav/admin.html')

        }

        if (this.getAttribute('id') === 'reports') {
            $('.viewer').load('_assets/views/sidenav/reports.html')

        }

        console.log("Routed.")
            // document.querySelector(".viewer").innerHTML = html

    });
}

sideMenuRouter();
