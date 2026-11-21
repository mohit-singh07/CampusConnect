// CampusConnect client-side interactions

// Event search and category filtering
const eventSearch = document.querySelector('.search-box input');
const categorySelect = document.getElementById('category');
const eventCards = document.querySelectorAll('.event-card');

function filterEvents() {
    const searchText = eventSearch ? eventSearch.value.trim().toLowerCase() : '';
    const selectedCategory = categorySelect ? categorySelect.value.toLowerCase() : 'all';
    eventCards.forEach(card => {
        const title = card.textContent.toLowerCase();
        let category = '';
        if (title.includes('cultural') || title.includes('concert')) category = 'cultural';
        else if (title.includes('sports')) category = 'sports';
        else if (title.includes('workshop')) category = 'workshops';
        else if (title.includes('tech') || title.includes('ai')) category = 'technical';
        const searchMatch = title.includes(searchText);
        const categoryMatch = selectedCategory === 'all' || category === selectedCategory;
        card.style.display = searchMatch && categoryMatch ? '' : 'none';
    });
}
if (eventSearch) eventSearch.addEventListener('input', filterEvents);
if (categorySelect) categorySelect.addEventListener('change', filterEvents);

// Registration form validation
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const enrollment = document.getElementById('enrollment').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const selectedEvent = document.getElementById('event').value;
        if (!name || !email || !enrollment || !phone || !selectedEvent) { alert('Please fill in all fields.'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Please enter a valid email address.'); return; }
        if (!/^[0-9]{10}$/.test(phone)) { alert('Please enter a valid 10-digit phone number.'); return; }
        alert('Registration submitted successfully!');
        registrationForm.reset();
    });
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !subject || !message) { alert('Please fill in all fields.'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Please enter a valid email address.'); return; }
        alert('Your message has been submitted successfully!');
        contactForm.reset();
    });
}
