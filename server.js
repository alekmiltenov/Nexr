const express = require('express');
const path = require('path');

const app = express();

// ENV config (optional)
const PORT = process.env.PORT || 3000;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to EJS (or skip if pure HTML)
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// ROUTES
app.get('/', (req, res) => {
  res.render('home'); // loads views/home.html
});

app.get('/about', (req, res) => {
  res.send('<h2>This is the About Page</h2>');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is your data from the API' });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
