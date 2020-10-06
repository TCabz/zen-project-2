//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Fgm = require("../../models/fgms");

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// +& index route
router.get("/", auth, async (req, res) => {
  try {
    const fgms = await Fgm.find({ username: req.session.username });
    res.render("fgms/index.jsx", { fgms });
  } catch (err) {
    console.log(err);
  }
});

// +& new route
router.get("/new", auth, async (req, res) => {
  res.render("fgms/signup.jsx");
});

// +& create route
router.post("/", auth, async (req, res) => {
  req.body.username = req.session.username;
  const newFgm = await Fgm.create(req.body);
  res.redirect("/fgms/");
});

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
