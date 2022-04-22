let btnGetWeather = document.getElementById("btn_get_weather");

btnGetWeather.addEventListener("click", function (event) {
  event.preventDefault();
  getWeather();
});

const getWeather = () => {
  const inputCity = document.getElementById("ciudad");
  const selectCountry = document.getElementById("pais");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value},${selectCountry.value}&units=metric&appid=f247353a0653b47047ee1d9af9390ba6`;
  queryAppi(url);
};

const queryAppi = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const {
        name,
        main: { temp, temp_min, temp_max },
      } = response;
      printWeather(name, temp, temp_max, temp_min);
    })
    .catch((err) => console.error(err));
};

const printWeather = (city, temp, temp_max, temp_min) => {
  document.getElementById("resultado").innerHTML = `<div>
  <p> Clima en ${city} </p>
  <p class="text-6xl"> ${temp} °C </p>
  <p> Max. ${temp_max} °C </p>
  <p> Min. ${temp_min} °C </p>
  </div>`;
}
