const express = require('express');
const multer = require('multer');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Set Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('audio'), (req, res) => {
  res.send('File uploaded successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
