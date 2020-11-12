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

// +& INDEX ROUTE
router.get("/", auth, async (req, res) => {
  try {
    const fgms = await Fgm.find({ username: req.session.username });
    res.render("fgms/index.jsx", { fgms });
  } catch (err) {
    console.log(err);
  }
});

// +& New Route
router.get("/new", auth, async (req, res) => {
  try {
    res.render("fgms/new.jsx");
  } catch (error) {
    console.log(error);
  }
});

// +& Create Route
router.post("/", auth, async (req, res) => {
  try {
    req.body.username = req.session.username;
    const newFgm = await Fgm.create(req.body);
    res.redirect("/fgms/");
  } catch (error) {
    console.log(error);
  }
});

// +& Delete Route
router.delete("/:id", auth, async (req, res) => {
  try {
    await Fgm.findByIdAndDelete(req.params.id);
    res.redirect("/fgms/");
  } catch (error) {
    console.log(error);
  }
});

// +& Edit Route
router.get("/edit/:id", auth, async (req, res) => {
  try {
    const fgm = await Fgm.findById(req.params.id);
    res.render("fgms/edit.jsx", { fgm });
  } catch (error) {
    console.log(error);
  }
});

// +& Update Route
router.put("/edit/:id", auth, async (req, res) => {
  try {
    req.body.username = req.session.username;
    await Fgm.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/fgms/");
  } catch (error) {
    console.log(error);
  }
});

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS
router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
