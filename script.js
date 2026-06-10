// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Services functionality
    console.log("Setting up services functionality");
    const serviceCards = document.querySelectorAll(".service-card");
    console.log("Found service cards:", serviceCards.length);
    
    serviceCards.forEach((card, index) => {
        card.addEventListener("click", function() {
            console.log(`Service card ${index} clicked`);
            
            // Remove active class from all cards
            serviceCards.forEach(c => c.classList.remove("active"));
            
            // Add active class to clicked card
            card.classList.add("active");
        });
    });

    // Modal functionality
    const modal = document.getElementById("enquiryModal");
    const btn = document.getElementById("enquiryBtn");
    const closeBtn = document.querySelector(".close");

    if (btn && modal && closeBtn) {
        // Open modal
        btn.onclick = function() {
            modal.style.display = "flex";
        }

        // Close modal
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Close when clicking outside modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Handle form submission
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Your enquiry has been submitted ✅");
            modal.style.display = "none";
        });
    }

    // Blog functionality
    const blogItems = document.querySelectorAll(".blog-item");
    blogItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });

    // Lightbox configuration - wait for library to load
    setTimeout(function() {
        if (typeof lightbox !== 'undefined') {
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'fadeDuration': 300,
                'imageFadeDuration': 300,
                'showImageNumberLabel': true
            });
        }
    }, 100);
});
