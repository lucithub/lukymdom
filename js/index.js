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
