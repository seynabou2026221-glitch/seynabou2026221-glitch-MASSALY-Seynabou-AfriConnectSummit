document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne le bouton de changement de mode (le premier bouton dans les contrôles)
    const modeToggleBtn = document.querySelector('.nav-controls button:first-child');
    const body = document.body;

    // Vérifie si l'utilisateur avait déjà activé le mode sombre lors d'une visite précédente
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        modeToggleBtn.textContent = '🌙'; // Change l'icône en lune
    } else {
        modeToggleBtn.textContent = '☀️'; // Icône soleil par défaut
    }

    // Écoute le clic sur le bouton
    modeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Change l'icône et enregistre la préférence dans le navigateur
        if (body.classList.contains('dark-mode')) {
            modeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            modeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    });
});

