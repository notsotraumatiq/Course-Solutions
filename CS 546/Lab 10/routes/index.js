const path = require("path");
const routes = require("./users_Routes")

const constructorMethod = app => {
  app.use("/",routes)
};


module.exports = constructorMethod;
