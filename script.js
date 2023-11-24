// This is the script file...
// This is for capturing the HTML element for further DOM manipulation...
const toggles = document.querySelectorAll(".faq-toggle");


// This is for toggling the buttons...
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
