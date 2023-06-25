import React from "react";
import "./detailed.css";

function Weather() {
  return (
    <div className="weather-container">
      <h1>
        Weather in <span id="city-name">Delhi</span>
      </h1>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%", display: "block"}}>
        <br />
        <br />
          <div className="hourly-weather">
            <table className="weather-table" style={{border:'1px solid rgb(109,211,255)', background: 'rgba(89, 173, 252, 0.4)', borderRadius: '10px'}}>
              <tr>
                <th style={{ width: '75px'}}>1AM</th>
                <th style={{ width: '75px'}}>2AM</th>
                <th style={{ width: '75px'}}>3AM</th>
                <th style={{ width: '75px'}}>4AM</th>
                <th style={{ width: '75px'}}>5AM</th>
                <th style={{ width: '75px'}}>6AM</th>
                <th style={{ width: '75px'}}>7AM</th>
                <th style={{ width: '75px'}}>8AM</th>
                <th style={{ width: '75px'}}>9AM</th>
                <th style={{ width: '75px'}}>10AM</th>
              </tr>
              <tr>
                <th>22</th>
                <th>23</th>
                <th>21</th>
                <th>24</th>
                <th>20</th>
                <th>23</th>
                <th>26</th>
                <th>21</th>
                <th>21</th>
                <th>20</th>
              </tr>
              <tr>
                <th>🌧️</th>
                <th>⛈️</th>
                <th>🌧️</th>
                <th>🌧️</th>
                <th>🌧️</th>
                <th>🌧️</th>
                <th>🌧️</th>
                <th>🌧️</th>
                <th>🌧️</th>
                <th>⛈️</th>
              </tr>
            </table>
          </div>
          <div style={{ padding: "30px", margin: "30px"}}>
            <div className="bar-graph bar-graph-horizontal bar-graph-one">
              <div className="bar-one">
                <span className="year">HUMIDITY</span>
                <div className="bar" data-percentage="90.6%"></div>
              </div>
              <div className="bar-two">
                <span className="year">UV INDEX</span>
                <div className="bar" data-percentage="2 LOW"></div>
              </div>
              <div className="bar-three">
                <span className="year">WIND</span>
                <div className="bar" data-percentage="7 KPH%"></div>
              </div>
              <div className="bar-four">
                <span className="year">PRESSURE</span>
                <div className="bar" data-percentage="997 hPa"></div>
              </div>
              <div className="bar-five">
                <span className="year">RAINFALL</span>
                <div className="bar" data-percentage="5 MM"></div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="weekly-weather" style={{ padding: "30px", margin: "30px"}}>
            <table className="forecast-table" style={{border:'1px solid rgb(109,211,255)', background: 'rgba(89, 173, 252, 0.4)', borderRadius: '10px', padding: "30px", margin: "30px"}}>
              <tr>
              <td><tab /></td>
                <td><h1
              style={{
                fontFamily: "monospace",
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              10 day forecast
            </h1></td>
            </tr>
              <tr>
                <td>Today</td>
                <td>🌧️</td>
                <td><tab /></td>
                <td>
                    <hr className="horizontal-line" />
                </td>
              </tr>
              <tr>
                <td>MON</td>
                <td>🌧️</td>
                <td><tab /></td>
                <td>
                    <hr className="horizontal-line" />
                </td>
              </tr>
              <tr>
                <td>TUE</td>
                <td>🌧️</td>
                <td><tab /></td>
                <td>
                    <hr className="horizontal-line" />
                </td>
              </tr>
              <tr>
                <td>WED</td>
                <td>🌧️</td>
                <td><tab /></td>
                <td>
                    <hr className="horizontal-line" />
                </td>
              </tr>
              <tr>
                <td>THU</td>
                <td>🌧️</td>
                <td><tab /></td>
                <td>
                    <hr className="horizontal-line" />
                </td>
              </tr>
              <tr>
                <td>FRI</td>
                <td>🌧️</td>
                <td><tab /></td>
                <td>
                    <hr className="horizontal-line" />
                </td>
              </tr>
              <tr>
                <td>SAT</td>
                <td>🌧️</td>
                <td><tab /></td>
                <td>
                    <hr className="horizontal-line" />
                </td>
              </tr>
              <tr>
                <td>SUN</td>
                <td>🌧️</td>
                <td><tab /></td>
                <td>
                    <hr className="horizontal-line" />
                </td>
              </tr>
              <tr>
                <td>MON</td>
                <td>🌧️</td>
                <td><tab /></td>
                <td>
                    <hr className="horizontal-line" />
                </td>
              </tr>
              <tr>
                <td>TUE</td>
                <td>🌧️</td>
                <td><tab /></td>
                <td>
                    <hr className="horizontal-line" />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div id="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d376260.52369174757!2d77.04886384917977!3d28.595959823719163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687170899045!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            className="weather-cards"
            style={{
              display: "flex",
              padding: "10px",
              backgroundSize: "cover",
              color: "black",
            }}
          >
            <div className="weather-cards-wrapper">
              <div className="weather-card">
                <h1 style={{ fontSize: "20px", fontFamily: "monospace" }}>
                  AQI
                </h1>
                <h2 style={{ fontSize: "15px", fontFamily: "monospace" }}>
                  92-satisfactory
                </h2>
                <h3 style={{ fontSize: "12px", fontFamily: "monospace" }}>
                  air quality is satisfactory.
                </h3>
              </div>
              <div className="weather-card">
                <h1 style={{ fontSize: "20px", fontFamily: "monospace" }}>
                  UV INDEX
                </h1>
                <h2 style={{ fontSize: "15px", fontFamily: "monospace" }}>
                  2-LOW
                </h2>
                <h3 style={{ fontSize: "12px", fontFamily: "monospace" }}>
                  Low for the rest of the day.
                </h3>
              </div>
              <div className="weather-card">
                <h1 style={{ fontSize: "20px", fontFamily: "monospace" }}>
                  SUNSET
                </h1>
                <h2 style={{ fontSize: "15px", fontFamily: "monospace" }}>
                  7:27PM
                </h2>
                <h3 style={{ fontSize: "12px", fontFamily: "monospace" }}>
                  Sunrise at 5:21AM.
                </h3>
              </div>
              <div className="weather-card">
                <h1 style={{ fontSize: "20px", fontFamily: "monospace" }}>
                  FEELS LIKE
                </h1>
                <h2 style={{ fontSize: "15px", fontFamily: "monospace" }}>
                  28°C
                </h2>
                <h3 style={{ fontSize: "12px", fontFamily: "monospace" }}>
                  Humidity is making it feel hotter.
                </h3>
              </div>
              <div className="weather-card">
                <h1 style={{ fontSize: "20px", fontFamily: "monospace" }}>
                  VISIBILITY
                </h1>
                <h2 style={{ fontSize: "15px", fontFamily: "monospace" }}>
                  18KM
                </h2>
                <h3 style={{ fontSize: "12px", fontFamily: "monospace" }}>
                  It's perfectly clear right now.
                </h3>
              </div>
              <div className="weather-card">
                <h1 style={{ fontSize: "20px", fontFamily: "monospace" }}>
                  HUMIDITY
                </h1>
                <h2 style={{ fontSize: "15px", fontFamily: "monospace" }}>
                  49%
                </h2>
                <h3 style={{ fontSize: "12px", fontFamily: "monospace" }}>
                  The dew point is 22° right now.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
