// Bundesländer-Daten (hier kannst du die Jagdzeiten manuell einfügen)
const statesData = {
    'Baden-Württemberg': {
        description: 'Jagdzeiten für Baden-Württemberg',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rotwild (Tier)', period: '1. September - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Rehwild (Ricke)', period: '1. September - 31. Januar' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '1. Oktober - 15. Januar' },
                { name: 'Ringeltaube', period: '1. November - 20. Februar' }
            ]
        }
    },
    'Bayern': {
        description: 'Jagdzeiten für Bayern',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Dezember' },
                { name: 'Rotwild (Tier)', period: '1. September - 31. Dezember' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Rehwild (Ricke)', period: '1. September - 31. Januar' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '16. Oktober - 15. Januar' }
            ]
        }
    },
    'Berlin': {
        description: 'Jagdzeiten für Berlin',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Rehwild (Ricke)', period: '1. September - 31. Januar' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Ringeltaube', period: '1. November - 20. Februar' }
            ]
        }
    },
    'Brandenburg': {
        description: 'Jagdzeiten für Brandenburg',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '1. Oktober - 15. Januar' }
            ]
        }
    },
    'Bremen': {
        description: 'Jagdzeiten für Bremen',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Rehwild (Ricke)', period: '1. September - 31. Januar' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Ringeltaube', period: '1. November - 20. Februar' }
            ]
        }
    },
    'Hamburg': {
        description: 'Jagdzeiten für Hamburg',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Rehwild (Ricke)', period: '1. September - 31. Januar' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' }
            ]
        }
    },
    'Hessen': {
        description: 'Jagdzeiten für Hessen',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '1. Oktober - 15. Januar' }
            ]
        }
    },
    'Mecklenburg-Vorpommern': {
        description: 'Jagdzeiten für Mecklenburg-Vorpommern',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '1. Oktober - 15. Januar' }
            ]
        }
    },
    'Niedersachsen': {
        description: 'Jagdzeiten für Niedersachsen',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '16. Oktober - 15. Januar' }
            ]
        }
    },
    'Nordrhein-Westfalen': {
        description: 'Jagdzeiten für Nordrhein-Westfalen',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '1. Oktober - 15. Januar' }
            ]
        }
    },
    'Rheinland-Pfalz': {
        description: 'Jagdzeiten für Rheinland-Pfalz',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '1. Oktober - 15. Januar' }
            ]
        }
    },
    'Saarland': {
        description: 'Jagdzeiten für das Saarland',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '1. Oktober - 15. Januar' }
            ]
        }
    },
    'Sachsen': {
        description: 'Jagdzeiten für Sachsen',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '1. Oktober - 15. Januar' }
            ]
        }
    },
    'Sachsen-Anhalt': {
        description: 'Jagdzeiten für Sachsen-Anhalt',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '1. Oktober - 15. Januar' }
            ]
        }
    },
    'Schleswig-Holstein': {
        description: 'Jagdzeiten für Schleswig-Holstein',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '16. Oktober - 15. Januar' }
            ]
        }
    },
    'Thüringen': {
        description: 'Jagdzeiten für Thüringen',
        huntingTimes: {
            'Schalenwild': [
                { name: 'Rotwild (Hirsch)', period: '1. August - 31. Januar' },
                { name: 'Rehwild (Bock)', period: '1. Mai - 15. Oktober' },
                { name: 'Wildschwein', period: 'ganzjährig' }
            ],
            'Federwild': [
                { name: 'Stockente', period: '1. September - 15. Januar' },
                { name: 'Fasan', period: '1. Oktober - 15. Januar' }
            ]
        }
    }
};

// DOM-Elemente
const statesGrid = document.getElementById('statesGrid');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const huntingTimes = document.getElementById('huntingTimes');
const closeBtn = document.querySelector('.close');
const searchInput = document.getElementById('searchInput');

// Bundesländer-Karten erstellen
function createStateCards() {
    statesGrid.innerHTML = '';
    Object.keys(statesData).forEach((state, index) => {
        const card = document.createElement('div');
        card.className = 'state-card';
        card.style.animationDelay = `${index * 0.15}s`;
        card.innerHTML = `
            <h3>${state}</h3>
            <p>${statesData[state].description}</p>
        `;
        
        // Touch-Feedback für iPhone
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(0.95)';
        });
        
        card.addEventListener('touchend', () => {
            setTimeout(() => {
                card.style.transform = '';
            }, 100);
        });
        
        card.addEventListener('click', () => openModal(state));
        statesGrid.appendChild(card);
    });
}

// Modal öffnen
function openModal(state) {
    modalTitle.textContent = state;
    huntingTimes.innerHTML = '';
    
    const data = statesData[state];
    Object.keys(data.huntingTimes).forEach(category => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'animal-group';
        
        const categoryTitle = document.createElement('h4');
        categoryTitle.textContent = category;
        groupDiv.appendChild(categoryTitle);
        
        data.huntingTimes[category].forEach(animal => {
            const animalDiv = document.createElement('div');
            animalDiv.className = 'animal-item';
            animalDiv.innerHTML = `
                <span class="animal-name">${animal.name}</span>
                <span class="hunting-period">${animal.period}</span>
            `;
            groupDiv.appendChild(animalDiv);
        });
        
        huntingTimes.appendChild(groupDiv);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Modal schließen
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Suche mit Zähler
function filterStates() {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.state-card');
    const searchCount = document.getElementById('searchCount');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const stateName = card.querySelector('h3').textContent.toLowerCase();
        const stateData = statesData[card.querySelector('h3').textContent];
        
        let matchFound = stateName.includes(searchTerm);
        
        // Auch in Jagdzeiten suchen
        if (!matchFound && stateData) {
            Object.values(stateData.huntingTimes).forEach(category => {
                category.forEach(animal => {
                    if (animal.name.toLowerCase().includes(searchTerm)) {
                        matchFound = true;
                    }
                });
            });
        }
        
        if (matchFound) {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Suchzähler aktualisieren
    if (searchTerm) {
        searchCount.textContent = `${visibleCount} gefunden`;
        searchCount.classList.add('visible');
    } else {
        searchCount.classList.remove('visible');
    }
}

// Event Listeners
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

searchInput.addEventListener('input', filterStates);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
    if (e.key === '/' && !modal.style.display === 'block') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    createStateCards();
});
