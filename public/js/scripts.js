document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login-button");
  const loginModal = document.getElementById("login-modal");
  const closeButton = document.querySelector(".close-button");

  loginButton.addEventListener("click", () => {
    loginModal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
  });

  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll(".sound-button").forEach((button) => {
      const text = button.textContent.toLowerCase();
      button.style.display = text.includes(query) ? "block" : "none";
    });
  });

  document.querySelectorAll(".toggle-button").forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("on");
      toggleButton.classList.toggle("off");

      // Automatically turn off the button after a delay (e.g., 2 seconds)
      setTimeout(() => {
        toggleButton.classList.add("off");
        toggleButton.classList.remove("on");
      }, 250); // 2000 milliseconds = 2 seconds
    });
  });
});
