+document.querySelectorAll(".action-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const infoBox = this.closest(".marker-info");
    const title = infoBox.querySelector("h4").textContent;

    if (
      this.textContent.includes("Oferecer") ||
      this.textContent.includes("Solicitar")
    ) {
      alert(
        `Você respondeu ao pedido: "${title}". Entraremos em contato com os detalhes.`
      );
    } else {
      alert(`Abrindo detalhes para: ${title}`);
    }
  });
});
