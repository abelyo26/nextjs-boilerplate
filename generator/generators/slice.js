const slice = {
  description: "Add a redux toolkit slice",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
    },
    {
      type: "list",
      name: "createSaga",
      message: "Do you want sagas for asynchronous flows? (e.g. fetching data)",
      choices: ["yes", "no"],
    },
  ],
  actions: [
    {
      type: "add",
      path: "../src/appState/slices/{{camelCase name}}Slice/index.ts",
      templateFile: "./templates/index.hbs",
    },
    {
      type: "add",
      path: "../src/appState/slices/{{camelCase name}}Slice/selectors.ts",
      templateFile: "./templates/selectors.hbs",
    },
    {
      type: "add",
      path: "../src/appState/slices/{{camelCase name}}Slice/slice.ts",
      templateFile: "./templates/slice.hbs",
    },
    {
      type: "add",
      path: "../src/appState/slices/{{camelCase name}}Slice/types.ts",
      templateFile: "./templates/types.hbs",
    },
    {
      type: "add",
      path: "../src/appState/slices/{{camelCase name}}Slice/saga.ts",
      templateFile: "./templates/saga.hbs",
      skip: function (data) {
        return data.createSaga === "no";
      },
    },
    {
      type: "modify",
      path: "../src/appState/rootReducer.ts",
      pattern: /\/\/ import reducers here/g,
      template:
        '// import reducers here\nimport { {{camelCase name}}Reducer } from "./slices";',
    },
    {
      type: "modify",
      path: "../src/appState/rootReducer.ts",
      pattern: /\/\/ add reducers here/g,
      template: "{{camelCase name}}Reducer,\n   // add reducers here",
    },
    {
      type: "modify",
      path: "../src/appState/slices/index.ts",
      pattern: /\/\/ export all slices here/g,
      template:
        '// export all slices here \nexport * from "./{{camelCase name}}Slice";',
    },
    {
      type: "modify",
      path: "../src/appState/slices/{{camelCase name}}Slice/index.ts",
      pattern: /\/\/ export all here/g,
      template: '// export all here\nexport * from "./saga";',
      skip: function (data) {
        return data.createSaga === "no";
      },
    },
    {
      type: "modify",
      path: "../src/appState/rootSaga.ts",
      pattern: /\/\/ import sagas here/g,
      template:
        '// import sagas here\nimport { {{camelCase name}}Saga } from "./slices";',
      skip: function (data) {
        return data.createSaga === "no";
      },
    },
    {
      type: "modify",
      path: "../src/appState/rootSaga.ts",
      pattern: /\/\/ add here/g,
      template: "  {{camelCase name}}Saga(),\n  // add here",
      skip: function (data) {
        return data.createSaga === "no";
      },
    },
  ],
};

module.exports = slice;
