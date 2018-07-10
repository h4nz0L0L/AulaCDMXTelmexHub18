document.addEventListener("DOMContentLoaded", function () {
    let map = L.map("mapid").setView([19.42, -99.13], 11)
    
    // Tiles de open street maps
    //L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)
    var latlngs = [[19.471902, -99.038077],[19.480274, -99.032847],[19.479855, -99.032149],[19.471648, -99.037230]];
    var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
    map.fitBounds(polygon.getBounds());

    var latlngs = [
        [19.479888, -99.033026],
        [19.479536, -99.033309],
        [19.479688, -99.033602],
        [19.479857, -99.033778],
        [19.480127, -99.033928],
        [19.480851, -99.034353],
        [19.481644, -99.034825],
        [19.481927, -99.034926],
        [19.482062, -99.035215],
        [19.482999, -99.036585],
        [19.483012, -99.036875],
        [19.483383, -99.037897],
        [19.484223, -99.039961],
        [19.484307, -99.040211],
        [19.484459, -99.041094],
        [19.485278, -99.045858],
        [19.485426, -99.046738],
        [19.485666, -99.048633],
        [19.485507, -99.048728]
    ];
    var polyline = L.polyline(latlngs, {dashArray: '15,12', color: 'red'}).addTo(map);

    // create a red polyline from an array of LatLng points
    var latlngs = [
    [19.485478, -99.048877],
    [19.472489, -99.054658],
    [19.464246, -99.058298],
    [19.461858, -99.061303],
    [19.460575, -99.065676],
    [19.458293, -99.069202],
    [19.453094, -99.076306],
    [19.445967, -99.087104],
    [19.441023, -99.094237],
    [19.436664, -99.103469],
    [19.432027, -99.113859],
    [19.431920, -99.114412],
    [19.432022, -99.114792],
    [19.432182, -99.115035],
    [19.432464, -99.115268],
    [19.432614, -99.115331],
    [19.436461, -99.114769],
    [19.437345, -99.114912],
    [19.437904, -99.115534],
    [19.438167, -99.118237],
    [19.438329, -99.118752],
    [19.439078, -99.119503],
    [19.440150, -99.120469],
    [19.442608, -99.123055],
    [19.442720, -99.123859],
    [19.442821, -99.125383],
    [19.443286, -99.131359],
    [19.443944, -99.138783],
    [19.442902, -99.139427],
    [19.442517, -99.139599],
    [19.431226, -99.141304]
    ];
    var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);
    // zoom the map to the polyline
    //map.fitBounds(polyline.getBounds());

    var latlngs = [
        [19.431207, -99.141395],
        [19.430543, -99.136744]
    ];
    var polyline = L.polyline(latlngs, {dashArray: '10,15', color: 'red'}).addTo(map);

   

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
    }).addTo(map);
    // let marker1 = L.marker([19.4, -99.4]).addTo(map)
    // let marker2 = L.marker([19.5, -99.5]).addTo(map)
    // let marker3 = L.marker([19.3, -99.5]).addTo(map)
    // let marker4 = L.marker([19.2, -99.6]).addTo(map)
    // let markerTelmexHub = L.marker([19.431326, -99.136773]).addTo(map)
    // marker1.bindPopup("<ul><li>Hola 1</li><li>Hola 2</li><li>Hola 3</li><li>Hola 4</li><li>Hola 5</li</ul>")
    // marker2.bindPopup("")
    // marker3.bindPopup("Aloha")
    // marker4.bindPopup("YOLO")
    // markerTelmexHub.bindPopup("TelmexHub")

    map.on('click', onMapClick);
})

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
