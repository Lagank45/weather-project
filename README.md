
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Login - Weather App</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="weather-container">
    <h1>Login</h1>
    <form id="loginForm">
      <input type="text" id="username" placeholder="Username" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p id="errorMsg" class="hidden" style="color: red;">Invalid credentials</p>
  </div>
  <script src="login.js"></script>
</body>
</html>
