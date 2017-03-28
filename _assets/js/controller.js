function sideMenuRouter() { // View Controller 

    //Open Home tab on page load.
    if (!selectedNavLi) {
        // $( '.side-menu > li#home' ).trigger( "click" );

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
            // chartcreator();

            console.log("chart rendered!")

        }

        if (this.getAttribute('id') === 'admin') {
            $(this).addClass('active');
                        $(this).siblings().removeClass("active");

            $('.viewer').load('_assets/views/sidenav/admin.html', function() {

                $("#tabs").tabs();
                console.log(".tabs() init")
            })


        }

        if (this.getAttribute('id') === 'reports') {
            $(this).addClass('active');
                        $(this).siblings().removeClass("active");


            $('.viewer').load('_assets/views/sidenav/reports.html')

        }

        console.log("Routed.")
            // document.querySelector(".viewer").innerHTML = html
    });
}

sideMenuRouter();
