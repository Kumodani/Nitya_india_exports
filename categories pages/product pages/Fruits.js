 const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('open');
            // Hamburger Animation
            hamburger.classList.toggle('open');
        });
        // Modal Functions
        function openEnquiryModal() {
            document.getElementById('enquiryModal').style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
        
        function closeEnquiryModal() {
            document.getElementById('enquiryModal').style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
            document.getElementById('enquiryForm').reset();
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('enquiryModal');
            if (event.target == modal) {
                closeEnquiryModal();
            }
        }
        
        // Form Submission
        document.getElementById('enquiryModal').addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log("Form submitted");
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
           try {
                const formData = new FormData(e.target);
                console.log(formData);
                const response = await fetch('http://localhost:3000/query', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: {
                    'Content-Type': 'application/json'  // Ensure the server knows we're sending JSON       
                }
                });
                
                const result = await response.json();

                if (!response.ok) {
                throw new Error(result.message || 'Server error');
                }

                alert(result.message || 'Enquiry sent successfully!');
                closeEnquiryModal();
            } catch (error) {
                console.error('Submission error:', error);
                alert(error.message || 'Failed to send enquiry. Please try again.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Enquiry';
            }
        });