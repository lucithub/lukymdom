// Usando GSAP para animar entre secciones
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".page").forEach((page, i) => {
  gsap.from(page, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: page,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });
});

function addOption(){
  let option = document.getElementById("thing-box").value;
  // Crear un nuevo div para el "cuadrito"
  let newDiv = document.createElement("div");
    
  // Añadir el texto al div
  newDiv.textContent = option;
  
  // Dar estilo al div (opcional)
  newDiv.style.padding = "10px";
  newDiv.style.margin = "5px";
  newDiv.style.backgroundColor = "#f0f0f0";
  newDiv.style.border = "1px solid #ddd";
  
  // Añadir el div al documento
  document.getElementById("add-thing").after(newDiv);
  
  // Limpiar el input
  document.getElementById("thing-box").value = "";
}