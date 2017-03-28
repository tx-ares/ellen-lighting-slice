function sideMenuRouter() { // View Controller 

    //Open Home tab on page load.
    if (!selectedNavLi) {

        $('.side-menu > li:first-child').addClass('active')

        $('.viewer').load('_assets/views/sidenav/home.html', function() {
            chartcreator();
            createFormLink();
        });
    }

    var selectedNavLi = $('.side-menu > li')

    selectedNavLi.on('click', function(e) {
        e.preventDefault();
        console.log(this.getAttribute('id'));
        if (this.getAttribute('id') === 'home') {
            $(this).addClass('active');
            $(this).siblings().removeClass("active");

            //Uses jshelper file
            $('.viewer').load('_assets/views/sidenav/home.html', function() {
                chartcreator();
                createFormLink();
            });

            console.log("chart rendered!")
        }

        if (this.getAttribute('id') === 'admin') {
            $(this).addClass('active');
            // $('.tab-content tab-pane:first-child').addClass('active')
            $(this).siblings().removeClass("active");

            $('.viewer').load('_assets/views/sidenav/admin.html', function() {
                // $("#tabs").tabs();
                // $('div#tabProperties').addClass('active');
                console.log("default tabProperties addClass -> active")
                // console.log(".tabs() init")
            })

        }

        if (this.getAttribute('id') === 'reports') {
            $(this).addClass('active');
            $(this).siblings().removeClass("active");

            $('.viewer').load('_assets/views/sidenav/reports.html')
        }

        console.log("Routed.")
    });
}

sideMenuRouter();
