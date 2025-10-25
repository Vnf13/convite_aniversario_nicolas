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
    setTimeout(nextScreen, 3000);  // 0 → 1
    setTimeout(nextScreen, 6000);  // 1 → 2
    setTimeout(nextScreen, 9000);  // 2 → 3
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

