const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); // Ajoutez ceci
const cors = require('cors'); // Ajoutez ceci
//lol
app.use(cors()); // Ajoutez ceci
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello Worlddddd!');
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'test' && password === 'test') {
    console.log('ok');
    res.status(200).json({ status: 'success', message: 'Login successful' });
  } else {
    console.log('ko')
    res.status(401).json({ status: 'error', message: 'Invalid username/password' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

