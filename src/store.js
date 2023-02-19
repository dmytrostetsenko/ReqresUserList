import { applyMiddleware, legacy_createStore as createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { userReduser } from "./redusers/user.reduser";
import { loginReduser } from "./redusers/login.reduser";

const rootReduser = combineReducers({
    userReduser,
    loginReduser
})
export const store = createStore(rootReduser, applyMiddleware(logger, thunk));