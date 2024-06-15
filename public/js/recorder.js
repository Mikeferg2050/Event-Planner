let recorder, audioChunks, audioBlobToUpload;

document.getElementById('recordButton').addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  recorder = new MediaRecorder(stream);
  audioChunks = [];

  recorder.ondataavailable = (event) => {
    audioChunks.push(event.data);
  };

  recorder.onstop = () => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = document.getElementById('audioPlayback');
    audio.src = audioUrl;
    document.getElementById('uploadButton').disabled = false;

    // Store the blob to be used for upload
    audioBlobToUpload = audioBlob;
  };

  recorder.start();
  document.getElementById('recordButton').disabled = true;
  document.getElementById('stopButton').disabled = false;
});

document.getElementById('stopButton').addEventListener('click', () => {
  recorder.stop();
  document.getElementById('recordButton').disabled = false;
  document.getElementById('stopButton').disabled = true;
});

document.getElementById('uploadButton').addEventListener('click', () => {
  const formData = new FormData();
  formData.append('audio', audioBlobToUpload, 'recording.wav');

  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        M.toast({ html: 'Upload successful!' });
      } else {
        M.toast({ html: 'Upload failed!' });
      }
    })
    .catch((error) => {
      M.toast({ html: 'Upload error!' });
    });
});
