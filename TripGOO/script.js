$(document).ready(function() {
  
    $('#hamburger').click(function() {
      $('#nav-links').toggleClass('active');
      $(this).toggleClass('active');
    });
  
    // Smooth Scrolling for Navigation Links
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      const target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Form Submission
    $('#tripForm').submit(function(event) {
      event.preventDefault();
  
      // Get Form Data
      const name = $('#name').val();
      const destination = $('#destination').val();
      const date = $('#date').val();
  
      // Validate Form
      if (!name || !destination || !date) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Show Confirmation Message
      const confirmationMessage = `
        <strong>Hello, ${name}!</strong><br>
        Your trip from <strong>Kathmandu to ${destination}</strong> on <strong>${date}</strong> has been booked.
      `;
      $('#confirmationMessage').html(confirmationMessage);
      $('#confirmation').removeClass('hidden');
    });
  });