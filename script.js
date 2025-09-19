// Email form handling
document.addEventListener("DOMContentLoaded", () => {
  const emailForm = document.getElementById("emailForm")
  const emailInput = document.getElementById("emailInput")
  const signupCard = document.getElementById("signupCard")
  const successMessage = document.getElementById("successMessage")

  emailForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = emailInput.value.trim()

    if (email && isValidEmail(email)) {
      // Hide the form and show success message
      emailForm.classList.add("hidden")
      successMessage.classList.remove("hidden")

      // Here you would typically send the email to your backend
      console.log("Email submitted:", email)

      // Optional: Send to your backend
      // submitEmail(email);
    }
  })

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Optional: Function to send email to backend
  function submitEmail(email) {
    // Replace with your actual endpoint
    fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  // Add some interactive animations
  const featureIcons = document.querySelectorAll(".feature-icon")

  featureIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)"
      this.style.transition = "transform 0.2s ease"
    })

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })

  // Add hover effect to submit button
  const submitBtn = document.querySelector(".submit-btn")
  submitBtn.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 4px 12px rgba(230, 126, 34, 0.3)"
  })

  submitBtn.addEventListener("mouseleave", function () {
    this.style.boxShadow = "none"
  })
})
