document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login-button");
  const signupButton = document.getElementById("signup-button");
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");
  const closeButtons = document.querySelectorAll(".close-button");

  loginButton.addEventListener("click", () => {
    loginModal.style.display = "block";
  });

  signupButton.addEventListener("click", () => {
    signupModal.style.display = "block";
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
    if (event.target === signupModal) {
      signupModal.style.display = "none";
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

      setTimeout(() => {
        toggleButton.classList.add("off");
        toggleButton.classList.remove("on");
      }, 250);
    });
  });

  document.querySelectorAll('input[type="file"]').forEach((input) => {
    input.addEventListener("change", (event) => {
      const buttonId = input.id.replace("upload", "button");
      const file = event.target.files[0];
      if (file) {
        const audio = document.createElement("audio");
        audio.src = URL.createObjectURL(file);
        document.getElementById(buttonId).addEventListener("click", () => {
          audio.play();
        });
      }
    });
  });

  document.querySelectorAll('.favorite').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const buttonId = event.target.getAttribute('data-button');
      const button = document.getElementById(buttonId);
      const soundSrc = button.querySelector('audio')?.src;

      if (event.target.checked && soundSrc) {
        localStorage.setItem(buttonId, soundSrc);
      } else {
        localStorage.removeItem(buttonId);
      }
    });
  });

  // Login form handling (dummy implementation)
  document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'user.html'; // Redirect to user page on login
  });

  // Signup form handling (dummy implementation)
  document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Account created!');
    signupModal.style.display = 'none';
  });



    

});



//////////////////////////// Rendering Buttons and Audio Play Functionality //////////////////////////////////

  // Get the audio element
  const audioPlayers = document.getElementsByClassName('audioPlayer');
  // Get the image element
  const audioControls = document.getElementsByClassName('audioControl');

  const soundButtons = document.getElementsByClassName('soundButtons');

  const audioArray = {}

  console.log(audioPlayers.length);
  console.log(audioControls.length);
  console.log(soundButtons.length);


  for (let i = 0; i < audioPlayers.length; i++) {
    audioControls[i].addEventListener('click', function() {toggleAudio(i)});
  }

  


  

  // Function to toggle audio playback
  function toggleAudio(x) {
      if (audioPlayers[x].paused) {
          audioPlayers[x].play();
      } else {
          audioPlayers[x].pause();
          audioPlayers[x].currentTime = 0; // Reset audio to start when stopped
      }
  }