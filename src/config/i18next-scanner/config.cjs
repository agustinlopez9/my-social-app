const { customTransform } = require("./customTransform.cjs");
const baseOptions = require("./baseOptions.cjs");

const options = Object.assign(baseOptions, {
  defaultNs: "translation",
  lngs: ["en", "es"],
  ns: ["translation"]
});

module.exports = {
  input: ["src/**/*.{ts,tsx}"],
  options,
  transform: customTransform
};
