// CampusConnect admin-side interactions

// Demo admin login validation
const loginForm = document.getElementById('adminLoginForm');
if (loginForm) {
    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('adminEmail').value.trim();
        const password = document.getElementById('adminPassword').value.trim();
        if (!email || !password) { alert('Please enter email and password.'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Please enter a valid email address.'); return; }
        if (email === 'admin@campusconnect.com' && password === 'admin123') {
            alert('Login successful!');
            window.location.href = 'admin-dashboard.html';
        } else { alert('Invalid email or password.'); }
    });
}

// Add-event form validation
const addEventForm = document.querySelector('.admin-form form');
if (addEventForm) {
    addEventForm.addEventListener('submit', event => {
        event.preventDefault();
        const fields = addEventForm.querySelectorAll('input:not([type=file]), select, textarea');
        let valid = true;
        fields.forEach(field => { if (!field.value.trim()) valid = false; });
        if (!valid) { alert('Please fill in all event details.'); return; }
        alert('Event details submitted successfully!');
        addEventForm.reset();
    });
}

// Confirmation before removing displayed items
document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this item?')) {
            const row = button.closest('tr');
            const item = button.closest('.gallery-item');
            if (row) row.remove();
            if (item) item.remove();
        }
    });
});
