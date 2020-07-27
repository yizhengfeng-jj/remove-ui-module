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

export default schemaOptions;
