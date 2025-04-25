'use strict'

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-settings`).classList.add('active');
        });
    });
    
    // Password confirmation validation
    const passwordForm = document.querySelector('form[action="/update-password"]');
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (newPassword !== confirmPassword) {
                e.preventDefault();
                alert('New password and confirmation password do not match!');
            }
            
            // Add more password strength validation if needed
        });
    }
});

function confirmAccountDeletion() {
    if (confirm('Are you absolutely sure you want to delete your account? This action cannot be undone.')) {
        window.location.href = '/delete-account';
    }
}