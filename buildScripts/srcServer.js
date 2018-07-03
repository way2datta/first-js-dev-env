import express from 'express';
import { join } from 'path';
import open from 'open';

const port = 3001;
const app = express();

app.get('/', function(request, response) {
  response.sendFile(join(__dirname, '../src/index.html'));
});

app.listen(port, function(error) {
  if(error) {
    console.log(error);
  } else {
    open('http://localhost:'+port);
  }
});
