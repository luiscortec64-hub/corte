const botones = document.querySelectorAll("a[href^='#']");

botones.forEach(boton => {
  boton.addEventListener("click", function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});