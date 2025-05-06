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
          selamat ulang tahun yaa sayaangg💚<br> 
          Usia 20, babak baru yang pasti akan penuh cerita. aku ngga bisa bilang cukup betapa aku bangga punya kamu di hidupku. Kamu udah tumbuh jadi sosok yang kuat, dewasa, tapi tetap hangat. 
          di tengah dunia yang sibuk dan keras, kamu tetap jadi versi terbaik dari dirimu. aku bersyukur banget karena bisa nemenin kamu sampai di titik ini, dan aku mau terus nemenin kamu seterusnya. 
          semoga kamu selalu dikelilingi cinta, damai, dan keberanian untuk jadi diri sendiri. happy 20th, sayanggkuu. dunia jadi tempat yang lebih baik sejak kamu lahir. Maaf yaa aku belum bisa ngasih kamu sesuatu tahun ini. tapi doa dan harapanku selalu yang terbaik buat kamu—semoga kamu bahagia, sehat, dan selalu dikelilingi hal-hal baik. sekali lagi Happy birthday dinduss sayaanggg..
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
