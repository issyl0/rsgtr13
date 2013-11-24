function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(51.511214,-0.119824)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Random latitudes and longitudes for now.
  var research_points = [["52.48278", "1.40625"], ["52.908902", "-2.373047"], ["51.086126", "-2.210767"], ["51.511214", "-0.119824"]];
  for (var i = 0; i < research_points.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(research_points[i][0], research_points[i][1]),
      map: map
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);