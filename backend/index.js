const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const AuthRoutes = require('./Routes/AuthRoutes');
const cors = require('cors');
require('dotenv').config();
require('./Models/db');

app.use(bodyparser.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



app.get('/', (req, res) => {
  res.send('Hello World');
});


app.use('/auth', AuthRoutes);