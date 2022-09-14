//var color1 = chart.colors.getIndex(0);
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
var imageTemplate = imageSeries.mapImages.template;
imageTemplate.propertyFields.longitude = "longitude";
imageTemplate.propertyFields.latitude = "latitude";
imageTemplate.nonScaling = true;

// Creating a pin bullet
var pin = imageTemplate.createChild(am4plugins_bullets.PinBullet);

// Configuring pin appearance
pin.background.fill = "#fff";
pin.background.pointerBaseWidth = 6;
pin.background.pointerLength = 500;
pin.background.propertyFields.pointerLength = "length";
pin.circle.fill = pin.background.fill;
pin.label = new am4core.Label();
pin.label.text = "{value}";
pin.label.fill = "#000";
pin.label.opacity = "0.7"
pin.label.fontSize = "63px"
pin.label.fontWeight = "300"


// Creating a "heat rule" to modify "radius" of the bullet based
// on value in data
imageSeries.heatRules.push({
    "target": pin.background,
    "property": "radius",
    "min": 60,
    "max": 60,
    "dataField": "value"

});

// Pin data
imageSeries.data = [{
    "latitude": 47.3333,
    "longitude": 13.3333,
    "value": 1,
    "title": "Austria",
    "length": 410
}, {
    "latitude": 35,
    "longitude": 105,
    "value": 4,
    "title": "China",
    "length": 90
}, {
    "latitude": 51,
    "longitude": 9,
    "value": 3,
    "title": "Germany",
    "length": 250
}, {
    "latitude": 42.8333,
    "longitude": 12.8333,
    "value": 8,
    "title": "Italy",
    "length": 200
}, {
    "latitude": 46,
    "longitude": 25,
    "value": 29,
    "title": "Romania",
    "length": 250
}, {
    "latitude": 60,
    "longitude": 100,
    "value": 13,
    "title": "Russia",
    "length": 90
}, {
    "latitude": 44,
    "longitude": 21,
    "value": 1,
    "title": "Serbia",
    "length": 90
}, {
    "latitude": 15,
    "longitude": 100,
    "value": 13,
    "title": "Thailand",
    "length": 90
}, {
    "latitude": 54,
    "longitude": -2,
    "value": 2,
    "title": "United\nKingdom",
    "length": 90
}, {
    "latitude": 38,
    "longitude": -97,
    "value": 1,
    "title": "United\nStates",
    "length": 90
}, {
    "latitude": 24,
    "longitude": 90,
    "value": 21,
    "title": "Bangladesh",
    "length": 90
}, {
    "latitude": 30,
    "longitude": 70,
    "value": 17,
    "title": "Pakistan",
    "length": 90
}, {
    "latitude": -29,
    "longitude": 24,
    "value": 13,
    "title": "South\nAfrica",
    "length": 90
}, {
    "latitude": 39,
    "longitude": 35,
    "value": 257,
    "title": "Türkiye",
    "length": 90
}];