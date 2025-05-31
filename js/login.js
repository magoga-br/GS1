document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // simulação apenas
  if (email && password) {
    alert("Login realizado com sucesso! Redirecionando...");
    setTimeout(() => {
      window.location.href = "feed.html";
    }, 1000);
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

document
  .querySelector(".btn-social.google")
  .addEventListener("click", function () {
    alert("Você escolheu entrar com Google");
  });

document
  .querySelector(".btn-social.facebook")
  .addEventListener("click", function () {
    alert("Você escolheu entrar com Facebook");
  });
