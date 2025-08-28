// ===== VARIABLES GLOBALES =====
let map; // Variable global para el mapa de Leaflet
let currentMarker; // Marcador actual en el mapa

// ===== INICIALIZACIÓN CUANDO EL DOM ESTÉ LISTO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');
    
    // Inicializar todas las funcionalidades
    initMobileNavigation();
    initMap();
    initContactForm();
    initSmoothScrolling();
    initScrollEffects();
});

// ===== FUNCIONALIDAD DE NAVEGACIÓN MÓVIL =====
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        // Evento para abrir/cerrar el menú móvil
        hamburger.addEventListener('click', function() {
            console.log('Menú móvil activado');
            
            // Alternar la clase 'active' en el menú
            navMenu.classList.toggle('active');
            
            // Alternar la clase 'active' en el botón hamburger
            hamburger.classList.toggle('active');
            
            // Animar las barras del hamburger
            animateHamburger();
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Enlace de navegación clickeado');
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                resetHamburger();
            });
        });
        
        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                resetHamburger();
            }
        });
    }
}

// ===== ANIMACIÓN DEL BOTÓN HAMBURGER =====
function animateHamburger() {
    const bars = document.querySelectorAll('.bar');
    
    if (bars.length === 3) {
        // Primera barra - rotar 45 grados
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        
        // Segunda barra - hacer transparente
        bars[1].style.opacity = '0';
        
        // Tercera barra - rotar -45 grados
        bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    }
}

// ===== RESET DEL BOTÓN HAMBURGER =====
function resetHamburger() {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach(bar => {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
    });
}

// ===== INICIALIZACIÓN DEL MAPA =====
function initMap() {
    console.log('Inicializando mapa...');
    
    // Coordenadas de la ubicación (puedes cambiarlas según tu ubicación)
    const companyLocation = {
        lat: 19.4326, // Latitud de Ciudad de México como ejemplo
        lng: -99.1332, // Longitud de Ciudad de México como ejemplo
        name: 'MiEmpresa',
        address: 'Av. Principal 123, Ciudad'
    };
    
    try {
        // Crear el mapa usando Leaflet
        map = L.map('map').setView([companyLocation.lat, companyLocation.lng], 15);
        
        // Agregar capa de tiles de OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(map);
        
        // Crear marcador personalizado
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: '<i class="fas fa-map-marker-alt" style="color: #2563eb; font-size: 2rem;"></i>',
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });
        
        // Agregar marcador al mapa
        currentMarker = L.marker([companyLocation.lat, companyLocation.lng], {
            icon: customIcon
        }).addTo(map);
        
        // Agregar popup al marcador
        currentMarker.bindPopup(`
            <div style="text-align: center;">
                <h3 style="margin: 0 0 10px 0; color: #2563eb;">${companyLocation.name}</h3>
                <p style="margin: 0; color: #666;">${companyLocation.address}</p>
                <button onclick="getDirections()" style="margin-top: 10px; padding: 5px 10px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Cómo llegar
                </button>
            </div>
        `);
        
        // Agregar controles adicionales al mapa
        addMapControls();
        
        // Evento para centrar el mapa en la ubicación de la empresa
        document.querySelector('.nav-link[href="#mapa"]').addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('#mapa');
            // Centrar el mapa en la ubicación de la empresa
            setTimeout(() => {
                map.setView([companyLocation.lat, companyLocation.lng], 15);
            }, 500);
        });
        
        console.log('Mapa inicializado correctamente');
        
    } catch (error) {
        console.error('Error al inicializar el mapa:', error);
        showMapError();
    }
}

// ===== AGREGAR CONTROLES AL MAPA =====
function addMapControls() {
    // Botón para centrar el mapa en la ubicación de la empresa
    const centerButton = L.control({ position: 'topleft' });
    
    centerButton.onAdd = function() {
        const div = L.DomUtil.create('div', 'leaflet-control leaflet-bar');
        div.innerHTML = '<i class="fas fa-crosshairs" style="padding: 8px; cursor: pointer; color: #2563eb;"></i>';
        div.title = 'Centrar en ubicación';
        
        div.onclick = function() {
            const companyLocation = { lat: 19.4326, lng: -99.1332 };
            map.setView([companyLocation.lat, companyLocation.lng], 15);
        };
        
        return div;
    };
    
    centerButton.addTo(map);
}

// ===== FUNCIÓN PARA OBTENER DIRECCIONES =====
function getDirections() {
    const companyLocation = { lat: 19.4326, lng: -99.1332 };
    
    // Detectar si es dispositivo móvil
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Abrir en Google Maps app
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${companyLocation.lat},${companyLocation.lng}`);
    } else {
        // Abrir en Google Maps web
        window.open(`https://www.google.com/maps/dir//${companyLocation.lat},${companyLocation.lng}`);
    }
}

// ===== MOSTRAR ERROR DEL MAPA =====
function showMapError() {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #f8f9fa; border-radius: 8px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #dc3545; margin-bottom: 1rem;"></i>
                <h3 style="color: #dc3545; margin-bottom: 0.5rem;">Error al cargar el mapa</h3>
                <p style="color: #6c757d; text-align: center;">No se pudo cargar el mapa. Por favor, recarga la página.</p>
            </div>
        `;
    }
}

// ===== INICIALIZACIÓN DEL FORMULARIO DE CONTACTO =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario de contacto enviado');
            
            // Obtener datos del formulario
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validar datos
            if (validateFormData(name, email, message)) {
                // Simular envío del formulario
                submitForm(name, email, message);
            }
        });
        
        // Validación en tiempo real
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

// ===== VALIDACIÓN DE DATOS DEL FORMULARIO =====
function validateFormData(name, email, message) {
    let isValid = true;
    
    // Validar nombre
    if (!name || name.trim().length < 2) {
        showFieldError('name', 'El nombre debe tener al menos 2 caracteres');
        isValid = false;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showFieldError('email', 'Por favor, ingresa un email válido');
        isValid = false;
    }
    
    // Validar mensaje
    if (!message || message.trim().length < 10) {
        showFieldError('message', 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }
    
    return isValid;
}

// ===== VALIDACIÓN DE CAMPO INDIVIDUAL =====
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    switch (fieldName) {
        case 'name':
            if (!value || value.length < 2) {
                showFieldError(fieldName, 'El nombre debe tener al menos 2 caracteres');
                return false;
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value || !emailRegex.test(value)) {
                showFieldError(fieldName, 'Por favor, ingresa un email válido');
                return false;
            }
            break;
            
        case 'message':
            if (!value || value.length < 10) {
                showFieldError(fieldName, 'El mensaje debe tener al menos 10 caracteres');
                return false;
            }
            break;
    }
    
    clearFieldError(field);
    return true;
}

// ===== MOSTRAR ERROR DE CAMPO =====
function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorDiv = field.parentNode.querySelector('.field-error') || 
                    document.createElement('div');
    
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    if (!field.parentNode.querySelector('.field-error')) {
        field.parentNode.appendChild(errorDiv);
    }
    
    field.style.borderColor = '#dc3545';
}

// ===== LIMPIAR ERROR DE CAMPO =====
function clearFieldError(field) {
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    field.style.borderColor = '#e5e7eb';
}

// ===== ENVÍO DEL FORMULARIO =====
function submitForm(name, email, message) {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Mostrar estado de carga
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Simular envío (en un caso real, aquí iría la llamada a la API)
    setTimeout(() => {
        // Mostrar mensaje de éxito
        showNotification('¡Mensaje enviado correctamente!', 'success');
        
        // Resetear formulario
        document.getElementById('contactForm').reset();
        
        // Restaurar botón
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        
        console.log('Formulario enviado:', { name, email, message });
        
    }, 2000);
}

// ===== MOSTRAR NOTIFICACIONES =====
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Estilos de la notificación
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        backgroundColor: type === 'success' ? '#28a745' : '#17a2b8',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        maxWidth: '400px',
        animation: 'slideInRight 0.3s ease-out'
    });
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ===== DESPLAZAMIENTO SUAVE =====
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });
}

// ===== FUNCIÓN PARA DESPLAZARSE A UNA SECCIÓN =====
function scrollToSection(sectionId) {
    const targetSection = document.querySelector(sectionId);
    
    if (targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        console.log(`Desplazándose a: ${sectionId}`);
    }
}

// ===== EFECTOS DE SCROLL =====
function initScrollEffects() {
    // Efecto de aparición de elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben aparecer
    const animatedElements = document.querySelectorAll('.service-card, .contact-form, .contact-info');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Efecto de header transparente al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--background-color)';
            header.style.backdropFilter = 'none';
        }
    });
}

// ===== FUNCIONES DE UTILIDAD =====

// Función para formatear números de teléfono
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

// Función para validar URL
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Función para debounce (útil para optimizar eventos de scroll)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== MANEJADORES DE EVENTOS ADICIONALES =====

// Evento para el botón "Conoce Más" del hero
document.addEventListener('DOMContentLoaded', function() {
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function() {
            console.log('Botón hero clickeado');
            scrollToSection('#servicios');
        });
    }
});

// Evento para botones de redes sociales
document.addEventListener('click', function(e) {
    if (e.target.closest('.social-links a')) {
        e.preventDefault();
        const platform = e.target.closest('.social-links a').querySelector('i').className;
        console.log(`Red social clickeada: ${platform}`);
        // Aquí puedes agregar analytics o tracking
    }
});

// ===== FUNCIONES PARA DEBUGGING =====

// Función para mostrar información del mapa en consola
function logMapInfo() {
    if (map) {
        console.log('Información del mapa:');
        console.log('Centro:', map.getCenter());
        console.log('Zoom:', map.getZoom());
        console.log('Marcadores:', map.getLayers());
    } else {
        console.log('El mapa no está inicializado');
    }
}

// Función para exportar datos del formulario
function exportFormData() {
    const form = document.getElementById('contactForm');
    if (form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Datos del formulario:', data);
        return data;
    }
    return null;
}

// ===== INICIALIZACIÓN ADICIONAL =====

// Agregar estilos CSS para las notificaciones
const notificationStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: auto;
        padding: 0;
        font-size: 1rem;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;

// Insertar estilos en el head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

console.log('Script de la página web cargado completamente');