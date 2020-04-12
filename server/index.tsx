import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './../client';

const distPath = path.join(__dirname, './../');
const port = 9000;
const app = express();

app.get('*', async (req, res) => {
  try {
    const body = renderToString(<App />);

    res.set('content-type', 'text/html');
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>React SSR</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
      </html>
    `);
  } catch(error) {
    throw new Error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
