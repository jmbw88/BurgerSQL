var express = require("express");

var router = express.Router();

var db = require("../models");

var connection = require("../config/connection.js");

router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
    res.render("index", {burger: dbBurger});
    });
  });

router.post("/", function(req, res) {
   db.Burger.create({
      burger_name: req.body.burger_name,
    }).then(function(dbBurger) {
    console.log(dbBurger);
        res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

   db.Burger.update({
      devoured: req.body.devoured
    },
    {
      where:{
        id:req.params.id}
      }).then(function(dbBurger) {
        res.redirect("/");
    });
  });

module.exports = router;