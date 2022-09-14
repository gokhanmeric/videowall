var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.mapImages.template.propertyFields.longitude = "longitude";
imageSeries.mapImages.template.propertyFields.latitude = "latitude";
imageSeries.mapImages.template.tooltipText = "{title}";
imageSeries.mapImages.template.propertyFields.url = "url";

var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
circle.radius = 10;
circle.propertyFields.fill = "color";

var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
circle2.radius = 10;
circle2.propertyFields.fill = "color";


circle2.events.on("inited", function (event) {
    animateBullet(event.target);
});

function animateBullet(circle) {
    var animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
    animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
    })
}

var colorSet = new am4core.ColorSet();

imageSeries.data = [{
    "title": "Germany",
    "latitude": 51,
    "longitude": 9,
    "color": am4core.color("#E30D08")
}, {
    "title": "Croatia",
    "latitude": 45.1667,
    "longitude": 15.5,
    "color": am4core.color("#E30D08")
}, {
    "title": "Austria",
    "latitude": 47.3333,
    "longitude": 13.3333,
    "color": am4core.color("#E30D08")
}, {
    "title": "Norway",
    "latitude": 62,
    "longitude": 10,
    "color": am4core.color("#E30D08")
}, {
    "title": "Denmark",
    "latitude": 56,
    "longitude": 10,
    "color": am4core.color("#E30D08")
}, {
    "title": "Switzerland",
    "latitude": 47,
    "longitude": 8,
    "color": am4core.color("#E30D08")
}, {
    "title": "Czech Republic",
    "latitude": 49.75,
    "longitude": 15.5,
    "color": am4core.color("#E30D08")
}, {
    "title": "Slovakia",
    "latitude": 48.6667,
    "longitude": 19.5,
    "color": am4core.color("#E30D08")
}, {
    "title": "Serbia",
    "latitude": 44,
    "longitude": 21,
    "color": am4core.color("#E30D08")
}, {
    "title": "Ukraine",
    "latitude": 49,
    "longitude": 32,
    "url": "http://www.google.co.jp",
    "color": am4core.color("#E30D08")
}, {
    "title": "Russia",
    "latitude": 60,
    "longitude": 100,
    "color": am4core.color("#E30D08")
}, {
    "title": "Kazakhstan",
    "latitude": 48,
    "longitude": 68,
    "color": am4core.color("#E30D08")
}, {
    "title": "Morocco",
    "latitude": 32,
    "longitude": -5,
    "color": am4core.color("#E30D08")
}, {
    "title": "Israel",
    "latitude": 31.5,
    "longitude": 34.75,
    "color": am4core.color("#E30D08")
}, {
    "title": "Egypt",
    "latitude": 27,
    "longitude": 30,
    "color": am4core.color("#E30D08")
}, {
    "title": "Spain",
    "latitude": 40,
    "longitude": -4,
    "color": am4core.color("#E30D08")
}, {
    "title": "Portugal",
    "latitude": 39.5,
    "longitude": -8,
    "color": am4core.color("#E30D08")
}, {
    "title": "France",
    "latitude": 46,
    "longitude": 2,
    "color": am4core.color("#E30D08")
}, {
    "title": "Italy",
    "latitude": 42.8333,
    "longitude": 12.8333,
    "color": am4core.color("#E30D08")
}, {
    "title": "United Kingdom",
    "latitude": 54,
    "longitude": -2,
    "color": am4core.color("#E30D08")
}, {
    "title": "Ireland",
    "latitude": 53,
    "longitude": -8,
    "color": am4core.color("#E30D08")
}, {
    "title": "Romania",
    "latitude": 46,
    "longitude": 25,
    "color": am4core.color("#E30D08")
}, {
    "title": "United States of America",
    "latitude": 38,
    "longitude": -97,
    "color": am4core.color("#E30D08")
}, {
    "title": "India",
    "latitude": 20,
    "longitude": 77,
    "color": am4core.color("#E30D08")
}, {
    "title": "Pakistan",
    "latitude": 30,
    "longitude": 70,
    "color": am4core.color("#E30D08")
}, {
    "title": "Bangladesh",
    "latitude": 24,
    "longitude": 90,
    "color": am4core.color("#E30D08")
}, {
    "title": "South Africa",
    "latitude": -29,
    "longitude": 24,
    "color": am4core.color("#E30D08")
}, {
    "title": "China",
    "latitude": 35,
    "longitude": 105,
    "color": am4core.color("#E30D08")
}, {
    "title": "Malaysia",
    "latitude": 2.5,
    "longitude": 112.5,
    "color": am4core.color("#E30D08")
}, {
    "title": "Indonesia",
    "latitude": -5,
    "longitude": 120,
    "color": am4core.color("#E30D08")
}, {
    "title": "Vietnam",
    "latitude": 16,
    "longitude": 106,
    "color": am4core.color("#E30D08")
}, {
    "title": "Thailand",
    "latitude": 15,
    "longitude": 100,
    "color": am4core.color("#E30D08")
}, {
    "title": "Philippines",
    "latitude": 13,
    "longitude": 12,
    "color": am4core.color("#E30D08")
}, {
    "title": "Australia",
    "latitude": -27,
    "longitude": 133,
    "color": am4core.color("#E30D08")
}, {
    "title": "New Zealand",
    "latitude": -41,
    "longitude": 174,
    "color": am4core.color("#E30D08")
}];

