// Select the header element
const header = document.getElementById('mainHeader');

// Add scroll event listener
window.addEventListener('scroll', () => {
    // Check if scroll position is greater than or equal to 140
    if (window.scrollY >= 140) {
        header.classList.add('sticky'); // Add sticky class
    } else {
        header.classList.remove('sticky'); // Remove sticky class
    }
});
