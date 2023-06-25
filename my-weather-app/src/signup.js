import React, { useState } from 'react';


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === '') {
      alert('Please enter an email.');
      return;
    }

    if (password.trim() === '') {
      alert('Please enter a password.');
      return;
    }

    // Perform login logic here
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ backgroundImage: "linear-gradient(rgba(31, 48, 106, 0.8), rgb(84, 143, 239), rgba(217, 230, 243, 0.8))", backgroundAttachment: "fixed" }}>
        <style>
            {
                `
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
                    background-color: rgb(128,128,128,0.4);
                    border-radius: 10px;
                  }
                  .tab {
                    display: inline-block;
                    margin-left: 2em;
                }
                `
            }
        </style>
      <ul>
        <li><a href="/index.html">🌧️</a></li>
        <li><a href="/index.html">Weather</a></li>
        <li>
          <form className="d-flex" role="search" onSubmit={(event) => {
            const searchTerm = event.target.querySelector("input[type='search']").value;
            console.log("Search term:", searchTerm);
            window.location.href = "search.html?term=" + searchTerm;
          }}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ height: "40px", fontSize: "14pt", borderRadius: "10px", textAlign: "center", backgroundColor: "rgba(0,0,0,0.5)" }} />
            <button type="submit" style={{ borderRadius: "10px", backgroundColor: "blue", padding: "10px 20px", textAlign: "center", display: "inline-block", fontSize: "16px" }}>Search</button>
            <span className="tab"></span>
            <button style={{ borderRadius: "10px", backgroundColor: "blue", padding: "10px 20px", textAlign: "center", display: "inline-block", fontSize: "16px" }} >Login</button>
            <span className="tab"></span>
            <a href="signup.html" style={{ borderRadius: "10px", backgroundColor: "blue", padding: "10px 20px", textAlign: "center", display: "inline-block", fontSize: "16px" }}>Signup</a>
          </form>
        </li>
      </ul>
      <h1 style={{ marginTop: "30px", marginLeft: "50px", color: "white" }}>Signup</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div style={{ marginLeft: "50px", marginTop: "50px" }}>
          <label htmlFor="email" className="form-label" style={{ color: "white", fontSize: "25px" }}>Email address</label><br /><br />
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            style={{ width: "1300px", height: "30px", borderRadius: "10px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: "50px", marginTop: "50px" }}>
          <label htmlFor="password" className="form-label" style={{ color: "white", fontSize: "25px" }}>Password</label><br /><br />
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="emailHelp"
            style={{ width: "1300px", height: "30px", borderRadius: "10px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id="submit" value="Login" style={{ color: "white", marginLeft: "50px", marginTop: "50px", padding: "10px 10px", borderRadius: "10px", backgroundColor: "blue" }}>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
