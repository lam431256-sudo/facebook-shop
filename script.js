
=${encodeURIComponent(message)}`; // Replace with actual phone number
            window.open(whatsappUrl, '_blank');
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        // For demo purposes, just alert. In a real app, send to server.
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    });
});
