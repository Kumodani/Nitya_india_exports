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