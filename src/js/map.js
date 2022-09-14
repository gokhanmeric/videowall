var chart = am4core.create('chartdiv', am4maps.MapChart);
chart.chartContainer.wheelable = false;
chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = true;

chart.geodata = am4geodata_worldLow;

var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ['AQ'];

polygonSeries.useGeodata = true;

var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = '{name}';
polygonTemplate.fill = am4core.color('#15344E');
polygonTemplate.stroke = am4core.color('#2F507A');

var hs = polygonTemplate.states.create('hover');
hs.properties.fill = am4core.color('#15344E');
hs.properties.stroke = am4core.color('#1d8eeb');
hs.properties.strokeWidth = 2;

(function () {
  setTimeout(() => {
    document.getElementById('router').click();
  }, 10000);
})();
