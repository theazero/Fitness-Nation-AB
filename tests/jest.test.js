/**
 * @jest-environment jsdom
 */
 
document.body.innerHTML = `
  <nav>
    <a href="index.html" data-page="index">Home</a>
    <a href="about.html" data-page="about">About</a>
    <a href="contact.html" data-page="contact">Contact</a>
  </nav>
  <div id="membershipForm" class="hidden">
    <form>
      <input type="email" required />
      <button id="sendFormButton" type="submit">Send</button>
    </form>
  </div>
  <button id="toggleFormButton">Toggle Form</button>
`;

require('../script.js');

describe('Script functionality', () => {
  beforeEach(() => {
    // Återställ koden för varje körning.
    document.body.innerHTML = `
      <nav>
        <a href="index.html" data-page="index">Home</a>
        <a href="about.html" data-page="about">About</a>
        <a href="contact.html" data-page="contact">Contact</a>
      </nav>
      <div id="membershipForm" class="hidden">
        <form>
          <input type="email" required />
          <button id="sendFormButton" type="submit">Send</button>
        </form>
      </div>
      <button id="toggleFormButton">Toggle Form</button>
    `;
  });

  // Testa om alla nav-länkar får en aktivt klass för att visa vilken sida som är aktiv
  test('should add active class to the current page', () => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/about.html',
      },
    });

    document.dispatchEvent(new Event('DOMContentLoaded'));

    const activeElement = document.querySelector('[data-page="about"]');
    expect(activeElement.classList.contains('active')).toBe(true);
  });


  // Testa om knappen för att visa eller dölja bli medlem formuläret fungerar
  test('should toggle the hidden class on the membership form', () => {
    document.dispatchEvent(new Event('DOMContentLoaded'));

    const toggleButton = document.getElementById('toggleFormButton');
    const membershipForm = document.getElementById('membershipForm');

    toggleButton.click(); // Simulera knapptryck
    expect(membershipForm.classList.contains('hidden')).toBe(false);

    toggleButton.click(); // Simulera knapptryck igen
    expect(membershipForm.classList.contains('hidden')).toBe(true);
  });

  // Testa om formuläret blir ersatt med ett tackmeddelande efter man skickat in sin ansökan
  test('should replace membershipForm content on form submission', () => {
    document.dispatchEvent(new Event('DOMContentLoaded'));

    const sendFormButton = document.getElementById('sendFormButton');
    const membershipForm = document.getElementById('membershipForm');

    sendFormButton.click(); // Skicka iväg formuläret
    expect(membershipForm.innerHTML).toBe('<p>Tack! Vi återkommer till dig.</p>');
  });
});
