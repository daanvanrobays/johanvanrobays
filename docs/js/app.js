// Main application JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap components
    initializeBootstrap();
    
    // Initialize lazy loading
    initializeLazyLoading();
    
    // Initialize lightbox
    initializeLightbox();
    
    // Initialize auto-hiding navbar
    initializeNavbar();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
});

function initializeBootstrap() {
    // Initialize carousel with 5 second interval
    $('.carousel').carousel({
        interval: 5000
    });
}

function initializeLazyLoading() {
    // Activate Lazy Loading for images with "lazy" class
    if (typeof $ !== 'undefined' && $.fn.Lazy) {
        $("img.lazy").Lazy({
            effect: "fadeIn",
            threshold: 200
        });
    }
}

function initializeLightbox() {
    // Configure lightbox options
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'wrapAround': true,
            'alwaysShowNavOnTouchDevices': true
        });
    }
}

function initializeNavbar() {
    // Activate navbar autohide functionality
    if (typeof $ !== 'undefined' && $.fn.autoHidingNavbar) {
        $("nav.navbar-fixed-top").autoHidingNavbar();
    }
}

function initializeSmoothScrolling() {
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navigation utilities
function navigateToPage(page) {
    window.location.href = page + '.html';
}

// Image gallery functionality
function openGallery(images, currentIndex = 0) {
    // This would integrate with the lightbox functionality
    if (typeof lightbox !== 'undefined') {
        // Lightbox will handle the gallery opening
        return;
    }
    
    // Fallback gallery implementation
    console.log('Opening gallery with images:', images, 'at index:', currentIndex);
}

// Utility functions
function showLoading() {
    const progressBar = document.getElementById('progress');
    if (progressBar) {
        progressBar.style.display = 'block';
    }
}

function hideLoading() {
    const progressBar = document.getElementById('progress');
    if (progressBar) {
        progressBar.style.display = 'none';
    }
}

// Handle responsive navigation
function toggleMobileMenu() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar) {
        navbar.classList.toggle('show');
    }
}

// Add active class to current navigation item
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.navbar-nav li');
    
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link && link.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
}

// Initialize active nav item when page loads
document.addEventListener('DOMContentLoaded', setActiveNavItem);