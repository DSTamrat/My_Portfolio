// MAIN DROPDOWN CARDS (Sector Cards + Master Cards)
document.querySelectorAll(".dropdown-card-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.parentElement;

    // Close other dropdowns
    document.querySelectorAll(".dropdown-card").forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.remove("active");
      }
    });

    // Toggle this dropdown
    card.classList.toggle("active");
  });
});

// SUB-SECTIONS INSIDE EACH DROPDOWN
document.querySelectorAll(".subsection-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const subsection = button.parentElement;

    // Close other subsections inside the same dropdown
    const parentDropdown = subsection.closest(".dropdown-card-content");
    parentDropdown.querySelectorAll(".subsection").forEach((other) => {
      if (other !== subsection) {
        other.classList.remove("active");
      }
    });

    // Toggle this subsection
    subsection.classList.toggle("active");
  });
});
