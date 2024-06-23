// Assuming you have a button or some trigger element to toggle the color
// const toggleButton = document.getElementsByClassName('toggleButton'); // Replace 'toggleButton' with your actual button ID or reference

window.addEventListener('click', function() {
    const header = document.querySelector('.header');
    
    // Toggle between two colors
    if (header.style.color === 'red') {
        header.style.color = 'blue'; // Change to your desired color
    } else {
        header.style.color = 'red'; // Change to your desired color
    }
});


