
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
  
    // Mostrar el mensaje emergente
    popup.style.display = "block";
  
    // Ocultar el mensaje emergente después de cierto tiempo
    setTimeout(function() {
      popup.style.display = "none";
      
      // Pausar la música de fondo
      var backgroundMusic = document.getElementById("background-music");
      backgroundMusic.pause();
    }, 3000); // Cambia 3000 por el tiempo en milisegundos que deseas que el mensaje esté visible
  });