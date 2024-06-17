document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logout-button");
  const favoritesList = document.querySelector(".favorites-list");

  logoutButton.addEventListener("click", () => {
    window.location.href = 'index.html'; // Redirect to main page on logout
  });


  //generate buttons using elements created in a handlebars loop
  for (let i = 1; i <= 5; i++) {
    const soundSrc = localStorage.getItem(`button${i}`);
    if (soundSrc) {
      const button = document.createElement("div");
      button.classList.add("favorite-button");

      const audio = document.createElement("audio");
      audio.src = soundSrc;

      const playButton = document.createElement("button");
      playButton.textContent = `Play Button ${i}`;
      playButton.addEventListener("click", () => {
        audio.play();
      });

      button.appendChild(playButton);
      favoritesList.appendChild(button);
    }
  }
});
