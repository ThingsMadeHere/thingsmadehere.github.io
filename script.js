// Club Configuration
const CLUB_CONFIG = {
    name: "MCHS Robotics",
    email: "Dud",
    phone: "(123) 456-7890",
    currentYear: new Date().getFullYear()
};

// Function to update all instances of the club info in the DOM
function updateClubInfo() {
    // Update all elements with the club name
    document.title = document.title.replace('MCHS Robotics', CLUB_CONFIG.name);
    
    // Update logo and other elements with the club name
    const clubNameElements = document.querySelectorAll('.logo, footer p');
    clubNameElements.forEach(element => {
        element.textContent = element.textContent.replace('MCHS Robotics', CLUB_CONFIG.name);
    });
    
    // Update copyright year
    const copyrightElement = document.querySelector('footer p');
    if (copyrightElement) {
        copyrightElement.textContent = copyrightElement.textContent
            .replace('2025', CLUB_CONFIG.currentYear);
    }
    
    // Update contact information
    const emailElement = document.querySelector('.contact-info p:first-child');
    if (emailElement) {
        emailElement.textContent = emailElement.textContent
            .replace('email@clubname.com', CLUB_CONFIG.email);
    }
    
    const phoneElement = document.querySelector('.contact-info p:nth-child(2)');
    if (phoneElement) {
        phoneElement.textContent = phoneElement.textContent
            .replace('(123) 456-7890', CLUB_CONFIG.phone);
    }
}

// Update club info when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateClubInfo();
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
