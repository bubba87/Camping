// Initialisation de la carte
let map;
let markers = [];
let filteredStations = [...skiStations];

// Icônes personnalisées
const greenIcon = L.icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDI1IDQxIj48cGF0aCBmaWxsPSIjMjhhNzQ1IiBkPSJNMTIuNSAwQzUuNiAwIDAgNS42IDAgMTIuNWMwIDkuNCAxMi41IDI4LjUgMTIuNSAyOC41UzI1IDIxLjkgMjUgMTIuNUMyNSA1LjYgMTkuNCA0IDEyLjUgMHptMCAxN2MtMi41IDAtNC41LTItNC41LTQuNXMyLTQuNSA0LjUtNC41IDQuNSAyIDQuNSA0LjUtMiA0LjUtNC41IDQuNXoiLz48L3N2Zz4=',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const yellowIcon = L.icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSI0MSIgdmlld0JveD0iMCAwIDI1IDQxIj48cGF0aCBmaWxsPSIjZmZjMTA3IiBkPSJNMTIuNSAwQzUuNiAwIDAgNS42IDAgMTIuNWMwIDkuNCAxMi41IDI4LjUgMTIuNSAyOC41UzI1IDIxLjkgMjUgMTIuNUMyNSA1LjYgMTkuNCA0IDEyLjUgMHptMCAxN2MtMi41IDAtNC41LTItNC41LTQuNXMyLTQuNSA0LjUtNC41IDQuNSAyIDQuNSA0LjUtMiA0LjUtNC41IDQuNXoiLz48L3N2Zz4=',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

// Initialiser la carte
function initMap() {
    // Centrer sur la Suisse
    map = L.map('map').setView([46.5, 7.1], 9);

    // Ajouter le fond de carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    // Ajouter les marqueurs
    addMarkers(filteredStations);

    // Afficher la liste des stations
    updateStationList(filteredStations);
}

// Créer le contenu du popup
function createPopupContent(station) {
    const amenitiesIcons = {
        electricity: '⚡ Électricité',
        water: '💧 Eau',
        waste: '🚿 Vidange',
        toilets: '🚻 Toilettes',
        wifi: '📶 WiFi',
        shower: '🚿 Douche'
    };

    const amenitiesList = station.rvParking.amenities
        .map(amenity => `<span class="amenity-tag">${amenitiesIcons[amenity] || amenity}</span>`)
        .join('');

    // Extraire le nom du parking de l'adresse (première partie avant la virgule)
    const parkingName = station.rvParking.address.split(',')[0];

    return `
        <div class="popup-title">${station.name}</div>

        <div class="popup-section">
            <strong>📍 Région:</strong> ${station.region}
        </div>

        <div class="popup-section">
            <strong>⛷️ Domaine skiable:</strong>
            <div>Altitude: ${station.skiResort.altitude}</div>
            <div>Pistes: ${station.skiResort.pistes}</div>
            <div style="color: #667eea; font-weight: 600;">✓ MagicPass inclus</div>
        </div>

        <div class="popup-price">
            ${station.rvParking.price} CHF / nuit
        </div>

        <div class="popup-section">
            <strong>🚐 Emplacement Camping-Car:</strong>
            <div style="background: #f8f9fa; padding: 8px; border-radius: 4px; margin-top: 5px;">
                <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">${parkingName}</div>
                <div style="font-size: 13px;">${station.rvParking.address}</div>
                <div style="font-size: 12px; color: #666; margin-top: 4px;">
                    📌 GPS: ${station.lat.toFixed(4)}°N, ${station.lng.toFixed(4)}°E
                </div>
            </div>
            <div style="margin-top: 5px;">Capacité: ${station.rvParking.capacity} places</div>
            <div>Accès hivernal: ${station.rvParking.winterAccess ? '✓ Ouvert' : '✗ Fermé'}</div>
        </div>

        <div class="popup-section">
            <strong>🛠️ Commodités:</strong>
            <div class="popup-amenities">
                ${amenitiesList}
            </div>
        </div>

        <div class="popup-section">
            <strong>📞 Contact:</strong>
            <div>${station.rvParking.contact}</div>
        </div>

        <div class="popup-section" style="font-style: italic; font-size: 13px; color: #666;">
            ℹ️ ${station.rvParking.notes}
        </div>
    `;
}

// Ajouter les marqueurs sur la carte
function addMarkers(stations) {
    // Effacer les marqueurs existants
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Ajouter les nouveaux marqueurs
    stations.forEach(station => {
        const icon = station.rvParking.capacity > 15 ? greenIcon : yellowIcon;

        const marker = L.marker([station.lat, station.lng], { icon: icon })
            .addTo(map)
            .bindPopup(createPopupContent(station), {
                maxWidth: 350,
                className: 'custom-popup'
            });

        // Stocker la référence de la station dans le marqueur
        marker.stationId = station.id;
        markers.push(marker);
    });
}

// Mettre à jour la liste des stations dans la sidebar
function updateStationList(stations) {
    const listContainer = document.getElementById('stationList');
    const stationCount = document.getElementById('stationCount');

    // Mettre à jour le compteur
    if (stationCount) {
        stationCount.textContent = stations.length;
    }

    if (stations.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Aucune station trouvée</p>';
        return;
    }

    listContainer.innerHTML = stations.map(station => {
        const amenitiesIcons = {
            electricity: '⚡',
            water: '💧',
            waste: '🚿',
            toilets: '🚻',
            wifi: '📶',
            shower: '🚿'
        };

        const amenitiesText = station.rvParking.amenities
            .slice(0, 3)
            .map(amenity => amenitiesIcons[amenity])
            .join(' ');

        const parkingName = station.rvParking.address.split(',')[0];

        return `
            <div class="station-item" onclick="focusStation(${station.id})">
                <h3>${station.name}</h3>
                <div style="font-size: 13px; color: #666;">📍 ${station.region}</div>
                <div class="price">${station.rvParking.price} CHF/nuit</div>
                <div style="font-size: 12px; color: #555; margin: 5px 0; font-weight: 500;">
                    🅿️ ${parkingName}
                </div>
                <div class="amenities">
                    🚐 ${station.rvParking.capacity} places | ${amenitiesText}
                </div>
                <div style="font-size: 11px; color: #888; margin-top: 5px;">
                    📌 ${station.lat.toFixed(4)}°N, ${station.lng.toFixed(4)}°E
                </div>
            </div>
        `;
    }).join('');
}

// Centrer la carte sur une station et ouvrir son popup
function focusStation(stationId) {
    const station = skiStations.find(s => s.id === stationId);
    const marker = markers.find(m => m.stationId === stationId);

    if (station && marker) {
        map.setView([station.lat, station.lng], 13);
        marker.openPopup();

        // Sur mobile, basculer vers l'onglet carte
        if (window.innerWidth <= 768) {
            switchTab('map');
        }
    }
}

// Extraire le canton d'une région
function getCanton(region) {
    if (region.includes('Fribourg') || region.includes('Gruyère')) return 'Fribourg';
    if (region.includes('Vaud')) return 'Vaud';
    if (region.includes('Valais')) return 'Valais';
    return 'Autre';
}

// Filtrer les stations
function filterStations() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cantonFilter = document.getElementById('cantonFilter');
    const canton = cantonFilter ? cantonFilter.value : 'all';
    const maxPrice = document.getElementById('priceFilter').value;
    const amenity = document.getElementById('amenityFilter').value;

    filteredStations = skiStations.filter(station => {
        // Filtre de recherche
        const matchesSearch = station.name.toLowerCase().includes(searchTerm) ||
                            station.region.toLowerCase().includes(searchTerm);

        // Filtre de canton
        const stationCanton = getCanton(station.region);
        const matchesCanton = canton === 'all' || stationCanton === canton;

        // Filtre de prix
        const matchesPrice = maxPrice === 'all' || station.rvParking.price <= parseInt(maxPrice);

        // Filtre de commodités
        const matchesAmenity = amenity === 'all' || station.rvParking.amenities.includes(amenity);

        return matchesSearch && matchesCanton && matchesPrice && matchesAmenity;
    });

    addMarkers(filteredStations);
    updateStationList(filteredStations);

    // Ajuster la vue de la carte pour afficher toutes les stations filtrées
    if (filteredStations.length > 0) {
        const bounds = L.latLngBounds(filteredStations.map(s => [s.lat, s.lng]));
        map.fitBounds(bounds, { padding: [50, 50] });
    } else {
        // Si aucune station ne correspond, revenir à la vue par défaut
        map.setView([46.5, 7.1], 9);
    }
}

// Changer d'onglet (pour mobile)
function switchTab(tab) {
    const sidebar = document.querySelector('.sidebar');
    const mapElement = document.getElementById('map');
    const tabButtons = document.querySelectorAll('.tab-button');

    // Retirer la classe active de tous les boutons
    tabButtons.forEach(btn => btn.classList.remove('active'));

    if (tab === 'list') {
        sidebar.classList.add('active');
        mapElement.classList.remove('active');
        tabButtons[0].classList.add('active');
    } else {
        sidebar.classList.remove('active');
        mapElement.classList.add('active');
        tabButtons[1].classList.add('active');

        // Forcer Leaflet à recalculer la taille de la carte
        setTimeout(() => {
            if (map) {
                map.invalidateSize();
            }
        }, 100);
    }
}

// Événements pour les filtres
document.addEventListener('DOMContentLoaded', function() {
    initMap();

    document.getElementById('searchInput').addEventListener('input', filterStations);
    document.getElementById('cantonFilter').addEventListener('change', filterStations);
    document.getElementById('priceFilter').addEventListener('change', filterStations);
    document.getElementById('amenityFilter').addEventListener('change', filterStations);
});
