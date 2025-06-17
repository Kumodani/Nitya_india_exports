 const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked (optional)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        // Add this to your existing JavaScript
    document.addEventListener('DOMContentLoaded', function() {
        // Get the categories dropdown element
        const categoriesLink = document.querySelector('.has-dropdown > a');
        const categoriesDropdown = document.querySelector('.categories-dropdown');
        
        // Toggle dropdown on click (for mobile)
        categoriesLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('active');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.has-dropdown')) {
                document.querySelectorAll('.has-dropdown').forEach(el => {
                    el.classList.remove('active');
                });
            }
        });
    });
    function scrollProducts(direction) {
    const container = document.getElementById('productsContainer');
    const scrollAmount = 300;
    
    clearInterval(autoScrollInterval);
    container.scrollBy({ 
        left: direction * scrollAmount, 
        behavior: 'smooth' 
    });
    
    // Restart auto-scroll after 1 second
    setTimeout(startAutoScroll, 1000);
}

// Auto-scroll variables
let autoScrollInterval;
const scrollSpeed = 1.5; // Increased from 1 for smoother motion
const scrollInterval = 16; // ~60fps (changed from 30ms)

function startAutoScroll() {
    clearInterval(autoScrollInterval); // Clear any existing interval
    const container = document.getElementById('productsContainer');
    
    autoScrollInterval = setInterval(() => {
        const atEnd = container.scrollLeft >= (container.scrollWidth - container.clientWidth - 1);
        
        if (atEnd) {
            container.scrollTo({ left: 0, behavior: 'instant' });
        } else {
            container.scrollBy({ left: scrollSpeed, behavior: 'auto' });
        }
    }, scrollInterval);
}

// Pause/resume logic
function setupAutoScrollControls() {
    const container = document.getElementById('productsContainer');
    
    container.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    container.addEventListener('mouseleave', startAutoScroll);
    container.addEventListener('touchstart', () => clearInterval(autoScrollInterval), { passive: true });
    container.addEventListener('touchend', () => setTimeout(startAutoScroll, 1000), { passive: true });
}

// Initialize everything
window.addEventListener('DOMContentLoaded', () => {
    startAutoScroll(); // Start immediately
    setupAutoScrollControls(); // Setup pause/resume handlers
});

// Product link click handling
document.querySelectorAll('.product-link').forEach(link => {
    link.addEventListener('click', () => clearInterval(autoScrollInterval));
});

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLink = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

       