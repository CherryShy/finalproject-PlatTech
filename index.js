const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const BACKGROUND_IMAGE_URL = 'https://images.unsplash.com/photo-1620503292890-c597f62cce8d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8';
// *** IMPORTANT: REPLACE THIS URL WITH A LINK TO CHERRY SHY P. SABARIAS' PROFILE PICTURE ***
const PROFILE_PIC_URL = 'https://avatars.githubusercontent.com/u/183344650?v=4'; // Placeholder Profile Picture URL

// --- SINGLE HOME PAGE ROUTE (Merges Welcome and Info) ---
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Welcome</title>
      <style>
        body {
          /* Background image settings */
          background-image: url('${BACKGROUND_IMAGE_URL}');
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          color: white;
          text-shadow: 1px 1px 2px black;
          font-family: sans-serif;
          margin-top: 50px;
          text-align: center;
        }
        .container {
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.4); 
          border-radius: 10px;
          max-width: 600px;
          margin: 20px auto; 
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }
        /* New CSS for the Profile Picture */
        .profile-pic {
            width: 150px;
            height: 150px;
            border-radius: 50%; /* Makes the image circular */
            object-fit: cover;
            border: 4px solid #ffdb58; /* Border around the picture */
            margin-bottom: 20px;
        }
        /* KEY CHANGE: Initially hide the info container */
        #info-container {
            display: none; 
            margin-top: 40px;
        }
        button {
          background-color: #ff008cff; /* Pink button color */
          color: white; 
          border: none; 
          border-radius: 5px; 
          padding: 15px 30px;
          font-size: 20px;
          cursor: pointer;
          margin-top: 15px;
        }
        h2 { color: #ffd4e7ff; } /* Light pink/yellow color */
        .quote { font-style: italic; font-size: 1.5em; color: #f0f0f0; }
      </style>
      
      <script>
        // Function to toggle visibility of the info card
        function showInfo() {
          const infoBox = document.getElementById('info-container');
          const button = document.getElementById('toggle-button');
          
          if (infoBox.style.display === 'none' || infoBox.style.display === '') {
            infoBox.style.display = 'block'; // Show the box
            button.textContent = 'Hide My Info';
          } else {
            infoBox.style.display = 'none'; // Hide the box
            button.textContent = 'See My Info';
          }
        }
      </script>
      
    </head>
    <body>
    
      <div class="container" id="welcome-container">
        <h1>Hi! Welcome to My Page</h1>
        <p>Hope you're doing fine! ♥</p>
        
        <button id="toggle-button" onclick="showInfo()">
          See My Info
        </button>
      </div>
      
      <div class="container" id="info-container">
        <img src="${PROFILE_PIC_URL}" alt="Profile Picture" class="profile-pic">
        
        <h1>Name: Cherry Shy P. Sabarias</h1>
        <h2>Section: BSIT SM - 4101</h2>
        <br>
        <p class="quote">
          "Do the best you can until you know better. Then, when you know better, do better." <br>
          — Maya Angelou
        </p>
        <br>
      </div>
      
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});