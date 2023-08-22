const express = require('express');
const app = express();
const cors = require('cors');
const {
  logErrors,
  ormErrorHandler,
  errorHandler,
  boomErrorHadler,
} = require('./middlewares/error.handler');
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
const routerApi = require('./routes/index.js');
routerApi(app);

//middleware despues del routing
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHadler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port listening in port: ' + port);
});
