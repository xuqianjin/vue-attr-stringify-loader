const $ = require("gogocode");
const loaderUtils = require("loader-utils");

module.exports = function (input) {
  const options = loaderUtils.getOptions(this);

  if (!options || !options.attr) {
    return input;
  }

  const ast = $(input, { parseOptions: { language: "vue" } }).find(
    "<template></template>"
  );

  options.attr.forEach((attr) => {
    ast.replace(
      `<$_$1 ${attr}="$_$2" $$$1>$$$2</$_$1>`,
      `<$_$1 ${attr}="JSON.stringify($_$2)" $$$1>$$$2</$_$1>`
    );
  });

  return ast.root().generate();
};
