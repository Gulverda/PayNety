// JS/script.js
document.addEventListener("DOMContentLoaded", function () {
    // Delay hiding the loader by 2 seconds (2000ms)
    setTimeout(() => {
      // Remove the "loading" class from the body to hide the loader
      document.body.classList.remove("loading");
  
      // Optionally, you can hide the loader div directly:
      const loader = document.getElementById("loader");
      loader.style.display = "none";
    }, 2000); 
  });
  


// Select the content elements to animate
const contentElements = document.querySelectorAll('.container .content');

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view'); // Optional: remove when out of view
    }
  });
}, {
  threshold: 0.5 // Trigger when 10% of the element is in view
});

// Observe each content element
contentElements.forEach(element => observer.observe(element));


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".content, .mission-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

  // Add "hidden" class to all target elements initially and observe each
  elements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
  });
});
