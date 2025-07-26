// Redirect to login if not authenticated
if (localStorage.getItem("authenticated") !== "true") {
  window.location.href = "index.html";
}

const form = document.getElementById("weatherForm");
const input = document.getElementById("locationInput");
const resultBox = document.getElementById("weatherResult");
const geoBtn = document.getElementById("geoButton");

const apiKey = "af0c8fb012434e20b3f34211252607";

// ========== Weather Display Logic ==========
async function fetchWeather(query) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");

    const data = await response.json();

    document.getElementById("cityName").textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temp").textContent = data.current.temp_c;
    document.getElementById("condition").textContent = data.current.condition.text;
    document.getElementById("humidity").textContent = data.current.humidity;
    document.getElementById("wind").textContent = data.current.wind_kph;
    document.getElementById("weatherIcon").src = `https:${data.current.condition.icon}`;

    resultBox.classList.remove("hidden");
  } catch (error) {
    alert("Could not fetch weather. Try a valid location.");
    resultBox.classList.add("hidden");
  }
}

// ========== Manual Location Submit ==========
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const location = input.value.trim();
  if (location) {
    fetchWeather(location);
  }
});

// ========== Geolocation Weather ==========
geoBtn.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchWeather(`${lat},${lon}`);
      },
      () => {
        alert("Geolocation permission denied or not available.");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
});

// ========== Logout ==========
function logout() {
  localStorage.removeItem("authenticated");
  window.location.href = "index.html";
}
