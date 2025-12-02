module.exports = {
  debug: true,
  defaultValue: "__NOT_TRANSLATED__",
  func: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    list: ["i18next.t", "i18n.t", "t"],
  },
  resource: {
    loadPath: "public/locales/{{lng}}/{{ns}}.json",
    savePath: "public/locales/{{lng}}/{{ns}}.json",
  },
  trans: {
    fallbackKey: (ns, value) => {
      return value;
    },
  },
};
