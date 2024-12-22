// Step 1: Remove all HTML
document.documentElement.innerHTML = "";

// Step 2: Add new HTML content with live countdown
document.documentElement.innerHTML = `
  <head>
    <title>Wangsapiyik</title>
    <style>
      body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: black;
        background-image: url('https://dfbro.github.io/p.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        color: red;
        font-family: Arial, sans-serif;
        text-align: center;
      }
      .countdown {
        font-size: 2rem;
        margin-top: 20px;
        color: red;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>Taken down!</h1>
      <p>Wangsapiyik kang kinurmatan ingkang 2024</p>
      <p class="countdown">Redirecting in <span id="countdown">5</span> seconds...</p>
    </div>
  </body>
`;

// Step 3: Countdown logic
let countdown = 5;
const countdownElement = document.getElementById("countdown");

const interval = setInterval(() => {
  countdown--;
  countdownElement.textContent = countdown;
  if (countdown === 0) {
    clearInterval(interval);
    window.location.href = "https://youtube.com/@jogjaroblox";
  }
}, 1000);
