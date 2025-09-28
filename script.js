/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("t1-msg").innerText = "Hello, World!";
  // =======================================
  // TODO2: Interaction Corner
  // ---------------------------------------
  // There is a button with id="t2-btn".
  // When the button is clicked, change the text inside
  // the <p> with id="t2-status" to:
  //     "You clicked the button!"

  // ✅ Task:
  // - Get the button element.
  // - Add a click event listener.
  // - Inside the event, change the text of the status paragraph.

  // 💡 Hint:
  // button.addEventListener("click", function () {
  //     // change text here
  // });
  // */
  let btn = document.getElementById("t2-btn");
  let label = document.getElementById("t2-status");
  btn.addEventListener("click", () => {
    label.innerText = "You clicked the button!";
  });
  /*  
    =======================================
    TODO3: Inspiring Quote Board
    ---------------------------------------
    Use the Quotable API to display a random quote.
    
    🌍 API Link:
    https://dummyjson.com/quotes/random
    
    ✅ Task:
    - When the button with id="t3-loadQuote" is clicked:
        - Fetch a random quote from the API.
        - Display the quote text inside the <p> with id="t3-quote".
        - Display the author inside the <p> with id="t3-author".
    
    💡 Hint:
    The API returns JSON like:
    {
      "content": "Do not watch the clock. Do what it does. Keep going.",
      "author": "Sam Levenson"
    }
    
    Use:
    data.content   // the quote text
    data.author    // the author
    */
  let btn3 = document.getElementById("t3-loadQuote");
  btn3.onclick = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let content = document.getElementById("t3-quote");
        let author = document.getElementById("t3-author");

        content.innerText = res.quote;
        author.innerText = res.author;
      });
  };
  /*  
    =======================================
    TODO4: Dammam Weather Now
    ---------------------------------------
    Use the OpenWeatherMap API to display live weather data.
    
    🌍 API Link:
    https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric
    
    ⚠️ Replace YOUR_API_KEY with your actual API key from:
    https://openweathermap.org/api
    
    ✅ Task:
    - When the button with id="t4-loadWx" is clicked:
        - Fetch current weather data for Dammam.
        - Show temperature in the element with id="t4-temp".
        - Show humidity in the element with id="t4-hum".
        - Show wind speed in the element with id="t4-wind".
    
    💡 Hint:
    data.main.temp      → temperature (°C)
    data.main.humidity  → humidity (%)
    data.wind.speed     → wind speed (m/s)
    */
  let btn4 = document.getElementById("t4-loadWx");
  const APIkey = "grader insert your api key here.";
  btn4.addEventListener("click", () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${APIkey}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let temp = document.getElementById("t4-temp");
        let hum = document.getElementById("t4-hum");
        let wind = document.getElementById("t4-wind");
        temp.innerText = res.main.temp;
        hum.innerText = res.main.humidity;
        wind.innerText = res.wind.speed;
      });
  });
});
