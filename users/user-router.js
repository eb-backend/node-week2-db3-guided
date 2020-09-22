const express = require("express");

const db = require("../data/db-config.js");
const userModel = require("./user-model")
const router = express.Router();

router.get("/", (req, res) => {
  db("users")
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get users" });
    });
});


router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("users")
    .where({ id })
    .then(users => {
      const user = users[0];

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Could not find user with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get user" });
    });
});

router.post("/", (req, res) => {
  const userData = req.body;

  db("users")
    .insert(userData, "id")
    .then(ids => {
      res.status(201).json({ created: ids[0] });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new user" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db("users")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update user" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("users")
    .where({ id })
    .del()
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete user" });
    });
});


// create an endpoint for listing a user's posts
// add validateUserId() if there's middleware
router.get("/users/:id/posts", async(req, res, next)=>{
  try{
     const posts = await userModel.findPostsByUserID(req.params.id)
    //= await db("posts as p")
    // //maybe add a user name from the user_id since it'll be more helpful
    // .innerJoin("users as u", "u.id", "p.user_id")
    // .where("p.user_id", req.params.id)
    // // .where({"user_id": req.params.id}) //if you have multiple properties 
    
    // //? if we don't want the user_id added in there 
    // .select("p.id", "p.contents", "u.username")
res.json(posts)
  }catch(err){
    next(err)
  }
}
)

module.exports = router;
