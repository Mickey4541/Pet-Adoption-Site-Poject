// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
// import axios from 'axios'
// import { STATUSES } from './statuses'
// import { API } from '../http'




// const productSlice = createSlice({
//     name : 'product',
//     initialState : {
//        data : [],
//        status : STATUSES.SUCCESS,
       
//     },
//     reducers : {
//         setProduct(state,action){
         
//             state.data = action.payload
//         },
//         setStatus(state,action){
//             state.status = action.payload
//         }
//     },

//     //hamile manually thunk banayera gardaa status aafai banau parthyo tara createasyncthunk use garim vani aauta extrareducer vanni diyako hunxa ra tesle builder vanni accept garirako xa. ra builder.addcase garera states haru define gardini. 
//     extraReducers : (builder)=>{
//         builder.addCase(fetchProducts.pending,(state)=>{
//             state.status = STATUSES.LOADING
//         })
//         .addCase(fetchProducts.fulfilled,(state,action)=>{
//             state.data = action.payload
//             state.status = STATUSES.SUCCESS
//         })
//         .addCase(fetchProducts.rejected,(state)=>{
//             state.status = STATUSES.ERROR
//         })
//     }
// })

// export const {setProduct,setStatus} = productSlice.actions
// export default productSlice.reducer

// export const fetchProducts = createAsyncThunk('products/fetch',async()=>{//products/fetch vaneko prefix liyeko ho. Slice ko name ra k garni ho fetch garni ho.
//     const response = await API.get('products')
//     const data = response.data.data 
//     return data 
// })




//////////////pahile nai comment thiyo yo hai///////////////////
// export function fetchProducts(){
//     return async function fetchProductsThunk(dispatch){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
            
//         const response = await axios.get('http://localhost:3000/api/products')
//         dispatch(setProduct(response.data.data))
//         dispatch(setStatus(STATUSES.SUCCESS))
      
//         } catch (error) {
//             dispatch(setStatus(STATUSES.ERROR))
            
//         }
//     }
// }
//////////////pahile nai comment thiyo yo hai///////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// backend bata product details ko data fetch garnu paryo first maa ta..

import {createSlice} from '@reduxjs/toolkit'

//createSlice is a function which was given by redux toolkit. Slice vaneko aauta ghar ko room vayo. this function makes a room. Aba tyo room ko name k rakhni, reducer haru kk banauni tyo sabai pass garnu parni hunxa. CreateSlice bhitra tyo sabai details object maa as a argument pass garnu paryo.

// name vaneko slice ko name.


// initialState vaneko room/Slice banaudaa tyo room maa initially kk value rakhni vaneko.



//enum variables:: js is mutable. So, this approach is not good. So, we have to freeze({jati status xan object maa lekhni like success, error and loading})
const STATUSES = Object.freeze({
    SUCCESS : 'success',
    ERROR : 'error',
    LOADING: 'loading'
})


const productSlice = createSlice({
    name: 'product',
    initialState : {
        // hello : "Rajan Bhandari" // j ni rakhna paiyo
        data : [], //by default empty array banako initially
        //status : "Loading" //real world maa loading, success ra error hunxa. Yesari directly loading rakhna paiyo but better to make a enum jalse enum maa vako value bahek aru kei halna didaina.So, make one variable at top named Status.
        status : STATUSES.LOADING
    },
    //now setup the reducers: kehi kura kasari garni.(Slice lai store maa kasari halni, kathmandu kasari jani??)

    // reducer is just a function,ra yo function maa 2 otaa parameter aai raako hunxa. [State and Action]

    reducers: {
        setProduct(state,action){ //hamile aahile productSlice banaudai xam, yo slice lai aba store/room maa lagera ta halnu parlaa. tesko lagi reducer xa(kasari halni vanni kaam garna ko lagi). So, aba yo product ko slice lai lagera store maa haldey vannko ko lagi aauta function banako . ani setProduct maa set vanni chai convention ho function lekhdaa.Ani state ra action ta sadhai parameter maa aai raako hunxa.
        
        // state vaneko simply mathi banako initial state ho.

        //aba state.data = ['Rajan Bhandari'] garey vani mathi ko initialState maa banako khali data maa Rajan Bhandari basni vayo, It means reducer ley state.data maa Rajan Bhandari Rakhera tyo khali data maa rakhidiyo. It means Rajan Bhandari vaneko backend bata aako data manum ani tyo data lai ProductSlice/productRoom maa lagera rakhidiyo.


        //action => What to do?
        //reducer => How to do?

        //aba action vanni object maa payload vanni key hunxa, ho yo payload vanni key maa backend bata pass gareko data aauxa. ani action.payload ley tyo aako data lai state.data maa handinxa. means aba tyo data initialState ko data maa gayera basxa.
        state.data = action.payload

        },
        setStatus(state, action){
            state.status = action.payload //utaa backend bata if hamile "SUCCESS" pathiyim vani tyo aaha payload vanni key maa aauxa ra yo action.payload maa aako "SUCCESS" lai state.status maa haldinxa. means initialstate ko status maa gayera banxa. initially loading thiyo aba "SUCCESS" huni vayo.
        }
        
    }
})

//now we have to make a action. 
//Action vanni chai redux maa manually banauna parthyo, tara redux toolkit maa chai manually banauna pardaina.
//Redux toolkit ley action chai aautomatically create gardinxa. Redux toolkit ko bhitra bhitra actionCreater vanni function chalirrako hunxa, tesaile nai banaidinxa.

//productSlice.action ley aba sidai action return gardinxa. Hamile j name maa reducer banako xam tei name maa action return garxa.

//finally action lai ra reducer lai export garnu parxa. 
export const {setProduct, setStatus} = productSlice.actions
export default productSlice.reducer //mathi reducers xa aaha reducer matra xa. "s" xaina aaha. yestai lekhnu parxa balla export garxa.


// "s" kina na lekhako export garda?
// => reducers vaneko all reducers vayo ani export gardaa reducer garxam kinaki reducer means all reducer inside a slice.
// => reducers => denote all reducers like set product, setStatus

// => reducer means all reducers.



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

// aba if hamilai state bata kei data nikalna paryo vani::::product.jsx page maa in our case:

// - jaba state bata kei kura modify, trigger or changes garnu paryo vani usedispatch() hook. Delete modify create garnu parey useDispatch.

// - Raa jaba kei kura nikalna parni hunxa herna parni hunxa taba useSelector hook use garxau. Basically data read garnu parey.

//aba product.jsx maa const data = useSelector bata suru.
