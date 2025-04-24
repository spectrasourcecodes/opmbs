'use strict'

// Password strength indicator
document.getElementById('registerPassword').addEventListener('input', function() {
    const password = this.value;
    const strengthFill = document.getElementById('strength-fill');
    const strengthText = document.getElementById('strength-text');
    
    let strength = 0;
    if (password.length > 0) strength += 1;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    const width = strength * 20;
    strengthFill.style.width = width + '%';
    
    if (strength <= 2) {
        strengthFill.style.backgroundColor = '#ff4757';
        strengthText.textContent = 'Password strength: weak';
    } else if (strength <= 4) {
        strengthFill.style.backgroundColor = '#ffa502';
        strengthText.textContent = 'Password strength: medium';
    } else {
        strengthFill.style.backgroundColor = '#2ed573';
        strengthText.textContent = 'Password strength: strong';
    }
});