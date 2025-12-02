// Slideshow for Event Pictures
var eventCards = document.querySelectorAll(".event-card");

for (var i = 0; i < eventCards.length; i++) {
  var card = eventCards[i];
  var imageString = card.dataset.images;
  
  // Split the image names
  var imageArray = imageString.split(",");
  
  // Remove empty values
  var cleanImages = [];
  for (var j = 0; j < imageArray.length; j++) {
    if (imageArray[j] !== "") {
      cleanImages.push(imageArray[j]);
    }
  }
  
  var slideshow = card.querySelector(".slideshow");
  var imgs = [];
  
  // Create image elements
  for (var k = 0; k < cleanImages.length; k++) {
    var img = document.createElement("img");
    img.src = "Assets/" + cleanImages[k];
    slideshow.appendChild(img);
    imgs.push(img);
  }
  
  // Show the first image
  if (imgs.length > 0) {
    for (var m = 0; m < imgs.length; m++) {
      imgs[m].classList.remove("active");
    }
    imgs[0].classList.add("active");
    
    // Change image every 3 seconds
    createSlideshow(imgs);
  }
}

function createSlideshow(imageList) {
  var currentIndex = 0;
  
  setInterval(function() {
    // Hide all images
    for (var i = 0; i < imageList.length; i++) {
      imageList[i].classList.remove("active");
    }
    
    // Move to next image
    currentIndex = currentIndex + 1;
    if (currentIndex >= imageList.length) {
      currentIndex = 0;
    }
    
    // Show current image
    imageList[currentIndex].classList.add("active");
  }, 3000);
}

// Navigation to Course Page
function openCourse(code) {
  window.location.href = `course.html?course=${code}`;
}

// Course menu button navigation
// opening different sections in course page without changing html page
var menuButtons = document.querySelectorAll(".menu-btn");

for (var btn_idx = 0; btn_idx < menuButtons.length; btn_idx++) {
  var button = menuButtons[btn_idx];
  
  button.addEventListener("click", function() {
    // Remove active class from all buttons
    for (var remove_idx = 0; remove_idx < menuButtons.length; remove_idx++) {
      menuButtons[remove_idx].classList.remove("active");
    }
    
    // Add active class to clicked button
    this.classList.add("active");
    
    // Get the target section id from data-target
    var targetId = this.dataset.target;
    
    // Hide all sections
    var sections = document.querySelectorAll(".section");
    for (var hide_idx = 0; hide_idx < sections.length; hide_idx++) {
      sections[hide_idx].classList.remove("active-section");
    }
    
    // Show the target section
    var targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active-section");
    }
  });
}
