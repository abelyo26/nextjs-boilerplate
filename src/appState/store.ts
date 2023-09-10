import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector,
  useDispatch,
  type TypedUseSelectorHook,
} from "react-redux";
import reducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { logger, sagaMiddleware } from "./middleware";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware().concat(sagaMiddleware);

    if (process.env.NODE_ENV !== "production") {
      middlewares.push(...logger);
    }

    return middlewares;
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
/* export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector; */

export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;

export type ReduxState = ReturnType<typeof store.getState>;
