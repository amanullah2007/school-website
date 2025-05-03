document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('admissionForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Log form data (you would typically send this to a server)
        console.log('Form submitted:', data);

        // Show success message
        successMessage.classList.remove('hidden');

        // Optional: Reset form after submission
        // form.reset();
    });

    // Optional: Add input validation
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
            e.preventDefault();
            this.classList.add('invalid');
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('invalid')) {
                this.classList.remove('invalid');
            }
        });
    });
});