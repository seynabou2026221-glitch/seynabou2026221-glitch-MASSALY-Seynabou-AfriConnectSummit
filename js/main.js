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

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".btn-filtre");
    const cards = document.querySelectorAll(".carte-intervenant");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 1. Gestion de la classe active sur les boutons
            document.querySelector(".btn-filtre.active").classList.remove("active");
            button.classList.add("active");

            // 2. Récupération de la valeur du filtre
            const filterValue = button.getAttribute("data-filtre");

            // 3. Filtrage des cartes d'intervenants
            cards.forEach(card => {
                const cardSector = card.getAttribute("data-secteur");

                if (filterValue === "tous" || cardSector === filterValue) {
                    // Rend visible la carte
                    card.style.display = "block";
                    // Léger décalage pour déclencher la transition CSS d'apparition
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0) scale(1)";
                    }, 20);
                } else {
                    // Animation de disparition
                    card.style.opacity = "0";
                    card.style.transform = "translateY(20px) scale(0.95)";
                    // Masque complètement l'élément après la fin de la transition
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".btn-onglet");
    const tables = document.querySelectorAll(".planning-table");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // 1. Gestion de la classe active sur les boutons d'onglets
            const activeTab = document.querySelector(".btn-onglet.active");
            if (activeTab) activeTab.classList.remove("active");
            tab.classList.add("active");

            // 2. Récupération de l'identifiant de la cible (ex: jour1)
            const targetId = tab.getAttribute("data-cible");

            // 3. Gestion de l'affichage des tableaux de planning
            tables.forEach(table => {
                if (table.getAttribute("id") === targetId) {
                    // Rend le conteneur visible et applique l'animation d'apparition
                    table.classList.add("active");
                    table.style.display = "table"; /* Conserve la structure native du tableau */
                    
                    // Réinitialisation de l'opacité pour l'effet de transition
                    setTimeout(() => {
                        table.style.opacity = "1";
                        table.style.transform = "translateY(0)";
                    }, 20);
                } else {
                    // Effet de disparition fluide
                    table.style.opacity = "0";
                    table.style.transform = "translateY(10px)";
                    
                    // Masque le tableau après la fin de la transition CSS
                    table.classList.remove("active");
                    setTimeout(() => {
                        table.style.display = "none";
                    }, 300);
                }
            });
        });
    });
});
