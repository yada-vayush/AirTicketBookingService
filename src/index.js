const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const db = require("./models/index");
dotenv.config();

const app = express();

const setupAndStartServer = () => {
  app.use(bodyParser.json());

  app.use("/api", ApiRoutes);
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};
setupAndStartServer();
