import { configureStore } from "@reduxjs/toolkit";
import bagSlicer from "./bagSlicer";

export const store =configureStore({
    reducer:{
        myBag:bagSlicer
    }
})