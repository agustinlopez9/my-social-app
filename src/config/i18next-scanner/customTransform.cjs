const fs = require("fs");
const chalk = require("chalk");

function customTransform(file, enc, done) {
  "use strict";
  const parser = this.parser;
  const content = fs.readFileSync(file.path, enc);
  let count = 0;

  parser.parseFuncFromString(content, { list: ["i18next._", "i18next.__"] }, (key, options) => {
    parser.set(
      key,
      Object.assign({}, options, {
        nsSeparator: false,
        keySeparator: false,
      }),
    );
    ++count;
  });

  if (count > 0) {
    console.log(
      `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`,
    );
  }

  done();
}

module.exports = { customTransform };
