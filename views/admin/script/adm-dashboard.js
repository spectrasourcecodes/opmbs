document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.add('show');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        mobileMenuBtn.style.display='none'
    });
    
    sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('show');
        this.classList.remove('active');
        document.body.style.overflow = '';
        mobileMenuBtn.style.display='block'
    });

    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // In a real app, you would load the appropriate content here
        });
    });

    // Modal functionality
    const addUserBtn = document.getElementById('addUserBtn');
    const addUserModal = document.getElementById('addUserModal');
    const closeModal = document.getElementById('closeModal');
    const cancelModal = document.getElementById('cancel-modal');
    
    addUserBtn.addEventListener('click', function() {
        addUserModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', function() {
        addUserModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    cancelModal.addEventListener('click', function() {
        addUserModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close modals when clicking outside
    [addUserModal].forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            addUserModal.classList.remove('active');
            sidebar.classList.remove('show');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});