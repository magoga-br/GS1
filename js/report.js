const reportModal = document.querySelector(".report-modal");
const openReportBtn = document.getElementById("open-report-modal");
const closeReportBtn = document.querySelector(".close-modal");
const cancelReportBtn = document.querySelector(".btn-cancel");
const submitReportBtn = document.querySelector(".btn-submit");
const reportTypeSelect = document.getElementById("report-type");
const resourcesSection = document.getElementById("resources-section");


function openReportModal() {
  reportModal.classList.add("active");
  document.body.style.overflow = "hidden"; 
}

function closeReportModal() {
  reportModal.classList.remove("active");
  document.body.style.overflow = "auto"; 
}

openReportBtn.addEventListener("click", openReportModal);
closeReportBtn.addEventListener("click", closeReportModal);
cancelReportBtn.addEventListener("click", closeReportModal);

// fechar clicando fora
reportModal.addEventListener("click", function (e) {
  if (e.target === reportModal) {
    closeReportModal();
  }
});

// mostrar/ocultar com base no tipo
reportTypeSelect.addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue === "help" || selectedValue === "offer") {
    resourcesSection.style.display = "block";
  } else {
    resourcesSection.style.display = "none";
  }
});

// envio
submitReportBtn.addEventListener("click", function () {
  const reportType = reportTypeSelect.value;
  const location = document.getElementById("report-location").value;
  const urgency = document.querySelector('input[name="urgency"]:checked').value;
  const details = document.getElementById("report-details").value;

  if (!reportType || !location || !details) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  alert(
    "Reporte enviado com sucesso! Sua informação está ajudando a comunidade."
  );

  document.getElementById("report-form").reset();
  resourcesSection.style.display = "none";

  closeReportModal();
});

// checkbox
const checkboxOptions = document.querySelectorAll(".checkbox-option");
checkboxOptions.forEach((option) => {
  option.addEventListener("click", function () {
    const checkbox = this.querySelector("input");
    checkbox.checked = !checkbox.checked;
    this.classList.toggle("active", checkbox.checked);
  });
});
