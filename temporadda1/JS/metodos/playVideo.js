const d = document;
export default function playTrailer(seccionVideo, video, btnPlay, btnstop) {
  const $seccionVideo = d.querySelector(seccionVideo),
    $film = d.querySelector(video);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay) || e.target.matches(`${btnPlay} *`)) {
      $seccionVideo.classList.toggle("active");
    }
    if (e.target.matches(btnstop)) {
      $seccionVideo.classList.toggle("active");
      $film.currentTime = 0;
      $film.pause();
    }
  });
}
