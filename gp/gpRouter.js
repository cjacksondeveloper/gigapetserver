const router = require("express").Router();

const db = require("./gpModule.js");
const { authenticate } = require("../auth/authMW.js");

router.post("/", authenticate, (req, res) => {
  let { parentId, date } = req.body
    db.getFoods(parentId, date).then(users => {
      res.send(users);
    })
    .catch(err => {console.log(err)})
  });

// router.post("/week", authenticate, (req, res) => {

// }) 
module.exports = router;