function nextStep(step) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById("step" + step).classList.add("active");
  
  // Focus on the next input if it exists
  const nextInput = document.querySelector("#step" + step + " input");
  if (nextInput) {
    nextInput.focus();
  }
}

// Add Enter key listener to all inputs
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const activeStep = document.querySelector(".step.active");
    const stepNum = parseInt(activeStep.id.replace("step", ""));
    
    if (stepNum < 4) {
      nextStep(stepNum + 1);
    }
  }
});
