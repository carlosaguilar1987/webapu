# 🌐 Página Web Responsiva con Mapa Interactivo

Una página web moderna, responsiva y completamente funcional con mapa interactivo incluido, diseñada con las mejores prácticas de desarrollo web.

## ✨ Características Principales

### 🎨 Diseño y UX
- **Diseño Responsivo**: Se adapta perfectamente a todos los dispositivos (móvil, tablet, desktop)
- **Interfaz Moderna**: Utiliza las últimas tendencias de diseño web con gradientes y sombras
- **Navegación Intuitiva**: Menú de navegación fijo con desplazamiento suave
- **Animaciones Suaves**: Transiciones y efectos visuales para una experiencia premium

### 🗺️ Mapa Interactivo
- **Integración Leaflet**: Mapa interactivo usando la biblioteca Leaflet.js
- **Marcador Personalizado**: Icono personalizado para la ubicación de la empresa
- **Funcionalidad de Direcciones**: Botón "Cómo llegar" que abre Google Maps
- **Controles Personalizados**: Botón para centrar el mapa en la ubicación

### 📱 Funcionalidades Móviles
- **Menú Hamburger**: Navegación móvil con animación de barras
- **Touch-Friendly**: Optimizado para dispositivos táctiles
- **Responsive Grid**: Layout que se adapta automáticamente al tamaño de pantalla

### 📝 Formulario de Contacto
- **Validación en Tiempo Real**: Validación de campos mientras el usuario escribe
- **Mensajes de Error**: Feedback visual claro para el usuario
- **Notificaciones**: Sistema de notificaciones elegante para confirmaciones
- **Estados de Carga**: Indicadores visuales durante el envío

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Variables CSS, Grid, Flexbox, Media Queries
- **JavaScript ES6+**: Funcionalidad interactiva y manejo de eventos
- **Leaflet.js**: Biblioteca de mapas interactivos
- **Font Awesome**: Iconos vectoriales profesionales
- **OpenStreetMap**: Tiles de mapas gratuitos

## 📁 Estructura del Proyecto

```
proyecto/
├── index.html          # Página principal HTML
├── styles.css          # Estilos CSS responsivos
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación del proyecto
```

## 🛠️ Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar mapas y iconos)

### Pasos de Instalación

1. **Clonar o Descargar el Proyecto**
   ```bash
   git clone [url-del-repositorio]
   cd proyecto
   ```

2. **Abrir en el Navegador**
   - Abrir `index.html` en tu navegador web preferido
   - O usar un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Acceder a la Página**
   - Abrir `http://localhost:8000` en tu navegador

## 🔧 Personalización

### Cambiar Ubicación del Mapa

En `script.js`, modifica las coordenadas en la función `initMap()`:

```javascript
const companyLocation = {
    lat: 19.4326,  // Cambia por tu latitud
    lng: -99.1332, // Cambia por tu longitud
    name: 'MiEmpresa', // Cambia por el nombre de tu empresa
    address: 'Av. Principal 123, Ciudad' // Cambia por tu dirección
};
```

### Personalizar Colores

En `styles.css`, modifica las variables CSS en `:root`:

```css
:root {
    --primary-color: #2563eb;    /* Color principal */
    --secondary-color: #1e40af;  /* Color secundario */
    --accent-color: #3b82f6;     /* Color de acento */
    /* ... más variables ... */
}
```

### Cambiar Contenido

- **Empresa**: Modifica el texto en `index.html`
- **Servicios**: Actualiza las tarjetas de servicios
- **Información de Contacto**: Cambia direcciones, teléfonos y emails
- **Redes Sociales**: Actualiza los enlaces en el footer

## 📱 Características Responsivas

### Breakpoints Implementados
- **Desktop**: > 768px - Layout completo con sidebar
- **Tablet**: 768px - Layout adaptado para pantallas medianas
- **Móvil**: < 480px - Layout optimizado para pantallas pequeñas

### Elementos Responsivos
- Navegación que se convierte en menú hamburger
- Grid de servicios que se apila verticalmente
- Mapa que se adapta al ancho de pantalla
- Formulario que se reorganiza en móvil

## 🗺️ Funcionalidades del Mapa

### Características del Mapa
- **Zoom**: Niveles de zoom del 1 al 18
- **Pan**: Arrastrar para mover el mapa
- **Marcador**: Ubicación de la empresa con popup informativo
- **Controles**: Botón personalizado para centrar el mapa

### Integración con Google Maps
- **Botón "Cómo llegar"**: Abre Google Maps con la ruta
- **Detección de Dispositivo**: Abre la app en móviles, web en desktop
- **Coordenadas**: Usa las coordenadas exactas de la empresa

## 📝 Sistema de Formularios

### Validación Implementada
- **Nombre**: Mínimo 2 caracteres
- **Email**: Formato válido de email
- **Mensaje**: Mínimo 10 caracteres
- **Feedback Visual**: Errores y confirmaciones claras

### Estados del Formulario
- **Normal**: Campos vacíos o con contenido válido
- **Error**: Campos con contenido inválido
- **Enviando**: Estado de carga durante el envío
- **Éxito**: Confirmación de envío exitoso

## 🎭 Animaciones y Efectos

### Efectos de Scroll
- **Fade In**: Elementos aparecen al hacer scroll
- **Header Transparente**: Efecto de transparencia al hacer scroll
- **Parallax Suave**: Efectos de profundidad visual

### Transiciones
- **Hover Effects**: Cambios suaves en botones y enlaces
- **Menu Móvil**: Animación del botón hamburger
- **Tarjetas**: Elevación al pasar el mouse

## 🔍 SEO y Accesibilidad

### Optimizaciones SEO
- **Meta Tags**: Descripción y palabras clave
- **Estructura Semántica**: Uso correcto de HTML5
- **Títulos Jerárquicos**: H1, H2, H3 bien estructurados
- **Alt Text**: Descripciones para imágenes

### Características de Accesibilidad
- **Navegación por Teclado**: Tab y Enter funcionan correctamente
- **Focus Visible**: Indicadores claros de foco
- **Contraste**: Colores con suficiente contraste
- **ARIA Labels**: Etiquetas para lectores de pantalla

## 🚀 Optimizaciones de Rendimiento

### Carga Optimizada
- **CDN**: Iconos y mapas desde CDNs confiables
- **Lazy Loading**: Elementos se cargan cuando son necesarios
- **Minificación**: CSS y JS optimizados para producción

### JavaScript Eficiente
- **Event Delegation**: Manejo eficiente de eventos
- **Debouncing**: Optimización de eventos de scroll
- **Intersection Observer**: API moderna para efectos de scroll

## 🐛 Solución de Problemas

### Problemas Comunes

#### Mapa No Se Carga
- Verificar conexión a internet
- Revisar consola del navegador para errores
- Confirmar que Leaflet.js se cargó correctamente

#### Estilos No Se Aplican
- Verificar que `styles.css` esté en la misma carpeta
- Limpiar caché del navegador
- Revisar ruta del archivo CSS

#### JavaScript No Funciona
- Verificar consola del navegador para errores
- Confirmar que `script.js` esté en la misma carpeta
- Verificar que no haya conflictos con otros scripts

### Debugging
- **Console Logs**: Mensajes informativos en la consola
- **Funciones de Debug**: `logMapInfo()`, `exportFormData()`
- **Validación Visual**: Errores se muestran claramente en la UI

## 🔮 Próximas Mejoras

### Funcionalidades Planificadas
- [ ] Integración con APIs de geolocalización
- [ ] Sistema de chat en vivo
- [ ] Galería de imágenes con lightbox
- [ ] Blog integrado
- [ ] Sistema de reservas/citas

### Optimizaciones Técnicas
- [ ] Service Worker para offline
- [ ] Lazy loading de imágenes
- [ ] Compresión de assets
- [ ] Cache inteligente

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos personales y comerciales.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- **Issues**: Abre un issue en GitHub
- **Email**: [tu-email@ejemplo.com]
- **Documentación**: Revisa este README y los comentarios en el código

## 🙏 Agradecimientos

- **Leaflet.js**: Por la excelente biblioteca de mapas
- **Font Awesome**: Por los iconos vectoriales
- **OpenStreetMap**: Por los tiles de mapas gratuitos
- **Comunidad Web**: Por las mejores prácticas y estándares

---

**¡Disfruta usando tu nueva página web responsiva con mapa! 🎉**
