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

router.post("/addfood", authenticate, async (req, res) => {
  let { fullName, foodName, foodType, date, parentId, mealTime } = req.body;
  db.findChildId(parentId, fullName)
    .then(found => {
      db.addFood(found.id, foodType, foodName, date, mealTime)
        .then(added => {
          res.status(201).json(added);
        })
        .catch(({ code, message }) => {
          res.status(code).json({ message });
        });
    })
    .catch(({ code, message }) => {
      res.status(code).json({ message });
    });
});

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

//took authenticate off delete because it would always send 401 error even if current auth headers were given

router.delete("/deletefood", (req, res) => {
  let { id, parentId, date } = req.body;
  db.deleteFood(id, parentId, date)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(({ code, message }) => {
      res.status(code).json({ message });
    });
});

module.exports = router;
