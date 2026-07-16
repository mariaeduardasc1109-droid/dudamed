document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const loginMessage = document.getElementById('loginMessage');

  if (!loginForm || !loginMessage) {
    return;
  }

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      loginMessage.textContent = 'Por favor, informe seu e-mail e senha para acessar.';
      return;
    }

    loginMessage.textContent = 'Acesso autorizado. Em breve você será redirecionado para a sua área de paciente.';
    loginMessage.style.background = 'rgba(109, 70, 178, 0.14)';
  });
});
