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
       document.getElementById('enquiryForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    console.log("Form submitted");
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        const formData = new FormData(e.target);
        console.log(Object.fromEntries(formData)); // log actual data
        const response = await fetch('http://localhost:3000/query', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json'
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
        submitBtn.textContent = originalText;
    }
});
