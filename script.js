document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("regUser").value;
      const pass = document.getElementById("regPass").value;

      if (user && pass) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        alert("Registrasi berhasil! Silakan login.");
        window.location.href = "login.html";
      } else {
        alert("Isi semua kolom!");
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("loginUser").value;
      const pass = document.getElementById("loginPass").value;
      const savedUser = localStorage.getItem("username");
      const savedPass = localStorage.getItem("password");

      if (user === savedUser && pass === savedPass) {
        alert("Login berhasil!");
        window.location.href = "home.html";
      } else {
        alert("Username atau password salah!");
      }
    });
  }
});
