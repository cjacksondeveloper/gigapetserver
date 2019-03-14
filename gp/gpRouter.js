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
//   let { fullName, foodName, foodType, date, parentId, mealTime } = req.body;
//   food = { foodName };
//   db.findFood(food)
//     .then(found => {
//       if (found.length) {
//         return res.status(405).json({ error: "Title of Entry must be unique" });
//       } else {
//         db.addFood(foodName)
//           .then(res => {
//             db.findChildId(parentId, fullName).then((res2) => {
//               db.addFood(res.id, res2.id, foodType, date, mealTime)
//                 .then(add => {
//                   res.status(201).json(add);
//                 })
//                 .catch(({ code, message }) => {
//                   return res.status(code).json({ message });
//                 });
//             });
//           })
//           .catch(({ code, message }) => {
//             return res.status(code).json({ message });
//           });
//       }
//     })
//     .catch(({ code, message }) => {
//       return res.status(code).json({ message });
//     });
// });

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

module.exports = router;
