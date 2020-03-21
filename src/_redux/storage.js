import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "../middleware";
import SidebarMenu from "../_reducers/setting";

const rootReducers = combineReducers({ SidebarMenu });
const store = createStore(rootReducers, applyMiddleware(promise, logger));
export default store;
