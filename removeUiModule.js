// loader 就是个模块函数
import { getOptions } from "loader-utils";
import validateOptions from "schema-utils";

const schemaOptions = {
  type: "object",
  properties: {
    moduleName: {
      type: "string",
    },
    diretiveRule: {
      type: "object",
    },
  },
  additionalProperties: false,
};

export default function (source) {
  const options = getOptions(this);
  const { moduleName = "", diretiveRule } = options || {};

  validateOptions(schemaOptions, options);

  let sourceArr = source.split(" ");

  sourceArr = sourceArr.map((simple) => {
    // 在用,号隔开，防止并行的样式
    let simpleArr = simple.split(",");

    simpleArr = simpleArr.map((item) => {
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
