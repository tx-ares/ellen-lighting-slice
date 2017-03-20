function sideMenuRouter() { // View Controller

    var selectedNavLi = $('.side-menu > li')

    selectedNavLi.on('click', function() {
        console.log(this.getAttribute('id'));
        var html
        if (this.getAttribute('id') === 'home') {
            console.log("home selected")

            html = '<div id="chartContainer"></div>'
            document.querySelector(".viewer").innerHTML = html;

            function chartcreate() {
                var chart = new CanvasJS.Chart("chartContainer", {
                    title: {
                        text: "Composition of Internet Traffic in North America",
                        horizontalAlign: "right"
                    },
                    axisX: {
                        tickThickness: 0,
                        interval: 1,
                        intervalType: "year"
                    },
                    animationEnabled: true,
                    toolTip: {
                        shared: true
                    },
                    axisY: {
                        lineThickness: 0,
                        tickThickness: 0,
                        interval: 20
                    },
                    legend: {
                        verticalAlign: "center",
                        horizontalAlign: "left"
                    },

                    data: [{
                            name: "Real-Time",
                            showInLegend: true,
                            type: "stackedColumn100",
                            color: "#004B8D ",
                            dataPoints: [
                                { x: new Date(2009, 0), y: 30 },
                                { x: new Date(2010, 0), y: 40 },
                                { x: new Date(2011, 0), y: 50 },
                                { x: new Date(2012, 0), y: 60 }
                            ]
                        }, {
                            name: "Web Browsing",
                            showInLegend: true,
                            type: "stackedColumn100",
                            color: "#0074D9 ",
                            dataPoints: [
                                { x: new Date(2009, 0), y: 40 },
                                { x: new Date(2010, 0), y: 28 },
                                { x: new Date(2011, 0), y: 18 },
                                { x: new Date(2012, 0), y: 12 }
                            ]
                        }, {
                            name: "File Sharing",
                            showInLegend: true,
                            type: "stackedColumn100",
                            color: "#4192D9 ",
                            dataPoints: [
                                { x: new Date(2009, 0), y: 15 },
                                { x: new Date(2010, 0), y: 15 },
                                { x: new Date(2011, 0), y: 12 },
                                { x: new Date(2012, 0), y: 10 }
                            ]
                        }, {
                            name: "Other",
                            showInLegend: true,
                            type: "stackedColumn100",
                            color: "#7ABAF2 ",
                            dataPoints: [
                                { x: new Date(2009, 0), y: 15 },
                                { x: new Date(2010, 0), y: 17 },
                                { x: new Date(2011, 0), y: 20 },
                                { x: new Date(2012, 0), y: 18 }
                            ]
                        }

                    ]
                });

                chart.render();
            }


            chartcreate();
            console.log("chart rendered!")


        }

        if (this.getAttribute('id') === 'admin') {
            html = "admin view"
        }

        if (this.getAttribute('id') === 'reports') {
            html = "reports view"
        }

        console.log("Routed.")
        // document.querySelector(".viewer").innerHTML = html

    });
}

sideMenuRouter();
