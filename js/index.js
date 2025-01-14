
let colores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500", "#800080", "#008000", "#000080", "#FFC0CB", "#A52A2A", "#FFD700", "#808080", "#FFFFFF", "#000000"];
let cuantasOpciones = 0;
/*
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
*/
function addOption(){
  let option = document.getElementById("thing-box").value;
  if (option === "") {
    alert("Por favor, escriba algo en el cuadro de texto.");
    return;
  }
  // Crear un nuevo div para el "cuadrito"
  let newDiv = document.createElement("div");
  newDiv.id = "options";
    
  // Añadir el texto al div
  newDiv.textContent = option;
  
  // Dar estilo al div (opcional)
  newDiv.style.padding = "10px";
  newDiv.style.margin = "5px";
  newDiv.style.borderRadius = "5px";
  newDiv.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
  
  // Añadir el div al documento
  document.getElementById("add-thing").after(newDiv);
  cuantasOpciones++;
  // Limpiar el input
  document.getElementById("thing-box").value = "";
  if(cuantasOpciones === 1){
    let startOption = document.createElement("button");
    startOption.textContent = "Randomizar";
    startOption.style.padding = "10px";
    startOption.style.margin = "5px";
    startOption.style.backgroundColor = "green";
    startOption.style.borderRadius = "5px";
    startOption.style.fontFamily = "Baloo 2";
    startOption.style.color = "white";
    document.getElementById("options").after(startOption);
  }
}