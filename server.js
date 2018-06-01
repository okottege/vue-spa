const express = require('express');
const fs = require('fs');

const path = require('path');

const app = express();

const isProd = typeof process.env.NODE_ENV !== 'undefined' && (process.env.NODE_ENV === 'production');

const indexHTML = (() => (
  fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
))();

const port = process.env.PORT || 3001;

if (isProd) {
  app.use('/', express.static(path.resolve(__dirname, './dist')));
} else {
  app.use('/dist', express.static(path.resolve(__dirname, './dist')));
}

if (!isProd) {
  require('./build/dev-server')(app);
}

app.get('*', (req, res) => {
  res.write(indexHTML);
  res.end();
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
