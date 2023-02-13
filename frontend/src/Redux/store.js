import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./AuthReducer/reducer";
import { quizReducer } from "./QuizReducer/reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({ AuthReducer, quizReducer });

export const store = createStore(rootReducer, enhancer);
