
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('open');
            // Hamburger Animation
            hamburger.classList.toggle('open');
        });
   