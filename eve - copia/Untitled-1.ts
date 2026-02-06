<script>
  const bloques = document.querySelectorAll('.bloque');

  function mostrarBloques() {
    const alturaPantalla = window.innerHeight;
    bloques.forEach(bloque => {
      const top = bloque.getBoundingClientRect().top;
      if (top < alturaPantalla - 100) {
        bloque.style.opacity = '1';
        bloque.style.transform = 'translateY(0)';
      }
    });
  }

  bloques.forEach(b => {
    b.style.opacity = '0';
    b.style.transform = 'translateY(40px)';
    b.style.transition = 'all 0.8s ease';
  });

  window.addEventListener('scroll', mostrarBloques);
  mostrarBloques();
</script>
