const dadosLocais = {
  AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó"],
  AL: ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo", "União dos Palmares"],
  AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Porto Grande"],
  AM: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari"],
  BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Juazeiro"],
  CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral"],
  DF: ["Brasília", "Ceilândia", "Taguatinga", "Samambaia", "Planaltina"],
  ES: ["Vitória", "Vila Velha", "Serra", "Cariacica", "Linhares"],
  GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia"],
  MA: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias"],
  MT: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra"],
  MS: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã"],
  MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"],
  PA: ["Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal"],
  PB: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux"],
  PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel"],
  PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina"],
  PI: ["Teresina", "Parnaíba", "Picos", "Floriano", "Piripiri"],
  RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói"],
  RN: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Caicó"],
  RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria"],
  RO: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal"],
  RR: ["Boa Vista", "Rorainópolis", "Caracaraí", "Pacaraima", "Alto Alegre"],
  SC: ["Florianópolis", "Joinville", "Blumenau", "São José", "Criciúma"],
  SP: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André"],
  SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "Estância"],
  TO: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins"]
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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const strengthBar = document.getElementById("password-strength");

  password.addEventListener("input", function () {
    const strength = calculatePasswordStrength(password.value);
    strengthBar.style.width = strength + "%";
    if (strength < 40) strengthBar.style.background = "#ef4444";
    else if (strength < 70) strengthBar.style.background = "#f59e0b";
    else strengthBar.style.background = "#10b981";
  });

  function calculatePasswordStrength(pass) {
    let strength = 0;
    if (pass.length > 7) strength += 25;
    if (pass.length > 11) strength += 15;
    if (/[A-Z]/.test(pass)) strength += 15;
    if (/[a-z]/.test(pass)) strength += 15;
    if (/[0-9]/.test(pass)) strength += 15;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 15;
    return Math.min(strength, 100);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value;
    const estado = document.getElementById("selectEstado").value;
    const cidade = document.getElementById("selectCidade").value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    const terms = document.getElementById("terms").checked;

    if (!name) {
      alert("Por favor, preencha o campo Nome.");
      return; 
    }

    if (!email) {
      alert("Por favor, preencha o campo E-mail.");
      return;
    }

    if (!phone) {
      alert("Por favor, preencha o campo Telefone.");
      return;
    }
    
    if (phone.replace(/\D/g, '').length < 10) {
      alert("Por favor, insira um número de telefone válido.");
      return;
    }

    if (!estado) {
      alert("Por favor, selecione um Estado.");
      return;
    }

    if (!cidade) {
      alert("Por favor, selecione uma Cidade.");
      return;
    }

    if (!passwordValue) {
      alert("Por favor, preencha o campo Senha.");
      return;
    }

    if (passwordValue.length < 8 || !/[A-Z]/.test(passwordValue) || !/[a-z]/.test(passwordValue) || !/[0-9]/.test(passwordValue)) {
      alert("A senha não atende aos requisitos: deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.");
      return;
    }

    if (!confirmPasswordValue) {
        alert("Por favor, confirme sua senha.");
        return;
    }

    if (passwordValue !== confirmPasswordValue) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!terms) {
      alert("Você precisa aceitar os Termos de Serviço e a Política de Privacidade.");
      return;
    }

    alert("Cadastro realizado com sucesso! Redirecionando...");
    setTimeout(() => {
      window.location.href = "feed.html";
    }, 1000);
  });

  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 10) value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    else if (value.length > 6) value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    else if (value.length > 2) value = value.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    else value = value.replace(/^(\d*)$/, "($1");
    e.target.value = value;
  });
});
