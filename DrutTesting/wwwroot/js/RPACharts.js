function DisplayBarChartNew(data, options, divId, canvasId, divCardId, arrChartData, isDashboard, inCard) {


    

    var canvas = document.getElementById(canvasId);
    var canvasBar = $(canvas)[0].getContext('2d');
    var myBarChart = new Chart(canvasBar, {
        options: options,
        data: data,
        type: 'bar'
    });
}

function DisplayPieChartNew(data, options, divId, canvasId, chartType, divCardId, arrChartData, isDashboard, inCard) {

    var PieChartType = chartType;

    var canvas = document.getElementById(canvasId);
    var canvasPie = $(canvas)[0].getContext('2d');

    var myPieChart = new Chart(canvasPie, {
        options: options,
        data: data,
        type: PieChartType,
    });
}

function DisplayLineChartNew(data, options, divId, canvasId, divCardId, arrChartData, isDashboard, inCard) {


    var canvas = document.getElementById(canvasId);
    var canvasLine = $(canvas)[0].getContext('2d');

    var myLineChart = new Chart(canvasLine, {
        options: options,
        data: data,
        type: 'line'
    });
}

function DisplayScatterChartNew(data, options, divId, canvasId, divCardId, arrChartData, isDashboard, inCard) {


    var canvas = document.getElementById(canvasId);
    var canvasScatter = $(canvas)[0].getContext('2d');

    var myScatterChart = new Chart(canvasScatter, {
        options: options,
        data: data,
        type: 'scatter'
    });
}

function Display3DColumnChartNew(data, divId)
{

    var keyslist = Object.keys(data[0]);


    //Add licensing
    am4core.addLicense("ch-custom-attribution");
    // Create chart instance
    var chart = am4core.create(divId, am4charts.XYChart3D);

    ////debugger;


    // Add data
    chart.data = data;


        //Add chart title
    var title = chart.titles.create();
    title.text = "3dColumnChart"
    title.fontSize = 25;
    title.marginBottom = 30;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = `${keyslist[0]}`;
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 100;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";


    //var series = chart.series.push(new am4charts.ColumnSeries3D());
    //series.dataFields.valueY = keyslist[1];
    //series.dataFields.categoryX = keyslist[0];

    //series.columns.template.adapter.add('tooltipText', function (text, target)
    //{
    //    //debugger;
    //    var data = target.tooltipDataItem.dataContext;
    //    if (data.Load != null)
    //        return "Load nº: {categoryX}: [bold]{valueY}[/]";
    //    else
    //        return "Start: {categoryX}: [bold]{valueY}[/]";
    //});

    //debugger;
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series_executable = "";

    for (var i = 1; i <= keyslist.length - 1; i++) {
        series_executable += `var series${i} = chart.series.push(new am4charts.ColumnSeries3D());\n`;
        series_executable += `series${i}.dataFields.valueY = "${keyslist[i]}";\n`;
        series_executable += `series${i}.dataFields.categoryX = "${keyslist[0]}";\n`;
        series_executable += `series${i}.name = "${keyslist[i]}";\n`;
        series_executable += `series${i}.tooltipText = "${keyslist[i]}: [bold]{valueY}[/]";\n`;
        series_executable += `series${i}.columns.template.fillOpacity = 0.9;\n`;
        series_executable += `series${i}.clustered = true;\n`; //non-clustered - false, clustered - true
    }

    eval(series_executable);

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;
}

function DisplaySunBurstChartNew(data, divId, canvasId, arrChartData, isDashboard, divCardId, inCard) {
    //debugger;
    //@* console.log(arrChartData.ChartId);*@
    //    @* console.log(data);*@
        //am4core.useTheme(am4themes_spiritedaway);
        //am4core.useTheme(am4themes_animated);
        // Themes end

        // create chart

        var chartmaster = JSON.parse($('#hChartMasters').val());
    var nodecount = 0;
    for (var i = 0; i < chartmaster.length; i++) {
        if (chartmaster[i].lstChartDetails[0].ChartId === arrChartData.ChartId) {
            nodecount = chartmaster[i].lstChartDetails.length;
            //@* console.log(chartmaster[i].lstChartDetails);*@
            //    @*return;*@
            }
    }

    //@* console.log(nodecount);*@

    //    @* console.log(chartmaster[0].lstChartDetails);*@


    //    @* Remove LOGO *@
    //am4core.addLicense("ch-custom-attribution");

    //@* console.log(nodecount);*@

    //@*var span = document.createElement("span");
    //span.innerHTML = ;
    //btnClose.append(span) *@


        //chartdiv.style.height = "50%";


        //adding remove button
        //@* chartdiv.appendChild(btnClose);*@

    //Add licensing
    am4core.addLicense("ch-custom-attribution");
        var chart = am4core.create(divId, am4plugins_sunburst.Sunburst);

    //Add chart title
    var title = chart.titles.create();
    title.text = arrChartData.ChartTitle;
    title.fontSize = 25;
    title.marginBottom = 30;

    var chartdiv = document.querySelector(`#${divId}`);
    

    //@* console.log(chart);*@
    chart.padding(0, 0, 0, 0);
    chart.radius = am4core.percent(98);

    chart.data = data;

    /*chart.data = data;*/

    chart.colors.step = 2;
    chart.fontSize = 11;
    chart.innerRadius = am4core.percent(20);

    // define data fields
    chart.dataFields.value = "value";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";


    var level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
    chart.seriesTemplates.setKey("0", level0SeriesTemplate);

    // this makes labels to be hidden if they don't fit
    level0SeriesTemplate.labels.template.truncate = true;
    level0SeriesTemplate.labels.template.hideOversized = true;
    level0SeriesTemplate.showOnInit = false;
    level0SeriesTemplate.usePercentHack = false;

    level0SeriesTemplate.radius = am4core.percent(100);
    level0SeriesTemplate.innerRadius = am4core.percent(0);

    let selectedState = level0SeriesTemplate.states.create("selected");
    selectedState.properties.opacity = 0.7;
    level0SeriesTemplate.defaultState.properties.radius = am4core.percent(100);

    var currentlySelected;

    level0SeriesTemplate.slices.template.events.on("over", function (event) {
        if (event.target.dataItem.sunburstDataItem.children) {
            event.target.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        }
    })

    level0SeriesTemplate.slices.template.events.on("hit", function (event) {
        zoomOutButton.show();
        var hitSlice = event.target;

        if (hitSlice.dataItem.sunburstDataItem.children) {

            var series = event.target.dataItem.component;

            if (!series.dummyData) {
                series.tooltip.disabled = true;
                //hitSlice.dataItem.label.radius = (hitSlice.radius - hitSlice.pixelInnerRadius) - 7;
                hitSlice.dataItem.label.bent = true;
                hitSlice.dataItem.label.rotation = -180;

                currentlySelected = hitSlice;
                series.dummyData = true;
                series.setState("selected");
                hitSlice.dataItem.sunburstDataItem.series.show();
                series.slices.each(function (slice) {
                    if (slice != event.target) {
                        slice.dataItem.hide();
                    }
                })
            }
            else {
                drillUp(hitSlice);
            }
        }
    })


    //level0SeriesTemplate.labels.template.adapter.add("rotation", function (rotation, target) {
    //    target.maxWidth = target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
    //    target.maxHeight = Math.abs(target.dataItem.slice.arc * (target.dataItem.slice.innerRadius + target.dataItem.slice.radius) / 2 * am4core.math.RADIANS);
    //    return rotation;
    //})

    for (var i = 1; i <= nodecount; i++) {
        eval("var " + "level" + i + "SeriesTemplate" + " = " + "level0SeriesTemplate.clone()" + ";");
        eval("level" + i + "SeriesTemplate" + "." + "hidden" + " = " + true + ";");
        eval("level" + i + "SeriesTemplate" + "." + "ínnerRadius" + " = " + "am4core.percent(" + i + "0" + ")" + ";");
        eval("chart" + "." + "seriesTemplates.setKey(" + `"${i}"` + "," + "level" + i + "SeriesTemplate" + ")" + ";");
    }



    var zoomOutButton = chart.seriesContainer.createChild(am4core.ZoomOutButton);
    zoomOutButton.visible = false;
    zoomOutButton.horizontalCenter = "middle";
    zoomOutButton.verticalCenter = "middle";
    zoomOutButton.events.on("hit", function () {
        drillUp(currentlySelected)
    })


    function drillUp(slice) {
        collapse(slice);
        var series = slice.dataItem.component;
        series.tooltip.disabled = false;
        series.dummyData = false;
        series.setState("default");

        series.slices.each(function (slice) {
            if (slice != event.target) {
                slice.dataItem.show();
            }
        })

        if (series.parentDataItem.seriesDataItem) {
            currentlySelected = series.parentDataItem.seriesDataItem.slice;
        }
        else {
            zoomOutButton.hide();
        }
    }


    function collapse(slice) {

        slice.dataItem.label.bent = false;
        slice.dataItem.label.radius = 10;


        if (slice.dataItem.sunburstDataItem.children) {
            slice.dataItem.sunburstDataItem.children.each(function (child) {
                child.seriesDataItem.component.setState("hidden");
                collapse(child.seriesDataItem.slice);
            })
        }
    }
}

function DisplayPieOfPieChartNew(data, divId, arrChartData, isDashboard, divCardId, inCard) {
    //@*//debugger;*@


    //Add licensing
    am4core.addLicense("ch-custom-attribution");

    var chartId = arrChartData.ChartId;

    var container = am4core.create(divId, am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "horizontal";

    var chartmaster = JSON.parse($('#hChartMasters').val());

    var singleChartMaster = chartmaster.filter(item => item.ChartId == chartId);

    var chart = container.createChild(am4charts.PieChart);

    chart.data = data;

    var chartdiv = document.querySelector(`#${divId}`);


    

    //Add chart title
    var title = chart.titles.create();
    title.text = arrChartData.ChartTitle;
    title.fontSize = 25;
    title.marginBottom = 30;

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "Value";
    pieSeries.dataFields.category = "Category";
    pieSeries.slices.template.states.getKey("active").properties.shiftRadius = 0;

    pieSeries.slices.template.events.on("hit", function (event) {
        selectSlice(event.target.dataItem);
    })

    var chart2 = container.createChild(am4charts.PieChart);
    chart2.width = am4core.percent(30);
    chart2.radius = am4core.percent(80);

    // Add and configure Series
    var pieSeries2 = chart2.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "value";
    pieSeries2.dataFields.category = "name";
    pieSeries2.slices.template.states.getKey("active").properties.shiftRadius = 0;
    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;
    pieSeries2.alignLabels = false;
    pieSeries2.events.on("positionchanged", updateLines);

    var interfaceColors = new am4core.InterfaceColorSet();

    var line1 = container.createChild(am4core.Line);
    line1.strokeDasharray = "2,2";
    line1.strokeOpacity = 0.5;
    line1.stroke = interfaceColors.getFor("alternativeBackground");
    line1.isMeasured = false;

    var line2 = container.createChild(am4core.Line);
    line2.strokeDasharray = "2,2";
    line2.strokeOpacity = 0.5;
    line2.stroke = interfaceColors.getFor("alternativeBackground");
    line2.isMeasured = false;

    var selectedSlice;

    function selectSlice(dataItem) {

        selectedSlice = dataItem.slice;

        var fill = selectedSlice.fill;

        var count = dataItem.dataContext.subData.length;
        pieSeries2.colors.list = [];
        for (var i = 0; i < count; i++) {
            pieSeries2.colors.list.push(fill.brighten(i * 2 / count));
        }

        chart2.data = dataItem.dataContext.subData;
        pieSeries2.appear();

        var middleAngle = selectedSlice.middleAngle;
        var firstAngle = pieSeries.slices.getIndex(0).startAngle;
        var animation = pieSeries.animate([{ property: "startAngle", to: firstAngle - middleAngle }, { property: "endAngle", to: firstAngle - middleAngle + 360 }], 600, am4core.ease.sinOut);
        animation.events.on("animationprogress", updateLines);

        selectedSlice.events.on("transformed", updateLines);

        //  var animation = chart2.animate({property:"dx", from:-container.pixelWidth / 2, to:0}, 2000, am4core.ease.elasticOut)
        //  animation.events.on("animationprogress", updateLines)
    }


    function updateLines() {
        if (selectedSlice) {
            var p11 = { x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle), y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle) };
            var p12 = { x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle + selectedSlice.arc), y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle + selectedSlice.arc) };

            p11 = am4core.utils.spritePointToSvg(p11, selectedSlice);
            p12 = am4core.utils.spritePointToSvg(p12, selectedSlice);

            var p21 = { x: 0, y: -pieSeries2.pixelRadius };
            var p22 = { x: 0, y: pieSeries2.pixelRadius };

            p21 = am4core.utils.spritePointToSvg(p21, pieSeries2);
            p22 = am4core.utils.spritePointToSvg(p22, pieSeries2);

            line1.x1 = p11.x;
            line1.x2 = p21.x;
            line1.y1 = p11.y;
            line1.y2 = p21.y;

            line2.x1 = p12.x;
            line2.x2 = p22.x;
            line2.y1 = p12.y;
            line2.y2 = p22.y;
        }
    }

    chart.events.on("datavalidated", function () {
        setTimeout(function () {
            selectSlice(pieSeries.dataItems.getIndex(0));
        }, 1000);
    });
}

function Display3DPieChartNew(data, divId, arrChartData, isDashboard, divCardId, inCard) {
    //debugger;

    //Add licensing
    am4core.addLicense("ch-custom-attribution");

    var chart = am4core.create(divId, am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 1; // this creates initial fade-in


    var chartdiv = document.querySelector(`#${divId}`);

    //var notDashboard = !isDashboard;


    var chartId = arrChartData.ChartId;

    var chartmaster = JSON.parse($('#hChartMasters').val());

    var singleChartMaster = chartmaster.filter(item => item.ChartId == chartId);

    //Add chart title
    var title = chart.titles.create();
    title.text = arrChartData.ChartTitle;
    title.fontSize = 25;
    title.marginBottom = 30;


    var keyslist = Object.keys(data[0]);

    chart.legend = new am4charts.Legend();

    chart.data = data;

    //@* series.labels.template.disabled = true;
    //series.ticks.template.disabled = true;*@

        var series_executable = "";

    for (var i = 1; i < keyslist.length; i++) {
        series_executable += `var series${i} = chart.series.push(new am4charts.PieSeries3D());\n`;
        series_executable += `series${i}.dataFields.value = "${keyslist[i]}";\n`;
        series_executable += `series${i}.dataFields.category =  "${keyslist[0]}";\n`;
        series_executable += `series${i}.labels.template.disabled = ${(keyslist.length == 2) ? false : true};\n`;
        series_executable += `series${i}.ticks.template.disabled = false;\n`;
        //@* series_executable += `series${i}.Container.fixedWidthGrid =  false;\n`;*@
        }

    eval(series_executable);

    /* Create a separate container to put legend in */
    if (!inCard) {
        var legendContainer = am4core.create(`legenddiv${chartId}`, am4core.Container);
        legendContainer.width = am4core.percent(100);
        legendContainer.height = am4core.percent(100);
        //@* chart.legend.position = "left";*@
        //debugger;
        chart.legend.width = (divId == divCardId) ? 900 : (document.querySelector(`#${divCardId}`).className.includes("col-12")) ? 900 : 600
        chart.legend.contentAlign = "left";
        chart.legend.y = 1000;
        console.log(chart.legend)
        chart.legend.parent = legendContainer;
        chart.legend.scrollable = true;
    }
    if (inCard) {
        chart.legend.disabled = true;
    }
    //@*var marker = chart.legend.markers.template.children.getIndex(0);
    //marker.cornerRadius(12, 12, 12, 12);
    //marker.strokeWidth = 2;
    //marker.strokeOpacity = 1;
    //marker.stroke = am4core.color("#ccc");*@

    //    @*var markerTemplate = chart.legend.markers.template;
    //markerTemplate.width = 10;
    //markerTemplate.height = 10;

    //chart.legend.markers.template.disabled = false;*@

    }
