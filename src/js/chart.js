/*
chart.responsive.enabled = true;
// Add data
chart.data = [{
    "project": "ClOSED PROJECT",
    "rate": 276
}, {
    "project": "OPEN PROJECT",
    "rate": 200
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "rate";
pieSeries.dataFields.category = "project";
pieSeries.labels.template.fill = "#fff"
pieSeries.labels.template.fontSize = "3rem";*/

AmCharts.makeChart("chartdiv",
    {
        "type": "pie",
        "angle": 30,
        "depth3D": 20,
        "labelRadius": 100,
        "pullOutRadius": 20,
        "fontSize": "40",
        "color": "#fff",
        "colors": [
            "#E30D08",
            "#BFB8B8"
        ],
        "pulledField": "pulled",
        "titleField": "category",
        "valueField": "column-1",
        "allLabels": [],
        "balloon": {},
        "titles": [],
        "dataProvider": [
            {
                "category": "OPEN PROJECT",
                "column-1": "276",
                "pulled": "true"
            },
            {
                "category": "CLOSED PROJECT",
                "column-1": "243",
                "pulled": "true"
            }
        ]
    }
);

(function (){
    setTimeout(() => {
        document.getElementById("router").click()
    },10000)
})();