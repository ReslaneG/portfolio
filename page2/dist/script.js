// script.js

document.addEventListener("DOMContentLoaded", function () {
    function createStar() {
      const star = document.createElement("div");
      star.className = "star";
      document.body.appendChild(star);
  
      const size = Math.random() * 4 + 1;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
  
      // Calculez le temps d'apparition en fonction de la position actuelle du défilement
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const appearanceTime = (Math.random() * 2 + 1) * (1 - scrollPercentage) + 0.5;
  
      star.style.animationDuration = appearanceTime + "s";
  
      setTimeout(() => {
        star.remove();
      }, appearanceTime * 1000);
    }
  
    function generateStars() {
      setInterval(createStar, 1000);
    }
  
    generateStars();
  
    // Ajoutez un écouteur d'événements de défilement pour mettre à jour dynamiquement le temps d'apparition
    window.addEventListener("scroll", function () {
      generateStars(); // Régénérez les étoiles à chaque défilement
    });
  });
  

  // Ajouter ces scripts à votre fichier main.js

