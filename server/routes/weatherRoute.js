const express = require("express");
import { Router } from "express";
import weatherController from "../controllers/weatherController";

export default class weatherRoute {
  constructor() {
    this.router = Router();
    this.weatherController = new weatherController();
    this.router.get("/:country/:zipcode", (req, res) => {
      this.weatherController
        .weatherForecastHandler(req.params)
        .then(e => {
          res.json(e)
        });
    });
    return this.router;
  }
}
