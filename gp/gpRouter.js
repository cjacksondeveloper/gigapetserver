const router = require("express").Router();

const db = require("./gpModule.js");
const { authenticate } = require("../auth/AuthMW.js");

router.get("/", authenticate, (req, res) => {
    db.find().then(users => {
      res.json({ users, jwtObject: req.jwtObject });
    });
  });

module.exports = router;