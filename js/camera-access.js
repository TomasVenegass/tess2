// Acceso a la cámara
const video = document.getElementById('video');

// Solicita acceso a la cámara del usuario
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error al acceder a la cámara: ", err);
    });
