## Landing responsiva con mapa (Leaflet)

Plantilla lista para usar con HTML + CSS + JavaScript y un mapa integrado con Leaflet/OpenStreetMap. Código comentado en español.

### Cómo usar

1. Abre `index.html` directamente en tu navegador o usa un servidor local:

```bash
cd /workspace
python3 -m http.server 5173
# abre http://localhost:5173 en tu navegador
```

2. Sustituye la imagen del héroe por tu fotografía para replicar el diseño:

- Copia tu imagen a `assets/hero.jpg` (mismo nombre) o edita en `styles.css` el valor de `--hero-image`.

3. Personaliza la ubicación del mapa en `script.js`:

- Cambia el valor de `fallback` o usa `setBusinessLocation({ lat, lng })` (descomenta la export si quieres usarlo por consola).

### Tecnologías

- HTML5 semántico, accesibilidad básica (skip link, roles, labels)
- CSS con variables, grid/flex responsivo, estilos modernos
- Leaflet 1.9.x + OpenStreetMap

### Notas

- Si activas geolocalización, el mapa intentará centrarse en tu posición (permiso del navegador).
- No se requiere backend. El formulario de contacto es de ejemplo.

# webapu
VentasWebApu
