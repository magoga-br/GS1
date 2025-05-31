const dadosLocais = {
  AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
  AL: ["Maceió", "Arapiraca", "Palmeira dos Índios"],
  AP: ["Macapá", "Santana", "Laranjal do Jari"],
  AM: ["Manaus", "Parintins", "Itacoatiara"],
  BA: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
  CE: ["Fortaleza", "Quixadá", "Sobral"],
  DF: ["Brasília"],
  ES: ["Vitória", "Vila Velha", "Serra"],
  GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
  MA: ["São Luís", "Imperatriz", "Caxias"],
  MT: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
  MS: ["Campo Grande", "Dourados", "Três Lagoas"],
  MG: ["Belo Horizonte", "Uberlândia", "Contagem"],
  PA: ["Belém", "Ananindeua", "Santarém"],
  PB: ["João Pessoa", "Campina Grande", "Santa Rita"],
  PR: ["Curitiba", "Londrina", "Maringá"],
  PE: ["Recife", "Jaboatão dos Guararapes", "Olinda"],
  PI: ["Teresina", "Parnaíba", "Picos"],
  RJ: ["Rio de Janeiro", "Nova Iguaçu", "Duque de Caxias"],
  RN: ["Natal", "Mossoró", "Parnamirim"],
  RS: ["Porto Alegre", "Caxias do Sul", "Canoas"],
  RO: ["Porto Velho", "Ji-Paraná", "Ariquemes"],
  RR: ["Boa Vista", "Rorainópolis", "Caracaraí"],
  SC: ["Florianópolis", "Joinville", "Blumenau"],
  SP: ["São Paulo", "Guarulhos", "Campinas"],
  SE: ["Aracaju", "Nossa Senhora do Socorro", "Itabaiana"],
  TO: ["Palmas", "Araguaína", "Gurupi"],
};

const selectEstado = document.getElementById("selectEstado");
const selectCidade = document.getElementById("selectCidade");

function carregarEstados() {
  for (const uf in dadosLocais) {
    const option = document.createElement("option");
    option.value = uf;
    option.textContent = uf;
    selectEstado.appendChild(option);
  }
}

function carregarCidades() {
  const estadoSelecionado = selectEstado.value;
  selectCidade.innerHTML = '<option value="">Selecione a Cidade</option>';
  selectCidade.disabled = true;

  if (estadoSelecionado) {
    const cidades = dadosLocais[estadoSelecionado];
    if (cidades) {
      cidades.forEach((cidade) => {
        const option = document.createElement("option");
        option.value = cidade;
        option.textContent = cidade;
        selectCidade.appendChild(option);
      });
      selectCidade.disabled = false;
    }
  }
}

selectEstado.addEventListener("change", carregarCidades);
document.addEventListener("DOMContentLoaded", carregarEstados);
document.addEventListener("DOMContentLoaded", carregarCidades);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const strengthBar = document.getElementById("password-strength");

  // Validação de força da senha
  password.addEventListener("input", function () {
    const strength = calculatePasswordStrength(password.value);
    strengthBar.style.width = strength + "%";

    if (strength < 40) {
      strengthBar.style.background = "#ef4444";
    } else if (strength < 70) {
      strengthBar.style.background = "#f59e0b";
    } else {
      strengthBar.style.background = "#10b981";
    }
  });

  // Função para calcular força da senha
  function calculatePasswordStrength(pass) {
    let strength = 0;

    // Comprimento
    if (pass.length > 7) strength += 25;
    if (pass.length > 11) strength += 15;

    // Caracteres diferentes
    if (/[A-Z]/.test(pass)) strength += 15;
    if (/[a-z]/.test(pass)) strength += 15;
    if (/[0-9]/.test(pass)) strength += 15;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 15;

    return Math.min(strength, 100);
  }

  // Validação do formulário
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    // Validação básica
    if (
      !name ||
      !email ||
      !phone ||
      !location ||
      !passwordValue ||
      !confirmPasswordValue
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      alert("As senhas não coincidem!");
      return;
    }

    if (passwordValue.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    if (!document.getElementById("terms").checked) {
      alert("Você precisa aceitar os termos e condições.");
      return;
    }

    // cadastro feito
    alert("Cadastro realizado com sucesso! Redirecionando...");
    setTimeout(() => {
      window.location.href = "feed.html";
    }, 1000);
  });

  // formatação do numero
  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    } else {
      value = value.replace(/^(\d*)$/, "($1");
    }

    e.target.value = value;
  });
});
