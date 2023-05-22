// Define variables for form inputs
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

// Function to validate form inputs
function validateForm() {
  // Check if name, email, and message inputs are filled
  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    alert("Please fill in all required fields.");
    return false;
  }
  // Check if email input is valid
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

// Function to send email with form data
function sendEmail() {
  // Dummy data
  var toEmail = "example@example.com";
  var subject = "Contact Form Submission";
  var body = "Name: " + nameInput.value + "\nEmail: " + emailInput.value + "\nMessage: " + messageInput.value;

  // Construct email link with dummy data
  var emailLink = "mailto:" + toEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  // Open default email client with email link
  window.location.href = emailLink;
}
