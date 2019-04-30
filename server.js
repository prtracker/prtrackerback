const express  = require('express');
const bodyParser = require('body-parser');
const getList = require('./prtracker.controller');

const port = process.env.PORT || 5010;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/tracker/list', getList);

// set up 404 response
app.use((req, res) => {
    errors.sendError(res)(new errors.NotFoundError(`pr tracker running, endpoint '${req.path}' not found`));
  });
  
  app.listen(port, () => {
    console.log(`PR Tracker listening on port: ${port}`);
  });
  
