// Venmo Integration
document.addEventListener('DOMContentLoaded', function() {
    // Replace with your actual Venmo username or payment link
    const venmoUsername = 'your-venmo-username';
    const venmoAmount = '10.00';
    const venmoNote = 'Club Donation';
    
    // Create Venmo payment URL
    const venmoUrl = `https://venmo.com/${venmoUsername}?txn=pay&amount=${venmoAmount}&note=${encodeURIComponent(venmoNote)}`;
    
    // Add click handler to Venmo button
    const venmoButton = document.getElementById('venmoButton');
    if (venmoButton) {
        venmoButton.addEventListener('click', function() {
            window.open(venmoUrl, '_blank');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if ((currentPage === 'index.html' && linkHref === 'index.html') || 
            (currentPage === 'about.html' && linkHref === 'about.html')) {
            link.classList.add('active');
        }
    });
});

// Simple form validation for contact form (if added later)
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return false;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Mobile menu toggle (for future responsive menu)
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}
