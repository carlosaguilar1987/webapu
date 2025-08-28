// ===== VARIABLES GLOBALES =====
let map; // Variable global para el mapa de Leaflet
let marker; // Variable global para el marcador del mapa

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
    // Obtener elementos del DOM
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Verificar que los elementos existen antes de continuar
    if (!hamburger || !navMenu) {
        console.warn('Elementos de navegación móvil no encontrados');
        return;
    }
    
    // Agregar evento click al botón hamburguesa
    hamburger.addEventListener('click', function() {
        console.log('Botón hamburguesa clickeado');
        
        // Alternar la clase 'active' en el menú
        navMenu.classList.toggle('active');
        
        // Alternar la clase 'active' en el botón hamburguesa
        hamburger.classList.toggle('active');
        
        // Animar las barras del botón hamburguesa
        animateHamburger();
    });
    
    // Cerrar menú móvil al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Enlace de navegación clickeado:', this.textContent);
            
            // Cerrar el menú móvil
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Restaurar las barras del botón hamburguesa
            resetHamburger();
        });
    });
    
    // Cerrar menú al hacer click fuera de él
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            resetHamburger();
        }
    });
}

// ===== ANIMACIÓN DEL BOTÓN HAMBURGUESA =====
function animateHamburger() {
    const bars = document.querySelectorAll('.bar');
    
    if (bars.length === 3) {
        // Transformar la primera barra en una X
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        
        // Ocultar la barra del medio
        bars[1].style.opacity = '0';
        
        // Transformar la tercera barra en una X
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    }
}

// ===== RESTAURAR BOTÓN HAMBURGUESA =====
function resetHamburger() {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach(bar => {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
    });
}

// ===== INICIALIZACIÓN DEL MAPA INTERACTIVO =====
function initMap() {
    // Verificar que el elemento del mapa existe
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Elemento del mapa no encontrado');
        return;
    }
    
    console.log('Inicializando mapa...');
    
    // Coordenadas de la ubicación (Madrid, España como ejemplo)
    const latitude = 40.4168;
    const longitude = -3.7038;
    
    try {
        // Crear el mapa usando Leaflet
        map = L.map('map').setView([latitude, longitude], 15);
        
        // Agregar capa de tiles de OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);
        
        // Crear y agregar marcador personalizado
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: '<i class="fas fa-map-marker-alt" style="color: #2563eb; font-size: 2rem;"></i>',
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });
        
        marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
        
        // Agregar popup al marcador
        marker.bindPopup(`
            <div style="text-align: center;">
                <h3 style="margin: 0 0 10px 0; color: #2563eb;">MiEmpresa</h3>
                <p style="margin: 0;">Av. Principal 123, Ciudad</p>
                <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #666;">
                    <i class="fas fa-phone"></i> +1 (555) 123-4567
                </p>
            </div>
        `);
        
        // Agregar evento click al marcador
        marker.on('click', function() {
            console.log('Marcador del mapa clickeado');
        });
        
        // Agregar controles de zoom
        map.zoomControl.setPosition('bottomright');
        
        console.log('Mapa inicializado correctamente');
        
    } catch (error) {
        console.error('Error al inicializar el mapa:', error);
        showMapError();
    }
}

// ===== MOSTRAR ERROR DEL MAPA =====
function showMapError() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; background-color: #f8f9fa; border-radius: 8px;">
                <div style="text-align: center; color: #6c757d;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>No se pudo cargar el mapa</p>
                    <p style="font-size: 0.9em;">Por favor, recarga la página</p>
                </div>
            </div>
        `;
    }
}

// ===== INICIALIZACIÓN DEL FORMULAR DE CONTACTO =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.warn('Formulario de contacto no encontrado');
        return;
    }
    
    console.log('Inicializando formulario de contacto...');
    
    // Agregar evento submit al formulario
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Formulario enviado');
        
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
    
    // Agregar validación en tiempo real
    addRealTimeValidation();
}

// ===== VALIDACIÓN DE DATOS DEL FORMULAR =====
function validateFormData(name, email, message) {
    // Validar nombre
    if (!name || name.trim().length < 2) {
        showFormError('Por favor, ingresa un nombre válido (mínimo 2 caracteres)');
        return false;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showFormError('Por favor, ingresa un email válido');
        return false;
    }
    
    // Validar mensaje
    if (!message || message.trim().length < 10) {
        showFormError('Por favor, ingresa un mensaje válido (mínimo 10 caracteres)');
        return false;
    }
    
    return true;
}

// ===== MOSTRAR ERROR DEL FORMULAR =====
function showFormError(message) {
    // Remover mensaje de error anterior si existe
    const existingError = document.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Crear y mostrar nuevo mensaje de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
        color: #dc3545;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        border-radius: 4px;
        padding: 10px;
        margin-top: 10px;
        font-size: 0.9em;
    `;
    errorDiv.textContent = message;
    
    // Insertar después del formulario
    const contactForm = document.getElementById('contactForm');
    contactForm.parentNode.insertBefore(errorDiv, contactForm.nextSibling);
    
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// ===== ENVÍO DEL FORMULAR =====
function submitForm(name, email, message) {
    console.log('Enviando formulario...', { name, email, message });
    
    // Mostrar indicador de carga
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simular envío (en un caso real, aquí iría la llamada a la API)
    setTimeout(() => {
        // Mostrar mensaje de éxito
        showFormSuccess();
        
        // Restaurar botón
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Limpiar formulario
        document.getElementById('contactForm').reset();
        
    }, 2000);
}

// ===== MOSTRAR ÉXITO DEL FORMULAR =====
function showFormSuccess() {
    // Remover mensaje de error anterior si existe
    const existingError = document.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Crear y mostrar mensaje de éxito
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.style.cssText = `
        color: #155724;
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        border-radius: 4px;
        padding: 10px;
        margin-top: 10px;
        font-size: 0.9em;
    `;
    successDiv.textContent = '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.';
    
    // Insertar después del formulario
    const contactForm = document.getElementById('contactForm');
    contactForm.parentNode.insertBefore(successDiv, contactForm.nextSibling);
    
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.remove();
        }
    }, 5000);
}

// ===== VALIDACIÓN EN TIEMPO REAL =====
function addRealTimeValidation() {
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    
    inputs.forEach(input => {
        // Validar al perder el foco
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        // Validar al escribir
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

// ===== VALIDAR CAMPO INDIVIDUAL =====
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    switch (field.type) {
        case 'text':
            if (!value || value.length < 2) {
                isValid = false;
                errorMessage = 'Este campo debe tener al menos 2 caracteres';
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value || !emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, ingresa un email válido';
            }
            break;
            
        case 'textarea':
            if (!value || value.length < 10) {
                isValid = false;
                errorMessage = 'Este campo debe tener al menos 10 caracteres';
            }
            break;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
}

// ===== MOSTRAR ERROR DE CAMPO =====
function showFieldError(field, message) {
    // Remover error anterior si existe
    clearFieldError(field);
    
    // Agregar clase de error
    field.classList.add('error');
    
    // Crear mensaje de error
    const errorSpan = document.createElement('span');
    errorSpan.className = 'field-error';
    errorSpan.style.cssText = `
        color: #dc3545;
        font-size: 0.8em;
        margin-top: 5px;
        display: block;
    `;
    errorSpan.textContent = message;
    
    // Insertar después del campo
    field.parentNode.appendChild(errorSpan);
}

// ===== LIMPIAR ERROR DE CAMPO =====
function clearFieldError(field) {
    field.classList.remove('error');
    const errorSpan = field.parentNode.querySelector('.field-error');
    if (errorSpan) {
        errorSpan.remove();
    }
}

// ===== DESPLAZAMIENTO SUAVE =====
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcular posición considerando el header fijo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Desplazamiento suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                console.log('Desplazamiento suave a:', targetId);
            }
        });
    });
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
    
    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.service-card, .contact-form, .map-info');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Efecto de cambio de color del header al hacer scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = 'var(--background-color)';
                header.style.backdropFilter = 'none';
            }
        });
    }
}

// ===== FUNCIONES UTILITARIAS =====

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    console.log('Notificación:', message, 'Tipo:', type);
    
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Estilos según el tipo
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#212529';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }
    
    notification.textContent = message;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar y remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Función para manejar errores
function handleError(error, context) {
    console.error(`Error en ${context}:`, error);
    showNotification(`Error: ${error.message}`, 'error');
}

// Función para verificar si estamos en móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Función para obtener parámetros de URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ===== EVENTOS ADICIONALES =====

// Evento de redimensionamiento de ventana
window.addEventListener('resize', function() {
    console.log('Ventana redimensionada:', window.innerWidth, 'x', window.innerHeight);
    
    // Ajustar mapa si es necesario
    if (map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});

// Evento de carga completa de la página
window.addEventListener('load', function() {
    console.log('Página completamente cargada');
    
    // Ocultar loader si existe
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
});

// Evento de teclas de acceso rápido
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + Enter para enviar formulario
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        const contactForm = document.getElementById('contactForm');
        if (contactForm && document.activeElement.closest('#contactForm')) {
            contactForm.dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape para cerrar menú móvil
    if (event.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            resetHamburger();
        }
    }
});

console.log('Script principal cargado correctamente');