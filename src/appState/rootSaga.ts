import { all } from "redux-saga/effects";
// import sagas here

type SagaFunction = Generator<never, void, unknown>;

const sagas: SagaFunction[] = [
  // add here
];
function* rootSaga() {
  yield all([...sagas]);
}

export default rootSaga;
