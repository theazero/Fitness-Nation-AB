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
  });
  