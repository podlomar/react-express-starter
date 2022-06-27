import express from 'express';

const port = process.env.PORT ?? 2000;
const server = express();

server.use(express.static('dist'));

server.get('*', (req, resp) => {
  resp.sendFile('index.html', { root: 'dist' });
});

server.listen(port, () => {
  console.info(`listening at ${port}`);
});
