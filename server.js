const express = require('express');
const fs = require('fs');

const path = require('path');

const app = express();

const indexHTML = (() => (
  fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
))();

const port = process.env.PORT || 3001;

app.use('/dist', express.static(path.resolve(__dirname, './dist')));

require('./build/dev-server')(app);

app.get('*', (req, res) => {
  res.write(indexHTML);
  res.end();
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
