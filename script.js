const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity:0, transform:"translateY(24px)"},{opacity:1, transform:"translateY(0)"}],
        {duration:650, easing:"cubic-bezier(.2,.8,.2,1)", fill:"both"}
      );
      reveal.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".job,.project-card,.skill-block").forEach(el=>reveal.observe(el));