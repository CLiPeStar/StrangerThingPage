const d = document;

export default function controlSound(btnSound, song) {
  const $btnSound = d.querySelector(btnSound),
    $song = d.getElementById(song);

  let play = "🔊",
    muted = "🔇";

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnSound)) {
      if ($btnSound.textContent === play) {
        $btnSound.textContent = muted;
        $song.play();
      } else {
        $btnSound.textContent = play;
        $song.pause();
        $song.currentTime = 0;
      }
    }
  });
}
