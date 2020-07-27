"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _loaderUtils = require("loader-utils");

var _schemaUtils = _interopRequireDefault(require("schema-utils"));

var _options = _interopRequireDefault(require("./options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// loader 就是个模块函数
function _default(source) {
  var options = (0, _loaderUtils.getOptions)(this);

  var _ref = options || {},
      _ref$moduleName = _ref.moduleName,
      moduleName = _ref$moduleName === void 0 ? "" : _ref$moduleName,
      diretiveRule = _ref.diretiveRule;

  (0, _schemaUtils.default)(_options.default, options);
  var sourceArr = source.split(" ");
  sourceArr = sourceArr.map(function (simple) {
    // 在用,号隔开，防止并行的样式
    var simpleArr = simple.split(",");
    simpleArr = simpleArr.map(function (item) {
      if (item.includes(moduleName)) {
        var rule = new RegExp(diretiveRule, "g");
        item = item.replace(diretiveRule ? rule : /_.{8}/g, "");
      }

      return item;
    });
    return simpleArr.join(",");
  });
  this.callback(null, sourceArr.join(" "));
}