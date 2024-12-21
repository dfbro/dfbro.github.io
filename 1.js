// Step 1: Remove all HTML
document.documentElement.innerHTML = "";

// Step 2: Add new HTML content
document.documentElement.innerHTML = `
  <head>
    <title>Hacked!</title>
    <style>
      body {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: black;
        color: red;
        font-family: Arial, sans-serif;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>This Website Has Been Hacked!</h1>
      <p>Minimal beli script. Sekolahnha saja yang Model tapi gak MODAL.</p>
    </div>
  </body>
`;
