var map = L.map('map').setView([44.80272, 20.48106], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

L.marker([44.80272, 20.48106]).addTo(map).bindPopup("Urbanopolis:<br>Bulevar kralja Aleksandra 138, Vračar").openPopup();