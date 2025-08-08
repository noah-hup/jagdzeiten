// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and tabs
            navBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Add Entry Button
    const addBtn = document.querySelector('.add-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            addLogEntry();
        });
    }
    
    // Control Buttons
    const controlBtns = document.querySelectorAll('.control-btn');
    controlBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            showNotification(e.target.textContent + ' - Funktion wird entwickelt');
        });
    });
});

// Add new log entry
function addLogEntry() {
    const logEntries = document.querySelector('.log-entries');
    const today = new Date().toLocaleDateString('de-DE', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    
    const newEntry = document.createElement('div');
    newEntry.className = 'log-entry';
    newEntry.innerHTML = `
        <div class="log-date">${today}</div>
        <div class="log-content">
            <h4>Neuer Jagdeintrag</h4>
            <p>Beschreibung der Jagdaktivität...</p>
            <div class="log-tags">
                <span class="tag">Neu</span>
            </div>
        </div>
    `;
    
    logEntries.insertBefore(newEntry, logEntries.firstChild);
    
    // Add animation
    newEntry.style.opacity = '0';
    newEntry.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        newEntry.style.transition = 'all 0.3s ease';
        newEntry.style.opacity = '1';
        newEntry.style.transform = 'translateY(0)';
    }, 100);
    
    showNotification('Neuer Eintrag hinzugefügt');
}

// Show notification
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(144, 198, 149, 0.9);
        color: #1a2f1a;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Animate stats on load
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = finalValue / 30;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = finalValue;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(currentValue);
            }
        }, 50);
    });
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    setTimeout(animateStats, 500);
});