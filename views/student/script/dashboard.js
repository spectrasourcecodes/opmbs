'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.add('show');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        mobileMenuBtn.style.display='none'
    });
    
    // Close menu when clicking overlay
    sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('show');
        this.classList.remove('active');
        document.body.style.overflow = '';
        mobileMenuBtn.style.display='block'
    });
    
    // Close menu when clicking a nav link (optional)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('show');
                sidebarOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('show')) {
            sidebar.classList.remove('show');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});