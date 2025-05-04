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
          <h1 class="fade-in" style="animation-delay: 0s;">Dear Dinduss</h1><br>
          <p class="fade-in" style="animation-delay: 2s;">
            selamat ulang tahun yaa sayaangg💚<br> 
            Usia 20, babak baru yang pasti akan penuh cerita. aku ngga bisa bilang cukup betapa aku bangga punya kamu di hidupku. kamu udah tumbuh jadi sosok yang kuat, lembut, dan luar biasa. 
            di tengah dunia yang sibuk dan keras, kamu tetap jadi orang yang hatinya hangat. aku bersyukur banget karena bisa nemenin kamu sampai di titik ini, dan aku mau terus nemenin kamu seterusnya. 
            semoga kamu selalu dikelilingi cinta, damai, dan keberanian untuk jadi diri sendiri. happy 20th, sayangg. dunia jadi tempat yang lebih baik sejak kamu lahir.
          </p>
        </div>`;
    }
  
    function showLetterContent() {
      letter.innerHTML = getBirthdayMessageHTML();
  
      const h1 = letter.querySelector('h1.fade-in');
      const p = letter.querySelector('p.fade-in');
  
      if (h1) {
        h1.style.opacity = '0';
        h1.style.animation = 'smooth-reveal 1.5s ease-out forwards';
        h1.style.animationDelay = '0s';
      }
  
      if (p) {
        p.style.opacity = '0';
        p.style.animation = 'smooth-reveal 1.5s ease-out forwards';
        p.style.animationDelay = '2s';
      }
    }
  
    function startConfetti() {
      const duration = 5 * 1000;
      const end = Date.now() + duration;
  
      (function frame() {
        confetti({
          particleCount: 7,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 7,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
  
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
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
  
        setTimeout(() => {
          showLetterContent();
        }, 6000);
      }
    });
  });
  