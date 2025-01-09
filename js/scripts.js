particlesJS('particles-js', {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: '#fff0f9' }, // Pink particles
      shape: {
        type: 'circle', // Use circles (you can also try "polygon" or "star")
        stroke: { width: 1, color: '#fff0f9' }, // Adds an outline
      },
      opacity: {
        value: 0.8, 
        random: false,
      },
      size: {
        value: 6, // Bigger particles
        random: true, // Varying sizes
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ff69b4', // Pink lines
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3, // Slower for a calmer effect
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: 'bubble' }, // Bubbles when hovered
        onclick: { enable: true, mode: 'repulse' }, // Pushes away on click
      },
      modes: {
        bubble: {
          distance: 200,
          size: 15, // Enlarges particles
          duration: 2,
          opacity: 0.8,
        },
        repulse: { distance: 150 },
      },
    },
    retina_detect: true, // Enhances on high-resolution screens
  });
  // Add GSAP animation code here
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach((section) => {
  gsap.fromTo(
    section,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    }
  );
});
