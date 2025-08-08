document.addEventListener('DOMContentLoaded', function() {
    // Tab-Funktionalität
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            // Alle Tabs deaktivieren
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Aktiven Tab aktivieren
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Bundesländer-Funktionalität
    const stateDropdown = document.getElementById('state-dropdown');
    const stateContents = document.querySelectorAll('.state-content');
    
    stateDropdown.addEventListener('change', () => {
        const targetState = stateDropdown.value;
        
        // Alle Bundesländer deaktivieren
        stateContents.forEach(content => content.classList.remove('active'));
        
        // Aktives Bundesland aktivieren
        document.getElementById(targetState).classList.add('active');
    });
    
    // Smooth Scrolling für bessere UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Touch-Unterstützung für mobile Geräte
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            const activeTab = document.querySelector('.tab-btn.active');
            const allTabs = Array.from(document.querySelectorAll('.tab-btn'));
            const currentIndex = allTabs.indexOf(activeTab);
            
            if (diff > 0 && currentIndex < allTabs.length - 1) {
                // Swipe left - next tab
                allTabs[currentIndex + 1].click();
            } else if (diff < 0 && currentIndex > 0) {
                // Swipe right - previous tab
                allTabs[currentIndex - 1].click();
            }
        }
    }
    
    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const activeTab = document.querySelector('.tab-btn.active');
            const allTabs = Array.from(document.querySelectorAll('.tab-btn'));
            const currentIndex = allTabs.indexOf(activeTab);
            
            if (e.key === 'ArrowRight' && currentIndex < allTabs.length - 1) {
                allTabs[currentIndex + 1].click();
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                allTabs[currentIndex - 1].click();
            }
        }
    });
});