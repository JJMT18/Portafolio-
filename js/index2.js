function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'flex' || menu.style.display === '') ? 'none' : 'flex';
}
function enviarFormulario() {
    var form = document.getElementById("contactForm");
    
    var formData = new FormData(form);

    // Envía los datos a un servicio de correo electrónico o a tu propio back-end para procesarlos
    // Puedes utilizar Formspree o implementar tu propio back-end con Node.js, PHP, etc.
    // En este ejemplo, mostramos los datos en la consola
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // Puedes agregar aquí la lógica para enviar los datos al servidor
    // fetch('URL_DEL_BACKEND', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
}