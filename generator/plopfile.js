const slice = require("./generators/slice");
const config = (plop) => {
  plop.setGenerator("slice", slice);
};

module.exports = config;
