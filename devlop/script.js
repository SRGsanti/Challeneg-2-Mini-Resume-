// Scroll to the corresponding section when a navigation link is clicked
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  
  // Make the first application's image larger than the others
  document.addEventListener('DOMContentLoaded', function() {
    var applicationImages = document.querySelectorAll('#work img');
    if (applicationImages.length > 0) {
      applicationImages[0].classList.add('large-image');
    }
  });
  
  // Handle clicking on the application images to go to the deployed application
  document.addEventListener('DOMContentLoaded', function() {
    var applicationImages = document.querySelectorAll('#work img');
    applicationImages.forEach(function(image) {
      image.addEventListener('click', function() {
        var deployedApplicationURL = image.getAttribute('data-url');
        window.open(deployedApplicationURL, '_blank');
      });
    });
  });
  
  // Handle responsive layout when resizing the page or viewing on different devices
  // You can use CSS media queries for this purpose
  