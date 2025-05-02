//js baby!!


// Initialize the map centered somewhere near Montpelier, Vermont
  var map = L.map('map').setView([44.2601, -72.5754], 13);

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Load the GeoJSON file (must be served from a web server)
  fetch('data/Jurisdiction_Borders.geojson')
    .then(response => response.json())
    .then(data => {
      // Add the GeoJSON to the map
      var geojsonLayer = L.geoJSON(data, {
        style: {
          color: "black",
          weight: 2,
          fillOpacity: 0
        },
        onEachFeature: function (feature, layer) {
          console.log(feature.properties);
          if (feature.properties && feature.properties.NAME) {
            layer.bindTooltip(feature.properties.NAME, {
              permanent: true,
              direction: 'center',
              className: 'polygon-label'
            }), layer.openTooltip();
          }
        }
      }).addTo(map);

      // Fit map to the bounds of the GeoJSON layer
      map.fitBounds(geojsonLayer.getBounds());

      function updateLabelSize(zoom) {
  const labels = document.querySelectorAll('.leaflet-tooltip.polygon-label');
  labels.forEach(label => {
    let size = Math.max(10, zoom * 1.2); // Adjust scaling factor as needed
    label.style.fontSize = `${size}px`;
  });
}

// Initial label size
updateLabelSize(map.getZoom());

// Update on zoom
map.on('zoomend', () => {
  updateLabelSize(map.getZoom());
});

    })
    .catch(error => console.error('Error loading GeoJSON:', error));
