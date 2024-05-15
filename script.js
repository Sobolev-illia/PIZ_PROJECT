// CONSTANTS
const addButton = document.getElementById('addButton');
const popupForm = document.getElementById('popupForm');
const backButton = document.getElementById('backButton');
const overlay = document.getElementById('overlay');

// Event listener for the "Add Post" button
addButton.addEventListener('click', function () {
  // Show the popup form
  popupForm.classList.add('show');
  overlay.style.display = 'block';
});

// Event listener for the "Back" button
backButton.addEventListener('click', function () {
  // Hide the popup form
  popupForm.classList.remove('show');
  overlay.style.display = 'none';
});
