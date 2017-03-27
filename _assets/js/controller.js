function sideMenuRouter() { // View Controller 

    if (!selectedNavLi) {
        $('.viewer').load('_assets/views/sidenav/home.html', function() {
            chartcreator();
            createFormLink();
        });
    }

    var selectedNavLi = $('.side-menu > li')

    selectedNavLi.on('click', function() {
        console.log(this.getAttribute('id'));
        if (this.getAttribute('id') === 'home') {

            //Uses jshelper file
            $('.viewer').load('_assets/views/sidenav/home.html', function() {
                chartcreator();
                createFormLink();
            });
            // chartcreator();
            console.log("chart rendered!")

        }

        if (this.getAttribute('id') === 'admin') {
            $('.viewer').load('_assets/views/sidenav/admin.html', function() {

                $("#tabs").tabs();
                console.log(".tabs() init")
            })


        }

        if (this.getAttribute('id') === 'reports') {
            $('.viewer').load('_assets/views/sidenav/reports.html')

        }

        console.log("Routed.")
            // document.querySelector(".viewer").innerHTML = html
    });
}

sideMenuRouter();
