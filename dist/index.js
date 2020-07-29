"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeUiHashLoader;

var _loaderUtils = require("loader-utils");

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

var _options = _interopRequireDefault(require("./options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// loader 就是个模块函数
function removeUiHashLoader(source) {
  const options = (0, _loaderUtils.getOptions)(this);
  const {
    moduleName = "",
    diretiveRule
  } = options || {};
  (0, _schemaUtils.default)(_options.default, options);
  let sourceArr = source.split(" ");
  sourceArr = sourceArr.map(simple => {
    // 在用,号隔开，防止并行的样式
    let simpleArr = simple.split(",");
    simpleArr = simpleArr.map(item => {
      if (item.includes(moduleName)) {
        const rule = new RegExp(diretiveRule, "g");
        item = item.replace(diretiveRule ? rule : /_.{8}/g, "");
      }

      return item;
    });
    return simpleArr.join(",");
  });
  this.callback(null, sourceArr.join(" "));
}