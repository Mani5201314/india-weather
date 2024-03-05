import React, { useState } from "react";
import "./Api.css";

const Api = () => {
  let api = {
    key: "18cd3a8fb5ac052ece5d7c5d29ccaa6a",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  let [search, setSearch] = useState("");
  let [weather, setweather] = useState("");
  function locsearch() {
    fetch(`${api.base}?q=${search} &appid=${api.key}&unit=matic`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setweather(data);
      });
  }
  return (
    <div className="Card">
      <input
        type="text"
        name=""
        id=""
        placeholder="search"
        onChange={e => setSearch(e.target.value)}
      ></input>

      <input type="tel" />
      <button onClick={locsearch} id="btn">
        <img
          src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
          width={10}
          alt=""
        />
      </button>
      <section id="weather">
        {weather.main != undefined ? (
          <div>
            <h1 id="name">{weather.main.temp}°C</h1>

            <h1 id="name">&#x1F5FA; {weather.name}</h1>
          </div>
        ) : (
          <p id="name"> "Data no found"</p>
        )}
      </section>
    </div>
  );
};

export default Api;

// https://www.interviewbit.com/html-interview-questions/
// iframes
// https://github.com/adwaitya/html5-interview-questions
// https://github.com/sudheerj/javascript-interview-questions
// https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions
