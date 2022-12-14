const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api')
const app = express();
const PORT = 1234;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client')));


app.use('/api', apiRouter);
//
app.post('/', (req, res) => {
    res.status(200).send("hello");
})



// Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });


module.exports = app;
