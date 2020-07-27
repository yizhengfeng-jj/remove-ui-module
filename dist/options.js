"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schemaOptions = {
  type: "object",
  properties: {
    moduleName: {
      type: "string"
    },
    diretiveRule: {
      type: "object"
    }
  },
  additionalProperties: false
};
var _default = schemaOptions;
exports.default = _default;