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

    // Modal functionality
    const addManualBtn = document.getElementById('addManualBtn');
    const addManualModal = document.getElementById('addManualModal');
    const closeModal = document.getElementById('closeModal');
    const cancelModal = document.getElementById('cancel-modal');
    
    addManualBtn.addEventListener('click', function() {
        addManualModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', function() {
        addManualModal.classList.remove('active');
        document.body.style.overflow = '';
    });


    cancelModal.addEventListener('click', function() {
        addManualModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close modals when clicking outside
    [addManualModal].forEach(modal => {
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
            addManualModal.classList.remove('active');
            sidebar.classList.remove('show');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});