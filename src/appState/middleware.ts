/* Core */
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
const logger = [
  createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => "#139BFE",
      prevState: () => "#1C5FAF",
      action: () => "#149945",
      nextState: () => "#A47104",
      error: () => "#ff0005",
    },
    predicate: () => typeof window !== "undefined",
  }),
];

const sagaMiddleware = createSagaMiddleware();

export { logger, sagaMiddleware };
