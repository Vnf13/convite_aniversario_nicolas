document.addEventListener("DOMContentLoaded", () => {
  const screens = document.querySelectorAll(".screen");
  let current = 0;

  // Função de troca de tela
  function nextScreen() {
    screens[current].classList.remove("active");
    current++;
    if (current < screens.length) {
      screens[current].classList.add("active");
    } else {
      current = screens.length - 1; // garante que fique na última
    }
  }

  // Inicia música e sequência após o primeiro clique
  document.body.addEventListener("click", () => {
    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");

    // Toca música no clique
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
      musicToggle.textContent = "🔊";
    }

    // Transições entre telas (0 → 1 → 2 → 3)
    setTimeout(() => nextScreen(), 4000); // 0 → 1  (3s vis + 5s fade)
    setTimeout(() => nextScreen(), 12000); // 1 → 2 (4s vis + 5s fade)
    setTimeout(() => nextScreen(), 20000); // 2 → 3 (5s vis + 5s fade)

  }, { once: true });

  /* === Controle manual da música === */
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");
  let isPlaying = false;

  musicToggle.addEventListener("click", () => {
    if (!isPlaying) {
      bgMusic.play().catch(() => {});
      musicToggle.textContent = "🔊";
    } else {
      bgMusic.pause();
      musicToggle.textContent = "🔈";
    }
    isPlaying = !isPlaying;
  });
});









