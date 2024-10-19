// Realizar OCR sobre la imagen capturada
document.addEventListener('imageCaptured', (event) => {
    const { image } = event.detail;

    // Usar Tesseract.js para hacer OCR sobre la imagen
    Tesseract.recognize(
        image,
        'spa', // Usamos español para mejorar el reconocimiento
        {
            logger: info => console.log(info) // Log opcional para ver el progreso
        }
    ).then(({ data: { text } }) => {
        document.getElementById('output').innerText = "Patente Detectada: " + text;
    }).catch(error => {
        console.error("Error durante el escaneo OCR: ", error);
    });
});
