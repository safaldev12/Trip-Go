// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Trip Form Functionality
document.getElementById('tripForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user input
  const name = document.getElementById('name').value;
  const destination = document.getElementById('destination').value;

  // Validate input
  if (!name || !destination) {
    alert('Please fill out all fields.');
    return;
  }

  // Confirmation message
  const confirmationMessage = `Hello, ${name}! Your trip from Kathmandu to ${destination} has been booked.`;
  
  // Display confirmation
  document.getElementById('confirmationMessage').textContent = confirmationMessage;
  document.getElementById('confirmation').classList.remove('hidden');
});
