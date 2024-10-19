// Captura la foto cuando se presiona el botón
const captureButton = document.getElementById('capture');

captureButton.addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Obtener la imagen capturada en formato Data URL
    const image = canvas.toDataURL('image/png');

    // Disparar evento personalizado para el OCR
    const ocrEvent = new CustomEvent('imageCaptured', { detail: { image } });
    document.dispatchEvent(ocrEvent);
});
