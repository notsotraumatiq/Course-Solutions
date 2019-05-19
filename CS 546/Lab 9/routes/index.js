//const primeRoutes = require("./calculator");
const path = require("path");

const constructorMethod = app => {
  app.use("/", (req,res) =>{
    res.render("./static/primeCheck");
  });

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
