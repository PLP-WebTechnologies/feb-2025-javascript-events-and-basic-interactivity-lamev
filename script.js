// Button click
document.getElementById('colorBtn').addEventListener('click', () => {
    document.getElementById('colorBtn').style.backgroundColor = 'lightblue';
    document.getElementById('colorBtn').innerText = 'Clicked!';
  });
  
  // Secret double-click
  document.getElementById('secretBtn').addEventListener('dblclick', () => {
    alert("🎉 You found the secret action!");
  });
  
  // Hover effect
  document.getElementById('colorBtn').addEventListener('mouseenter', () => {
    document.getElementById('colorBtn').classList.add('highlight');
  });
  document.getElementById('colorBtn').addEventListener('mouseleave', () => {
    document.getElementById('colorBtn').classList.remove('highlight');
  });
  
  // Keypress detection
  document.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Image Gallery Logic
  const galleryImages = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your image filenames here
  let currentImageIndex = 0;

  const galleryImage = document.getElementById('galleryImage');
  const nextImageButton = document.getElementById('nextImage');

  nextImageButton.addEventListener('click', () => {
    // Add the 'hidden' class to fade out the image
    galleryImage.classList.add('hidden');

    // Wait for the fade-out effect, then update the image
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      galleryImage.src = galleryImages[currentImageIndex];

      // Remove the 'hidden' class to fade in the new image
      galleryImage.classList.remove('hidden');
    }, 500); // Match the CSS transition duration
  });
  
  // Tabs
  document.querySelectorAll('.tab').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden'); // Ensure 'hidden' class is defined in CSS
      });
      document.getElementById(targetId).classList.remove('hidden');
    });
  });
  
  // Form validation
  const form = document.getElementById('userForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = `Thank you, ${name}! We have received your email: ${email}.`;
    document.getElementById('formFeedback').textContent = feedback;
  });
  
  // Real-time feedback
  document.getElementById('password').addEventListener('input', (e) => {
    const feedback = document.getElementById('formFeedback');
    if (e.target.value.length < 8) {
      feedback.textContent = '🔒 Weak password.';
    } else {
      feedback.textContent = '🔐 Strong password.';
    }
  });

// Removed CSS code. Ensure the 'hidden' class is defined in an external CSS file.
