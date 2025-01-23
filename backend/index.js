const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const portfolioRoutes = require('./routes/portfolioRoutes');
const contactFormRoutes = require('./routes/contactFormRoutes');

app.use(cors());

app.use(express.json());  // Pour parser le JSON

// Serve images from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));


app.get('/api', (req, res) => {
  console.log("Hello")
  res.json({ message: 'Hello from the back end!' });
});


app.use('/api', portfolioRoutes); 
app.use('/api', contactFormRoutes); 



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

