// Map Marker Interaction
const markers = document.querySelectorAll(".marker");

markers.forEach((marker) => {
  marker.addEventListener("click", function (e) {
    e.stopPropagation();

    const markerId = this.getAttribute("data-id");
    const infoBox = document.getElementById(`marker-info-${markerId}`);

    // Esconder todas as caixas de informação
    document.querySelectorAll(".marker-info").forEach((box) => {
      box.style.display = "none";
    });

    // Exibir a caixa de informação correspondente
    if (infoBox) {
      const rect = this.getBoundingClientRect();
      infoBox.style.top = `${rect.top}px`;
      infoBox.style.left = `${rect.left + 40}px`;
      infoBox.style.display = "block";
    }
  });
});

// Close info when clicking outside
document.addEventListener("click", function () {
  document.querySelectorAll(".marker-info").forEach((box) => {
    box.style.display = "none";
  });
});

// Prevent closing when clicking inside info box
document.querySelectorAll(".marker-info").forEach((box) => {
  box.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove classes active de todos os botões
    filterBtns.forEach((b) => b.classList.remove("active"));

    // adiciona a classe active ao botão clicado
    this.classList.add("active");

    const filterType = this.textContent.trim().toLowerCase();
  });
});
