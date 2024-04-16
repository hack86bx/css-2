/* Définition du centre et du zoom de la carte (valeur initiale)  */
const carte = L.map('map').setView([51.505, -0.09], 13);

/* Ajout d'un fond de carte (arrière-plan) */
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(carte);

/* Ajout d'un marqueur de base */
const marker = L.marker([51.5, 0]).addTo(carte);

/* Ajout d'un popup */
const monPopup = "<h3>Je suis ici !</h3><p class='rouge'>Au centre de <a target='_blank' href='https://fr.wikipedia.org/wiki/Londres'>Londres</a></p>";

marker.bindPopup(monPopup);

/* Ajout d'un marqueur personnalisé */
const monIcone = L.icon({
    iconUrl: 'img/red_map_marker.svg',
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0,-64]
});

const marker2 = L.marker([51.5, -0.1],{icon:monIcone}).addTo(carte);

marker2.bindPopup("Je suis l'icône rouge");