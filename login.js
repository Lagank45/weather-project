document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Hardcoded credentials
  if (username === "admin" && password === "1234") {
    localStorage.setItem("authenticated", "true");
    window.location.href = "weather.html";
  } else {
    document.getElementById("errorMsg").classList.remove("hidden");
  }
});
