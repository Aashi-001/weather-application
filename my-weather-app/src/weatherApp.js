import React from 'react';
import { useState } from 'react';
import sunny from './images/sunny.png'
import cloudy from './images/partiallycloudy.png'
import rainy from './images/rain.png'
import clearnight from './images/clearnight.png'
import './styles.css';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';


function WeatherApp() {
    const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    window.location.href = `search.html?term=${searchTerm}`;
  };

  const handleLinkClick = (event) => {
    event.preventDefault();

    // Redirect to the desired page
    navigate('/login'); // Replace '/otherpage' with the desired URL
  };
  const headtodetailed = (event) => {
    event.preventDefault();

    // Redirect to the desired page
    navigate('/detailed'); // Replace '/otherpage' with the desired URL
  };
  const handlesignup = (event) => {
    event.preventDefault();

    // Redirect to the desired page
    navigate('/signup'); // Replace '/otherpage' with the desired URL
  };
  

  return (
    <div className="weather-app">
     <style>
        {`
        .card {
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 10px;
          opacity: 0.8;
        }
        a h1 {
          color: black;
          text-align: center;
        }
        a {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: inline-block;
          margin: 10px 10px;
          border: 1px;
          box-shadow: 10px 10px black;
        }
        table, th, td {
          margin-left: auto;
          margin-right: auto;
          font-size: 10px;
          table-layout: fixed;
          width: 70px;
          border: 2px solid black;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: transparent;
        }
        li {
          float: left;
        }
        li a {
          font-size: 30px;
          display: block;
          color: white;
          text-align: center;
          padding: 10px;
          text-decoration: none;
          box-shadow: none;
        }
        li form {
          display: inline-block;
          margin-left: 570px;
          padding: 10px;
        }
        li a:hover {
          background-color: rgb(128, 128, 128, 0.4);
          border-radius: 10px;
        }
        .tab {
          display: inline-block;
          margin-left: 2em;
        }
        video {
          object-fit: cover;
          position: relative;
          width: 20%;
          height: 35%;
          position: absolute;
          z-index: -1;
          border-radius: 10px;
        }
        `}
      </style>   
      <ul>
        <li>
          <a href="/index.html">🌧️</a>
        </li>
        <li>
          <a href="/index.html">Weather</a>
        </li>
        <li>
          <form className="d-flex" onSubmit={handleSearch} role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                height: '40px',
                fontSize: '14pt',
                borderRadius: '10px',
                textAlign: 'center',
                backgroundColor: 'rgb(0,0,0,0.5)',
                color: 'white',
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              style={{
                borderRadius: '10px',
                backgroundColor: 'blue',
                padding: '10px 20px',
                textAlign: 'center',
                display: 'inline-block',
                fontSize: '16px',
                color: 'white',
              }}
              type="submit"
            >
              Search
            </button>
            <a
              href="login.html"
              onClick={handleLinkClick}
              style={{
                borderRadius: '10px',
                backgroundColor: 'blue',
                padding: '10px 20px',
                textAlign: 'center',
                display: 'inline-block',
                fontSize: '16px',
              }}
            >
              Login
            </a>
            <a
              href="signup.html"
              onClick={handlesignup}
              style={{
                borderRadius: '10px',
                backgroundColor: 'blue',
                padding: '10px 20px',
                textAlign: 'center',
                display: 'inline-block',
                fontSize: '16px',
              }}
            >
              Signup
            </a>
          </form>
        </li>
      </ul>
      <h1
        style={{
          textAlign: 'center',
          color: 'white',
          fontFamily: 'monospace',
        }}
      >
        My Weather - App
      </h1>
      <div className="weather-cards-container" style={{ display: 'flex' }}>
        <div
          className="weather-card"
          style={{
            backgroundImage: `url(${sunny})`,
            textDecoration: 'none',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            opacity: '0.9',
            margin: '30px',
            width: '20%',
          }}
          onClick={headtodetailed}
        >
          <div className="card">
            <video
              id="background-video"
              autoPlay
              loop
              muted
              poster="./images/sunny.png"
            >
              <source src="/images/sunny.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <h1 className="card-title" style={{textAlign: 'center'}}>Chandigarh</h1>
              <h3 style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>
                Mostly Sunny
              </h3>
              <p style={{ color: 'black', textAlign: 'center' }}>H:43°C L:31°C</p>
              <table style={{ color: 'black' }}>
                <tr>
                  <th>Date</th>
                  <th>Weather</th>
                  <th>Temperature</th>
                </tr>
                <tr>
                  <td>Mon</td>
                  <td>Sunny</td>
                  <td>37°C</td>
                </tr>
                <tr>
                  <td>Tue</td>
                  <td>Cloudy</td>
                  <td>32°C</td>
                </tr>
                <tr>
                  <td>Wed</td>
                  <td>Rainy</td>
                  <td>28°C</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div
          className="weather-card"
          style={{
            backgroundImage: `url(${rainy})`,
            textDecoration: 'none',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            opacity: '0.9',
            margin: '30px',
            width: '20%'
          }}
          onClick={headtodetailed}
        >
          <div className="card">
            <video
              id="background-video"
              autoPlay
              loop
              muted
              poster="./images/sunny.png"
            >
              <source src="/images/sunny.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <h1 className="card-title" style={{textAlign: 'center'}}>Delhi</h1>
              <h3 style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>
                Rainy
              </h3>
              <p style={{ color: 'black', textAlign: 'center' }}>H:34°C L:24°C</p>
              <table style={{ color: 'black' }}>
                <tr>
                  <th>Date</th>
                  <th>Weather</th>
                  <th>Temperature</th>
                </tr>
                <tr>
                  <td>Mon</td>
                  <td>Sunny</td>
                  <td>37°C</td>
                </tr>
                <tr>
                  <td>Tue</td>
                  <td>Cloudy</td>
                  <td>32°C</td>
                </tr>
                <tr>
                  <td>Wed</td>
                  <td>Rainy</td>
                  <td>28°C</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div
          className="weather-card"
          style={{
            backgroundImage: `url(${cloudy})`,
            textDecoration: 'none',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            opacity: '0.9',
            margin: '30px',
            width: '20%'
          }}
          onClick={headtodetailed}
        >
          <div className="card">
            <video
              id="background-video"
              autoPlay
              loop
              muted
              poster="./images/sunny.png"
            >
              <source src="/images/sunny.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <h1 className="card-title" style={{textAlign: 'center'}}>Banglore</h1>
              <h3 style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>
                Partially Cloudy
              </h3>
              <p style={{ color: 'black', textAlign: 'center' }}>H:37°C L:25°C</p>
              <table style={{ color: 'black' }}>
                <tr>
                  <th>Date</th>
                  <th>Weather</th>
                  <th>Temperature</th>
                </tr>
                <tr>
                  <td>Mon</td>
                  <td>Sunny</td>
                  <td>37°C</td>
                </tr>
                <tr>
                  <td>Tue</td>
                  <td>Cloudy</td>
                  <td>32°C</td>
                </tr>
                <tr>
                  <td>Wed</td>
                  <td>Rainy</td>
                  <td>28°C</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div
          className="weather-card"
          style={{
            backgroundImage: `url(${clearnight})`,
            textDecoration: 'none',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            opacity: '0.9',
            margin: '30px',
            width: '20%'
          }}
          onClick={headtodetailed}
        >
          <div className="card">
            <video
              id="background-video"
              autoPlay
              loop
              muted
              poster="./images/sunny.png"
            >
              <source src="/images/sunny.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <h1 className="card-title" style={{textAlign: 'center', color: 'white'}}>NewYork</h1>
              <h3 style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }}>
                Clear
              </h3>
              <p style={{ color: 'black', textAlign: 'center',color: 'white' }}>H:21°C L:10°C</p>
              <table style={{ color: 'white'}}>
                <tr>
                  <th>Date</th>
                  <th>Weather</th>
                  <th>Temperature</th>
                </tr>
                <tr>
                  <td>Mon</td>
                  <td>Sunny</td>
                  <td>37°C</td>
                </tr>
                <tr>
                  <td>Tue</td>
                  <td>Cloudy</td>
                  <td>32°C</td>
                </tr>
                <tr>
                  <td>Wed</td>
                  <td>Rainy</td>
                  <td>28°C</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        {/* Add more weather cards here */}
      </div>
    </div>
  );
}

export default WeatherApp;
