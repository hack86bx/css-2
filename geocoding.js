/* Définition du centre et du zoom de la carte (valeur initiale)  */
const carte = L.map('map').setView([51.505, -0.09], 16);

/* Ajout d'un fond de carte (arrière-plan) */
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(carte);

/* ajouter le contrôleur geoSearch */
const search = new GeoSearch.GeoSearchControl({
    provider: new GeoSearch.OpenStreetMapProvider(),
    style: 'bar',
    language: 'FR'
  });
  
carte.addControl(search);