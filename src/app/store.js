import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/couterSlice";

const rootReducer = {
    counters: counterReducer,
};
const store = configureStore({
    reducer: rootReducer,
});

export default store;
