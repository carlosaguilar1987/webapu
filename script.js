/*
  ==========================================================
  Lógica de la landing y configuración del mapa Leaflet
  – Centra por geolocalización (si hay permiso) o usa un fallback
  – Incluye ejemplos para personalizar el marcador y la vista
  ==========================================================
*/

// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // Inicialización del mapa Leaflet
  initMap();
});

function initMap() {
  // Referencia del contenedor del mapa
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;

  // Coordenadas de respaldo (Madrid centro)
  const fallback = { lat: 40.4168, lng: -3.7038, zoom: 13 };

  // Crea el mapa con la vista inicial de respaldo
  const map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: true,
  }).setView([fallback.lat, fallback.lng], fallback.zoom);

  // Capa base de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contribuyentes'
  }).addTo(map);

  // Marcador principal (puedes cambiar las coords por las de tu negocio)
  const marker = L.marker([fallback.lat, fallback.lng]).addTo(map);
  marker.bindPopup('Estamos aquí').openPopup();

  // Intenta centrar por geolocalización del navegador (requiere permiso del usuario)
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      // Éxito
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const userLatLng = [latitude, longitude];

        // Anima la transición a la nueva vista
        map.flyTo(userLatLng, 14, { duration: 1.2 });

        // Mueve el marcador y actualiza el popup
        marker.setLatLng(userLatLng);
        marker.setPopupContent('Tu ubicación aproximada');
      },
      // Error (rechazado o no disponible): nos quedamos con el fallback
      (err) => {
        // Puedes registrar el error si lo necesitas
        // console.warn('Geolocation error', err);
      },
      // Opciones de geolocalización
      {
        enableHighAccuracy: false,
        maximumAge: 30000,
        timeout: 7000
      }
    );
  }

  // Ejemplo: función para actualizar el marcador a coordenadas concretas
  // Llama a setBusinessLocation({ lat: ..., lng: ... }) con tus coordenadas
  function setBusinessLocation(coords) {
    const { lat, lng } = coords;
    marker.setLatLng([lat, lng]);
    map.setView([lat, lng], 15);
    marker.setPopupContent('Nuestra ubicación');
  }

  // Exponer de forma segura para depurar en consola (opcional)
  // window.setBusinessLocation = setBusinessLocation;
}

