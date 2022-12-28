const express = require("express");
const { handleErrors } = require("./helpers/error");
const { sequelize } = require("./models");
const v1 = require("./routers/v1");

const app = express();
app.use(express.json());

// Sync cái model sequelize với db
sequelize.sync({ alter: true });

const port = 4000;
app.use("/api/v1", v1);

// middleware error
app.use(handleErrors);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
