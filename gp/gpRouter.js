const router = require("express").Router();

const db = require("./gpModule.js");
const { authenticate } = require("../auth/authMW.js");

router.post("/getfood", authenticate, (req, res) => {
  let { parentId, date } = req.body;
  db.getFoods(parentId, date)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/childnames", authenticate, (req, res) => {
  db.getChildren(req.body.parentId)
    .then(found => {
      if (found.length) {
        res.status(200).json(found);
      } else {
        res.send({ fullName: "No children found for parent" });
      }
    })
    .catch(({ code, message }) => {
      res.status(code).json({ message });
    });
});

// router.post("/week/:date", authenticate, (req, res) => {

// })

// router.post("/month/:date", authenticate, (req,res) => {

// })

// router.post("/addfood", authenticate, (req, res) => {
//   let { fullName, foodName, foodType, date, parentId, mealTime}
// })

router.post("/addchild", authenticate, (req, res) => {
  let { parentId, fullName } = req.body;
  addition = { parentId, fullName };
  db.addChild(addition)
    .then(add => {
      res.status(201).json(add);
    })
    .catch(({ code, message }) => {
      res.status(code).json({ message });
    });
});

module.exports = router;
