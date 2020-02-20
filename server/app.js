import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import weatherRoute from "./routes/weatherRoute";
import express from "express";
import cors from "cors";

/**
 * Start the app
 * @module init Starts Express, Middleware, Error handler and Routes
 * @returns NodeJs + Express App Object
 */

class index {
  constructor() {
    this.init();
  }

  init() {
    const app = express();
    app.use(cors());
    app.options("*", cors());

    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });
    const weather = new weatherRoute();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set("port", process.env.PORT || 3001);

    app.use("/weather", weather);

    app.get("/", (req, res, next) => {
      res.status(200).json({ message: "Homer API Alive", data: "{}" });
    });

    app.use((error, req, res, next) => {
      const status = error.statusCode || 500;
      const message = error.message;
      const data = error.data;
      res.status(status).json({ message: message, data: data });
    });

    app.listen(app.get("port"), function() {
      console.log("Backend is ready and listening on port: " + app.get("port"));
    });
  }
}

new index();
