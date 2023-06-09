window.addEventListener("load", () => {
  var nanoBar = document.querySelector(".nano-bar");

  var startTime = performance.now();

  function updateNanoBar() {
    var elapsedTime = performance.now() - startTime;
    var progress = Math.min((elapsedTime / 5000) * 100, 100);

    nanoBar.style.width = progress + "%";

    if (progress < 100) {
      requestAnimationFrame(updateNanoBar);
    } else {
      setTimeout(() => {
        nanoBar.style.opacity = 0;
        nanoBar.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
          nanoBar.style.display = "none";
        }, 500);
      }, 1500);
    }
  }
  updateNanoBar();
});

/* I want to fade out animation */
/* I want to use gradient color */
