const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

const PATHS = {
  componentsPath: path.join(cwd, "src/components"),
  componentTplPath: path.join(
    cwd,
    "scripts/ComponentGenerator/Templates/Component.tsx.tpl"
  ),
  componentTestTplPath: path.join(
    cwd,
    "scripts/ComponentGenerator/Templates/Component.test.tsx.tpl"
  ),
  componentIndexTplPath: path.join(
    cwd,
    "scripts/ComponentGenerator/Templates/index.ts.tpl"
  ),
};
const REPLACE_PATTERN = "{componentName}";
const COMPONENT_PARTS = {
  Component: {
    path: "Component.tsx",
    tpl: fs.readFileSync(PATHS.componentTplPath).toString(),
    created: "",
  },
  Test: {
    path: "Component.test.tsx",
    tpl: fs.readFileSync(PATHS.componentTestTplPath).toString(),
    created: "",
  },
  Index: {
    path: "index.ts",
    tpl: fs.readFileSync(PATHS.componentIndexTplPath).toString(),
    created: "",
  },
};

const toCamelCase = (name) =>
  name
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return word.toUpperCase();
    })
    .replace(/\-|\_|\s+/g, "");

const createDirectory = (path, name) => {
  if (fs.existsSync(path)) {
    throw new Error(`Directory ${name} already exists in this location`);
  } else {
    fs.mkdirSync(path);
  }
};

const createComponent = () => {
  const name = process.argv.slice(2).join(" ");
  if (!name) {
    throw new Error("Provide name for the component");
  }
  const camelCaseName = toCamelCase(name.toLowerCase());
  const dirPath = `${PATHS.componentsPath}/${camelCaseName}`;
  createDirectory(dirPath, camelCaseName);

  Object.entries(COMPONENT_PARTS).map(([key, value]) => {
    const transformed = value.tpl
      ? value.tpl.split(REPLACE_PATTERN).join(camelCaseName)
      : "";
    const path = `${dirPath}/${value.path.replace("Component", camelCaseName)}`;
    fs.writeFileSync(path, transformed, "utf8");
  });
};

createComponent();
