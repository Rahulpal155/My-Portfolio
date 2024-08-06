// Add event listener to contact form
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        fetch('/contact', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    });
});