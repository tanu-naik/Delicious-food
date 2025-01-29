function showAlert() {
    alert("Order confirm! We'll get back to you shortly.");
  }
  
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your interest! Visit our menu to order.");
    this.reset();
  });
