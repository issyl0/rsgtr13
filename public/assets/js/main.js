function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(51.511214,-0.119824)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var markers = [];
  var research_points = [
                          ["50.934189", "-1.3956847"],
                          ["51.4697688", "-3.1649216"],
                          ["55.9476915", "-3.187347"],
                          ["52.62187429999999", "1.2223058"],
                          ["51.4697688", "-3.1649216"],
                          ["51.5005046", "-0.1782187"],
                          ["52.0249136", "-0.7097473999999999"],
                          ["52.44897169999999", "-1.9308602"],
                          ["53.7613383", "-2.7073841"],
                          ["51.520925", "-0.1306868"],
                          ["52.9555003", "-1.1432387"],
                          ["51.5030338", "-0.0852242"],
                          ["56.1492131", "-3.9267942"],
                          ["51.5518193", "-0.1102363"],
                          ["54.01046849999999", "-2.7869096"],
                          ["53.8084778", "-1.5527923"],
                          ["51.5247725", "-0.1334268"],
                          ["53.39482719999999", "-1.4306072"],
                          ["54.7749254", "-1.5697502"],
                          ["53.4063986", "-2.975554"]
                        ];

  // Iterate the array of postcodes, for clustered markers.
  for (var i = 0; i < research_points.length; i++) {
    var marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(research_points[i][0], research_points[i][1])
    });
    markers.push(marker);
  }
  var cluster = new MarkerClusterer(map, markers);
}

google.maps.event.addDomListener(window, 'load', initialize);