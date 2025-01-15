// import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "./productSlice";
// import cartSlice from "./cartSlice";
// import authSlice from "./authSlice";



// const store = configureStore({
//     reducer : {
//         product : productSlice,
//         cart : cartSlice,
//         user : authSlice
//     }
// })

// export default store


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";



const store = configureStore({
    reducer : {
        product: productSlice,
        cart : cartSlice
    }
})
export default store