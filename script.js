document.addEventListener("DOMContentLoaded", () => {
  const stepperItems = document.querySelectorAll(".c-stepper__item");
  let currentStep = 0;

  function updateStepper() {
    stepperItems.forEach((item, index) => {
      const circle = item.querySelector(".c-stepper__circle");
      if (index < currentStep) {
        circle.style.backgroundColor = "var(--completed-color)";
        circle.style.color = "#fff";
        circle.style.borderColor = "var(--completed-color)";
      } else if (index === currentStep) {
        circle.style.backgroundColor = "var(--active-color)";
        circle.style.color = "#fff";
        circle.style.borderColor = "var(--active-color)";
      } else {
        circle.style.backgroundColor = "#fff";
        circle.style.color = "var(--circle-color)";
        circle.style.borderColor = "var(--circle-color)";
      }
    });
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentStep < stepperItems.length - 1) {
      currentStep++;
      updateStepper();
    }
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateStepper();
    }
  });

  updateStepper();
});


