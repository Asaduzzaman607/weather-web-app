function currentWeather() {
  let inputValue = document.getElementById("searchBox").value;

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue +
      "&appid=8cb8538c0da6fad1047b1b6644d2034a"
  )
    .then((res) => res.json())
    .then((data) => {
      // const weatherArray = data.weather[0]
      console.log(data);
      console.log(data.weather);

      console.log(data.weather[0]);
      const mainOutput = data.main;
      const cityName = `${data.name}`;
      let temp = `${mainOutput.temp}`;
      let kTemp = parseFloat(temp);
      let fTemp = kTemp - 273.15;
      let finalTemp = fTemp.toFixed(1);
      const weatherArray = data.weather[0];
      const weatherType = `${weatherArray.main}`;
      document.getElementById("locName").innerText = cityName;
      document.getElementById("temperature").innerText = finalTemp;
      document.getElementById("weatherType").innerText = weatherType;
    });
}
