function sideMenuRouter() { // View Controller

    var selectedNavLi = $('.side-menu > li')

    selectedNavLi.on('click', function() {
        console.log(this.getAttribute('id'));
        var html
        if (this.getAttribute('id') === 'home') {
            console.log("home selected")

            html = '<div class="nobs-container">'
            html += '<div class="nobs-row">'
            html += '<div class="col-33">'
            html += '<div id="barchartContainer"></div>'
            html += '</div>' //close col-33
            html += '<div class="col-33">'
            html += '<span class="order-num"> 28 </span>'
            html += '<br />'
            html += '<span class="order-sub"> Orders this Month </span>'
            html += '</div>' //close col-33
            html += '<div class="col-33">'
            html += '<div id="piechartContainer"></div>'
            html += '</div>' //close col-33
            html += '</div>' // close row
            html += '</div>' // close container

            document.querySelector(".viewer").innerHTML = html;

            function chartcreator() { // Refactor later for all charts to be in array, then use forEach to use .render(); 
                var barchart = new CanvasJS.Chart("barchartContainer", {
                    title: {
                        horizontalAlign: "right"
                    },
                    axisX: {
                        tickThickness: 0,
                        interval: 1,
                        intervalType: "month"
                    },
                    animationEnabled: true,
                    toolTip: {
                        shared: true
                    },
                    axisY: {
                        title: "Amount ($)",
                        lineThickness: 0,
                        tickThickness: 0,
                        interval: 20
                    },
                    legend: {
                        verticalAlign: "center",
                        horizontalAlign: "left"
                    },

                    data: [{
                            // name: "Real-Time",
                            showInLegend: false,
                            type: "stackedColumn100",
                            color: "#970f0f ",
                            dataPoints: [
                                { x: new Date(1), y: 30 },
                                { x: new Date(2), y: 40 },
                                { x: new Date(3), y: 50 },
                                { x: new Date(4), y: 60 },
                                { x: new Date(5), y: 60 },
                                { x: new Date(6), y: 60 },
                                { x: new Date(7), y: 60 },
                                { x: new Date(8), y: 60 },
                                { x: new Date(9), y: 60 },
                                { x: new Date(10), y: 60 },
                                { x: new Date(11), y: 60 },
                                { x: new Date(12), y: 60 }
                            ]
                        }, {
                            // name: "Web Browsing",
                            showInLegend: false,
                            type: "stackedColumn100",
                            color: "#eb2020 ",
                            dataPoints: [
                                { x: new Date(1), y: 30 },
                                { x: new Date(2), y: 40 },
                                { x: new Date(3), y: 50 },
                                { x: new Date(4), y: 60 },
                                { x: new Date(5), y: 60 },
                                { x: new Date(6), y: 60 },
                                { x: new Date(7), y: 60 },
                                { x: new Date(8), y: 60 },
                                { x: new Date(9), y: 60 },
                                { x: new Date(10), y: 60 },
                                { x: new Date(11), y: 60 },
                                { x: new Date(12), y: 60 }
                            ]
                        }, {
                            // name: "File Sharing",
                            showInLegend: false,
                            type: "stackedColumn100",
                            color: "#878686 ",
                            dataPoints: [
                                { x: new Date(1), y: 30 },
                                { x: new Date(2), y: 40 },
                                { x: new Date(3), y: 50 },
                                { x: new Date(4), y: 60 },
                                { x: new Date(5), y: 60 },
                                { x: new Date(6), y: 60 },
                                { x: new Date(7), y: 60 },
                                { x: new Date(8), y: 60 },
                                { x: new Date(9), y: 60 },
                                { x: new Date(10), y: 60 },
                                { x: new Date(11), y: 60 },
                                { x: new Date(12), y: 60 }
                            ]
                        }, {
                            // name: "Other",
                            showInLegend: false,
                            type: "stackedColumn100",
                            color: "#c2c2c2 ",
                            dataPoints: [
                                { x: new Date(1), y: 30 },
                                { x: new Date(2), y: 40 },
                                { x: new Date(3), y: 50 },
                                { x: new Date(4), y: 60 },
                                { x: new Date(5), y: 60 },
                                { x: new Date(6), y: 60 },
                                { x: new Date(7), y: 60 },
                                { x: new Date(8), y: 60 },
                                { x: new Date(9), y: 60 },
                                { x: new Date(10), y: 60 },
                                { x: new Date(11), y: 60 },
                                { x: new Date(12), y: 60 }
                            ]
                        }

                    ]
                });

                var piechart = new CanvasJS.Chart("piechartContainer", {
                    theme: "theme2",
                    data: [{
                        type: "pie",
                        showInLegend: true,
                        toolTipContent: "{y} - #percent %",
                        yValueFormatString: "#,##0,,.## Million",
                        legendText: "{indexLabel}",
                        dataPoints: [
                            { y: 4181563, indexLabel: "", color: "#970f0f " },
                            { y: 2175498, indexLabel: "", color: "#eb2020 "},
                            { y: 3125844, indexLabel: "", color: "#878686 "},
                            { y: 1176121, indexLabel: "", color: "#c2c2c2 "}
                        ]
                    }]
                });

                barchart.render();
                piechart.render();

            }
            chartcreator();
            console.log("chart rendered!")

        }

        if (this.getAttribute('id') === 'admin') {
            html = "admin view"
            document.querySelector(".viewer").innerHTML = html;

        }

        if (this.getAttribute('id') === 'reports') {
            html = "reports view"
            document.querySelector(".viewer").innerHTML = html;

        }

        console.log("Routed.")
            // document.querySelector(".viewer").innerHTML = html

    });
}

sideMenuRouter();
