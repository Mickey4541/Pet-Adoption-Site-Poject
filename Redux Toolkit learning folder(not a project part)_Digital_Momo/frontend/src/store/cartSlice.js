// import {createSlice} from '@reduxjs/toolkit'
// import { APIAuthenticated } from '../http'


// const STATUSES = Object.freeze({
//     SUCCESS : 'success',
//     ERROR : 'error',
//     LOADING : 'loading'
// })





// const cartSlice = createSlice({
//     name : 'cart',
//     initialState : {
//        items : [],
//        status : STATUSES.SUCCESS,
       
//     },
//     reducers : {
//         setItem(state,action){
//             state.items = action.payload
//         },
//         setStatus(state,action){
//             state.status = action.payload
//         },
//         deleteItem(state,action){
//             const index = state.items.findIndex(item=>item._id === action.payload.cartId)
//             state.items.splice(index,1)
//         },
//         updateItem(state,action){
//             const index = state.items.findIndex(item=>item.product._id === action.payload.productId)
//             if(index !== -1){
//                 state.items[index].quantity = action.payload.quantity
//             }
//         }
//     }
// })

// export const {setItem,setStatus,deleteItem,updateItem} = cartSlice.actions
// export default cartSlice.reducer


// export function addToCart(productId){
//     return async function addToCartThunk(dispatch){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const response = await APIAuthenticated.post(`/cart/${productId}`)
//             dispatch(setItem(response.data.data))
//             dispatch(setStatus(STATUSES.SUCCESS))

//         } catch (error) {
//         dispatch(setStatus(STATUSES.ERROR))
            
//         }
//     }
// }

// export function fetchCartItems(){
//     return async function fetchCartItems(dispatch){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const response = await APIAuthenticated.get("/cart")
//             dispatch(setItem(response.data.data))
//             dispatch(setStatus(STATUSES.SUCCESS))
//         } catch (error) {
//         dispatch(setStatus(STATUSES.ERROR))
            
//         }
//     }
// }

// export function deleteCartItem(cartId){
//     return async function deleteCartItem(dispatch){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const response = await APIAuthenticated.delete(`/cart/${cartId}`)
//             dispatch(deleteItem({cartId}))
//         } catch (error) {
//         dispatch(setStatus(STATUSES.ERROR))
            
//         }
//     }
// }

// export function updateCartItem(productId,quantity){
//     return async function updateCartItem(dispatch){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const response = await APIAuthenticated.patch(`/cart/${productId}`,{quantity})
//             dispatch(updateItem({productId,quantity}))
//             dispatch(setStatus(STATUSES.SUCCESS))
//         } catch (error) {
//         dispatch(setStatus(STATUSES.ERROR))
            
//         }
//     }
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { createSlice } from "@reduxjs/toolkit";

const STATUSES = {
    SUCCESS : 'success',
    ERROR : 'error',
    LOADING : 'loading'
}
const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        data: [],
        status : STATUSES.LOADING
    },
    reducers: {
        setProduct(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
})
export const {setProduct, setStatus} = cartSlice.actions

export default cartSlice.reducer





//making a async thunk(aahile redux toolkit createAsyncThunk use na garera hamile aafnai function banaudai xam). Yo function ley aarko function return garxa.:::::::::
export function fetchProducts(){
    return async function fetchProductsThunk(dispatch){ //return vako function maa outer function ko j name xa tei name paxi Thunk jodni is a convention to make a thunk. Ani this return function ley dispatch vanni kura ra getState aai rako hunxa.

        //initially status is loading
        dispatch(setStatus(STATUSES.LOADING))
      try {

          //aba yaha async kaam haru garna milyo.
          const response = await axios.get('http://localhost:3000/api/products')
          //Note that: dispatch maa kahile pani reducer invoke garidaina. jahile pani action invoke garinxa. ra hamile yaha gareko setProduct chai action ho.
          dispatch(setProduct(response.data.data))//setProduct vanni action trigger gareko ra response.data.data vaneko payload vayo. yaha bata setProduct maa response.data.data vanni payload send garim ra tyo mathi ko reducer setProduct maa action maa gariraako hunxa. Tyo action.payload ley aba yaha bata response.data.data maa pathako data haru state.data maa set gardinxa means initialState ko data maa set gardinxa.
          console.log(response);
          //jaba data aai sakxa, status success vayo
          dispatch(setStatus.SUCCESS)
          
      }catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
        
      }
    }
}
//aba yo function maa products ko api hit garim. aba tyo aako products haru kun page maa dekhauni ho tyo pae maa gayera yo fetchProducts vanni function lai trigger garnu parni hunxa. in our case components/products.jsx file maa garnu paryo.


//yo garsakepaxi aba hamro backend ko data chai initial state ko data maa baseko  xa. aba aru jun sukai page maa tyo data dekhauna paryo vani state bata/store bata dekhauna milyo.

// aba if hamilai state bata kei data nikalna paryo vani::::
// - jaba state bata kei kura modify, trigger or changes garnu paryo vani usedispatch()

// - Raa jaba kei kura nikalna parni hunxa herna parni hunxa taba useSelector use garxau.