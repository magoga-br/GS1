// follow buttons
document.querySelectorAll(".follow-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const name = this.closest(".follow-item").querySelector("h4").textContent;
    this.textContent = this.textContent === "Seguir" ? "Seguindo" : "Seguir";
    this.style.background = this.textContent === "Seguindo" ? "#e2e8f0" : "";
    this.style.color = this.textContent === "Seguindo" ? "#1e293b" : "";

    if (this.textContent === "Seguindo") {
    }
  });
});

//help buttons
document.querySelectorAll(".help-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const title =this.closest(".help-item").querySelector(".help-title").textContent;
    alert(
      `Você se ofereceu para ajudar em: "${title}". Entraremos em contato com os detalhes.`
    );
  });
});
