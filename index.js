const express = require("express");
const app = express();
const port = process.env.PGPORT || 3002;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

require("dotenv").config();
const cors = require("cors");
app.use(cors);

const countriesRouter = require("./routers/countriesRouter");

app.use("/api/countries", countriesRouter);

app.listen(port, console.log(`Server is listening on port ${port}.`));
