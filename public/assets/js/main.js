function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(51.511214,-0.119824)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);