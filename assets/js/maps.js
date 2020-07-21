function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var locations = [
        {lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}