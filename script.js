document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-toggle");

  let hasStartedMusic = false;
  let hasBeenOpened = false;

  function getBirthdayMessageHTML() {
    return `
      <div class='center-letter'>
        <h1 class="fade-in">Dear Dinduss</h1><br>
        <p class="fade-in">
          Selamat ulang tahun yaa sayaangg 💚<br><br>
          Usia 20, babak baru yang pasti akan penuh cerita. Aku nggak bisa bilang cukup betapa aku bangga punya kamu di hidupku. Kamu udah tumbuh jadi sosok yang kuat, lembut, dan luar biasa. Di tengah dunia yang sibuk dan keras, kamu tetap jadi versi terbaik dari dirimu sendiri. Aku bersyukur banget karena bisa nemenin kamu sampai di titik ini, dan aku mau terus nemenin kamu seterusnya.<br><br>
          Semoga kamu selalu dikelilingi cinta, damai, dan keberanian untuk jadi diri sendiri. Happy 20th, sayanggkuu. Tau ngga? Dunia jadi tempat yang lebih baik sejak kamu lahir. Asekk.<br><br>
          Maaf yaa tahun ini cuma bisa ngasih ini lagi dan ga lebih 🙁. Tapi doa dan harapanku selalu yang terbaik buat kamu. Sekali lagi Happy Birthday dinduss sayaangg 💚
        </p>
      </div>`;
  }

  function showLetterContent() {
    letter.innerHTML = getBirthdayMessageHTML();
  }

  function startConfetti() {
    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 } });

      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  function playMusicOnce() {
    if (!hasStartedMusic && music) {
      music.play();
      hasStartedMusic = true;
      btn.textContent = "🔊";
    }
  }

  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btn.textContent = "🔊";
    } else {
      music.pause();
      btn.textContent = "🔈";
    }
  });

  envelope?.addEventListener("click", () => {
    if (!hasBeenOpened) {
      envelope.classList.add("open");
      playMusicOnce();
      startConfetti();
      hasBeenOpened = true;
      setTimeout(showLetterContent, 6000);
    }
  });
});
