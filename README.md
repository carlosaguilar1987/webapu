# 🌐 Página Web Responsiva con Mapa Interactivo

Una página web moderna, completamente responsiva y con funcionalidades interactivas, incluyendo un mapa interactivo integrado.

## ✨ Características Principales

### 🎨 **Diseño Moderno y Responsivo**
- **Mobile-First Design**: Optimizada para todos los dispositivos
- **CSS Grid y Flexbox**: Layouts modernos y flexibles
- **Variables CSS**: Sistema de colores y estilos consistente
- **Animaciones suaves**: Transiciones y efectos visuales atractivos

### 🗺️ **Mapa Interactivo**
- **Leaflet.js**: Biblioteca de mapas open-source
- **OpenStreetMap**: Tiles gratuitos y de alta calidad
- **Marcador personalizado**: Icono personalizado con información de la empresa
- **Responsivo**: Se adapta perfectamente a móviles y tablets

### 📱 **Navegación Móvil**
- **Menú hamburguesa**: Navegación intuitiva en dispositivos móviles
- **Animaciones**: Transiciones suaves del menú
- **Touch-friendly**: Optimizado para pantallas táctiles

### 📝 **Formulario de Contacto**
- **Validación en tiempo real**: Feedback inmediato al usuario
- **Validación del lado del cliente**: Verificación de datos antes del envío
- **Mensajes de error/éxito**: Notificaciones claras para el usuario
- **Responsivo**: Se adapta a cualquier tamaño de pantalla

### 🚀 **Funcionalidades Avanzadas**
- **Scroll suave**: Navegación fluida entre secciones
- **Efectos de scroll**: Elementos que aparecen al hacer scroll
- **Header dinámico**: Cambia de apariencia al hacer scroll
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Estilos avanzados con variables y Grid/Flexbox
- **JavaScript ES6+**: Funcionalidad interactiva moderna
- **Leaflet.js**: Biblioteca de mapas interactivos
- **Font Awesome**: Iconos vectoriales de alta calidad
- **OpenStreetMap**: Servicio de mapas gratuito

## 📁 Estructura del Proyecto

```
proyecto/
├── index.html          # Página principal HTML
├── styles.css          # Estilos CSS responsivos
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación del proyecto
```

## 🚀 Cómo Usar

### 1. **Descarga del Proyecto**
```bash
git clone <url-del-repositorio>
cd proyecto
```

### 2. **Abrir en el Navegador**
- Abre `index.html` en tu navegador web
- O usa un servidor local para mejor rendimiento

### 3. **Servidor Local (Recomendado)**
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🎯 Personalización

### **Cambiar Colores**
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #2563eb;    /* Color principal */
    --secondary-color: #1e40af;  /* Color secundario */
    --accent-color: #3b82f6;     /* Color de acento */
}
```

### **Cambiar Ubicación del Mapa**
Modifica las coordenadas en `script.js`:
```javascript
// Coordenadas de la ubicación
const latitude = 40.4168;   // Tu latitud
const longitude = -3.7038;   // Tu longitud
```

### **Modificar Contenido**
- **Empresa**: Cambia "MiEmpresa" por el nombre de tu empresa
- **Servicios**: Edita las tarjetas de servicios en `index.html`
- **Información de contacto**: Actualiza direcciones, teléfonos y emails

### **Agregar Nuevas Secciones**
1. Añade la sección en `index.html`
2. Agrega los estilos correspondientes en `styles.css`
3. Incluye funcionalidad JavaScript si es necesario en `script.js`

## 📱 Responsividad

La página está optimizada para los siguientes breakpoints:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### **Características Responsivas**
- **Grid adaptativo**: Se reorganiza automáticamente
- **Navegación móvil**: Menú hamburguesa en pantallas pequeñas
- **Tipografía fluida**: Tamaños de texto que se adaptan
- **Espaciado adaptativo**: Márgenes y padding que se ajustan

## 🗺️ Configuración del Mapa

### **Leaflet.js**
- **Biblioteca gratuita**: No requiere API key
- **OpenStreetMap**: Tiles gratuitos y de alta calidad
- **Personalizable**: Marcadores, popups y estilos personalizados

### **Personalización del Mapa**
```javascript
// Cambiar estilo del marcador
const customIcon = L.divIcon({
    className: 'custom-marker',
    html: '<i class="fas fa-map-marker-alt"></i>',
    iconSize: [40, 40]
});

// Agregar información al popup
marker.bindPopup(`
    <h3>Tu Empresa</h3>
    <p>Tu dirección</p>
`);
```

## 🔧 Funcionalidades JavaScript

### **Navegación Móvil**
- Toggle del menú hamburguesa
- Animación de las barras
- Cierre automático al hacer click en enlaces

### **Formulario de Contacto**
- Validación en tiempo real
- Mensajes de error/éxito
- Simulación de envío (configurable para API real)

### **Efectos de Scroll**
- Aparición gradual de elementos
- Header dinámico
- Navegación suave entre secciones

## 🎨 Sistema de Diseño

### **Paleta de Colores**
- **Primario**: Azul (#2563eb)
- **Secundario**: Azul oscuro (#1e40af)
- **Acento**: Azul claro (#3b82f6)
- **Texto**: Gris oscuro (#1f2937)
- **Fondo**: Blanco (#ffffff)

### **Tipografía**
- **Familia**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Tamaños**: Escala fluida y responsiva
- **Pesos**: Regular (400), Medium (500), Bold (600)

### **Espaciado**
- **Base**: 8px (0.5rem)
- **Escala**: 8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px

## 📊 Rendimiento

### **Optimizaciones Implementadas**
- **CSS Variables**: Reutilización eficiente de estilos
- **Lazy Loading**: Elementos que aparecen al hacer scroll
- **Transiciones CSS**: Animaciones optimizadas por el navegador
- **Minificación**: Código optimizado para producción

### **Métricas Recomendadas**
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Compatibilidad de Navegadores

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+

## 🚀 Despliegue

### **Hosting Estático**
- **Netlify**: Drag & drop del proyecto
- **Vercel**: Despliegue automático desde GitHub
- **GitHub Pages**: Hosting gratuito para repositorios
- **Firebase Hosting**: Solución de Google

### **Configuración de Producción**
1. Minifica CSS y JavaScript
2. Optimiza imágenes
3. Habilita compresión GZIP
4. Configura cache del navegador

## 🐛 Solución de Problemas

### **Mapa no se carga**
- Verifica conexión a internet
- Revisa la consola del navegador
- Asegúrate de que Leaflet.js esté cargado

### **Estilos no se aplican**
- Verifica que `styles.css` esté en la misma carpeta
- Revisa la consola del navegador
- Limpia el cache del navegador

### **JavaScript no funciona**
- Verifica que `script.js` esté en la misma carpeta
- Revisa la consola del navegador
- Asegúrate de que no haya errores de sintaxis

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para proyectos personales y comerciales.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- **Issues**: Abre un issue en GitHub
- **Email**: [tu-email@ejemplo.com]
- **Documentación**: Revisa este README

## 🔄 Actualizaciones

### **Versión 1.0.0**
- ✅ Página web responsiva completa
- ✅ Mapa interactivo con Leaflet.js
- ✅ Navegación móvil funcional
- ✅ Formulario de contacto con validación
- ✅ Sistema de diseño completo
- ✅ Documentación detallada

---

**¡Disfruta usando esta página web responsiva con mapa! 🎉**
