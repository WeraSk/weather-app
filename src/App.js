import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Vira Churylo-Kozlova and is{" "}
          <a
            href="https://github.com/WeraSk/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://react-weather-one.netlify.app/">
            {" "}
            hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
