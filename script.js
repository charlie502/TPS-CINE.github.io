document.addEventListener('DOMContentLoaded', function () {
  var myModal = document.getElementById('miModal');
  var video = document.getElementById('video');
  
  myModal.addEventListener('hidden.bs.modal', function () {
    var iframeSrc = video.src;
    video.src = '';
    video.src = iframeSrc; // Reinicia el iframe para detener la reproducción
  });
});