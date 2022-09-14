var imageSeries = chart.series.push(new am4maps.MapImageSeries());

var imageSeriesTemplate = imageSeries.mapImages.template;
var marker = imageSeriesTemplate.createChild(am4core.Image);
marker.width = 45;
marker.height = 45;
marker.nonScaling = true;
marker.tooltipText = '{title}';
marker.horizontalCenter = 'middle';
marker.verticalCenter = 'middle';
marker.propertyFields.href = 'flag';

imageSeriesTemplate.propertyFields.latitude = 'latitude';
imageSeriesTemplate.propertyFields.longitude = 'longitude';

imageSeries.data = [
  {
    latitude: 41.327953,
    longitude: 19.819025,
    title: 'Albanian',
    flag: 'https://flagcdn.com/32x24/al.png',
  },
  {
    latitude: 28,
    longitude: 3,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/dz.png',
  },
  {
    latitude: 26,
    longitude: 50.55,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/bh.png',
  },
  {
    latitude: 15,
    longitude: 19,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/td.png',
  },
  {
    latitude: -12.1667,
    longitude: 44.25,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/km.png',
  },
  {
    latitude: 11.5,
    longitude: 43,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/dj.png',
  },
  {
    latitude: 27,
    longitude: 30,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/eg.png',
  },
  {
    latitude: 33,
    longitude: 44,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/iq.png',
  },
  {
    latitude: 31,
    longitude: 36,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/jo.png',
  },
  {
    latitude: 29.3375,
    longitude: 47.6581,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/kw.png',
  },
  {
    latitude: 33.8333,
    longitude: 35.8333,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/lb.png',
  },
  {
    latitude: 25,
    longitude: 17,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/ly.png',
  },
  {
    latitude: 20,
    longitude: -12,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/mr.png',
  },
  {
    latitude: 32,
    longitude: -5,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/ma.png',
  },
  {
    latitude: 21,
    longitude: 57,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/om.png',
  },
  {
    latitude: 32,
    longitude: 35.25,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/ps.png',
  },
  {
    latitude: 25.5,
    longitude: 51.25,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/qa.png',
  },
  {
    latitude: 25,
    longitude: 45,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/sa.png',
  },
  {
    latitude: 10,
    longitude: 49,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/so.png',
  },
  {
    latitude: 15,
    longitude: 30,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/sd.png',
  },
  {
    latitude: 35,
    longitude: 38,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/sy.png',
  },
  {
    latitude: 35,
    longitude: 38,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/sy.png',
  },
  {
    latitude: 15,
    longitude: 48,
    title: 'Arabic',
    flag: 'https://flagcdn.com/32x24/ye.png',
  },
  {
    latitude: 40.409264,
    longitude: 49.867092,
    title: 'Azerbaijani',
    flag: 'https://flagcdn.com/32x24/az.png',
  },
  {
    latitude: 43.915886,
    longitude: 18.413029,
    title: 'Bosnian',
    flag: 'https://flagcdn.com/32x24/ba.png',
  },
  {
    latitude: 42.733883,
    longitude: 25.48583,
    title: 'Bulgarian',
    flag: 'https://flagcdn.com/32x24/bg.png',
  },
  {
    latitude: 39.916668,
    longitude: 116.383331,
    title: 'Chinese',
    flag: 'https://flagcdn.com/32x24/cn.png',
  },
  {
    latitude: 45.815399,
    longitude: 15.966568,
    title: 'Croatian',
    flag: 'https://flagcdn.com/32x24/hr.png',
  },
  {
    latitude: 49.8038,
    longitude: 15.4749,
    title: 'Czech',
    flag: 'https://flagcdn.com/32x24/cz.png',
  },
  {
    latitude: 55.676098,
    longitude: 12.568337,
    title: 'Danish',
    flag: 'https://flagcdn.com/32x24/dk.png',
  },
  {
    latitude: 52.370216,
    longitude: 4.895168,
    title: 'Dutch',
    flag: 'https://flagcdn.com/32x24/nl.png',
  },
  {
    latitude: 51.509865,
    longitude: -0.118092,
    title: 'English',
    flag: 'https://flagcdn.com/32x24/gb.png',
  },
  {
    latitude: 5.614818,
    longitude: -0.205874,
    title: 'Ewe',
    flag: 'https://flagcdn.com/32x24/gh.png',
  },
  {
    latitude: 6.136629,
    longitude: 1.222186,
    title: 'Ewe',
    flag: 'https://flagcdn.com/32x24/tg.png',
  },
  {
    latitude: 64,
    longitude: 26,
    title: 'Finnish',
    flag: 'https://flagcdn.com/32x24/fi.png',
  },
  {
    latitude: 48.864716,
    longitude: 2.349014,
    title: 'French',
    flag: 'https://flagcdn.com/32x24/fr.png',
  },
  {
    latitude: 42,
    longitude: 43.5,
    title: 'Georgian',
    flag: 'https://flagcdn.com/32x24/ge.png',
  },
  {
    latitude: 51,
    longitude: 9,
    title: 'German',
    flag: 'https://flagcdn.com/32x24/de.png',
  },
  {
    latitude: 39,
    longitude: 22,
    title: 'Greek',
    flag: 'https://flagcdn.com/32x24/gr.png',
  },
  {
    latitude: 31.5,
    longitude: 34.75,
    title: 'Hebrew',
    flag: 'https://flagcdn.com/32x24/il.png',
  },
  {
    latitude: 47,
    longitude: 20,
    title: 'Hungarian',
    flag: 'https://flagcdn.com/32x24/hu.png',
  },
  {
    latitude: -5,
    longitude: 120,
    title: 'Indonesian',
    flag: 'https://flagcdn.com/32x24/id.png',
  },
  {
    latitude: 42.8333,
    longitude: 12.8333,
    title: 'Italian',
    flag: 'https://flagcdn.com/32x24/it.png',
  },
  {
    latitude: 57,
    longitude: 25,
    title: 'Latvian',
    flag: 'https://flagcdn.com/32x24/lv.png',
  },
  {
    latitude: 56,
    longitude: 24,
    title: 'Lithuanian',
    flag: 'https://flagcdn.com/32x24/lt.png',
  },
  {
    latitude: 41.8333,
    longitude: 22,
    title: 'Macedonian',
    flag: 'https://flagcdn.com/32x24/mk.png',
  },
  {
    latitude: 46,
    longitude: 105,
    title: 'Mongolian',
    flag: 'https://flagcdn.com/32x24/mn.png',
  },
  {
    latitude: 41.8333,
    longitude: 22,
    title: 'Macedonian',
    flag: 'https://flagcdn.com/32x24/mk.png',
  },
  {
    latitude: 62,
    longitude: 10,
    title: 'Norwegian',
    flag: 'https://flagcdn.com/32x24/no.png',
  },
  {
    latitude: 32,
    longitude: 53,
    title: 'Persian',
    flag: 'https://flagcdn.com/32x24/ir.png',
  },
  {
    latitude: 33,
    longitude: 65,
    title: 'Persian',
    flag: 'https://flagcdn.com/32x24/af.png',
  },
  {
    latitude: 39,
    longitude: 71,
    title: 'Persian',
    flag: 'https://flagcdn.com/32x24/tj.png',
  },
  {
    latitude: 52,
    longitude: 20,
    title: 'Polish',
    flag: 'https://flagcdn.com/32x24/pl.png',
  },
  {
    latitude: 39.5,
    longitude: -8,
    title: 'Portuguese',
    flag: 'https://flagcdn.com/32x24/pt.png',
  },
  {
    latitude: -10,
    longitude: -55,
    title: 'Portuguese',
    flag: 'https://flagcdn.com/32x24/br.png',
  },
  {
    latitude: 46,
    longitude: 25,
    title: 'Romanian',
    flag: 'https://flagcdn.com/32x24/ro.png',
  },
  {
    latitude: 60,
    longitude: 100,
    title: 'Russian',
    flag: 'https://flagcdn.com/32x24/ru.png',
  },
  {
    latitude: 44,
    longitude: 21,
    title: 'Serbian',
    flag: 'https://flagcdn.com/32x24/rs.png',
  },
  {
    latitude: 46,
    longitude: 15,
    title: 'Slovenian',
    flag: 'https://flagcdn.com/32x24/si.png',
  },
  {
    latitude: 40,
    longitude: -4,
    title: 'Spanish',
    flag: 'https://flagcdn.com/32x24/es.png',
  },
  {
    latitude: 62,
    longitude: 15,
    title: 'Swedish',
    flag: 'https://flagcdn.com/32x24/se.png',
  },
  {
    latitude: 15,
    longitude: 100,
    title: 'Thai',
    flag: 'https://flagcdn.com/32x24/th.png',
  },
  {
    latitude: 39,
    longitude: 35,
    title: 'Turkish',
    flag: 'https://flagcdn.com/32x24/tr.png',
  },
  {
    latitude: 49,
    longitude: 32,
    title: 'Ukrainian',
    flag: 'https://flagcdn.com/32x24/ua.png',
  },
  {
    latitude: 16,
    longitude: 106,
    title: 'Vietnamese',
    flag: 'https://flagcdn.com/32x24/vn.png',
  },
];
