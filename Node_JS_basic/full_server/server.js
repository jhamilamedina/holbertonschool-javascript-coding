import app from './routes/index';

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

export default app;
