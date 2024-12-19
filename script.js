document.addEventListener("DOMContentLoaded", () => {
    // Hämta nuvarande sida, ta bort .html från sökvägen
    let currentPage = window.location.pathname.split("/").pop();
    currentPage = currentPage.replace(/\.html$/, ""); 
  
    // Markera alla element som har ett data-page attribut
    const elements = document.querySelectorAll("[data-page]");
  
    // Loopa igenom alla elementen och leta efter den som matchar nuvarande sida. Applicera .active klass på det elementet.
    elements.forEach((element) => {
      if (element.getAttribute("data-page") === currentPage) {
        element.classList.add("active");
      }
    });

    document.getElementById('toggleFormButton').addEventListener('click', function() {
      document.getElementById('membershipForm').classList.toggle('hidden');
    });

    document.getElementById('sendFormButton').addEventListener('click', function(event) {
      event.preventDefault();
      const form = document.getElementById('membershipForm');
      form.innerHTML = '<p>Tack! Vi återkommer till dig.</p>';
  });
  
  
  });
  