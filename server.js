const express  = require('express');
const bodyParser = require('body-parser');
const getList = require('./prtracker.controller');
var cors = require('cors');

const port = process.env.PORT || 5010;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use('/tracker/list', getList);

// set up 404 response

app.use((req, res) => {
    res.send('test string');
  });
  
  app.listen(port, () => {
    console.log(`PR Tracker listening on port: ${port}`);
  });
  

