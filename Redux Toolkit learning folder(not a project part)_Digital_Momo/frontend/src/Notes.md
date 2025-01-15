# What is Redux Toolkit?
 - It is a state management. It is also a global variable or global state.
- It is a predictable state container for js apps.

- Kei kura hold garni place vanau na.

- Zustand and context api are other state management tools.

- Redux toolkit is best among all because it is scalable.


# problem in Redux:
- configuration dherai garnu parni

- We have to make actions and reducers in different files and we have to define actions and reducers by ourselves and then finally we have to integrate them all.

- Now all these problem haru redux toolkit ley hataidiyo.

# Getting started with Redux TOolkit:
> Concepts and Terminologies to know about redux toolkit:

# Store:
- Store is like a house. There are lot of rooms in a house. Collection of rooms(Slice). Room 1 is one slice, Room 2 is another slice. It is a collection of slice.


# Slice:
- Slice is like a container. Like a room in a house. There is no store without slice. 

- We can give a different name like toyslice to one slice to store a data of toys.

- user ko data rakhna ko lagi userslice.

# Actions:
- Example: Kosaile hamilai aauta pizza ko slice diyo ra tyo slice of pizza lai store maa lagera haldey/add gardey vanyo. So, this is a Action. Action is k garney vayo. "What to do ? k garney"

# Reducer : 
- Reducer is a kasari garni vayo. like tyo slice of pizza lai store maa kasari halney vayo. "How to do ? kasari garney"

- Redux toolkit ley, hamile j reducer banauxam, tei reducer ko name ko action automatically create gardinxa.

- Redux Toolkit ko actioncreater vanni function hunxa tyo chai bhitra bhitra chaliraako hunxa jasle reducer j banako xam haimle, tei name ko action automatically create gardinxa.

- Reducer aauta pure function ho. hamile yes bhitra any asynchronus kaam haru like hitting api, fetching data jastaa kaam garna mildaina. jun kaam garna time lagxa testo kaam garna mildaina.

# Dispatch vankeo k ho ?
- CUD (Create, Update and Delete ) vaneko nai Dispatch ho. kei kura modify garnu paryo, halnu paryo yaa delete garnu paryo vani dispatch use garinxa.

# React-Redux :
- Redux and React are different. React ko code ra redux ko code hamile different different place/folder maa lekhako hunxau. So, we have to connect react and redux. For this, we need react-redux.


# installation:
- npm install @reduxjs/toolkit
- npm install react-redux

# Start:
- first make a store folder inside src folder and make productSlice.js file. The wrote code inside this.(See productSlice.js file).
- Then make a store.js file inside store and write code.Like we have to include all the slices inside the store.js file.

- Then make a cartSlice.js file and write the same flow as inside productslice.js file and inport in into the store.js file.

- Now we have to tell the react to use our store. For this we need react-redux package.


- Now inside or main file app.jsx, we have to import our store in app.jsx.

- Provider vanni tag ley aba sabai code lai wrap garnu parxa.
like:
```App.jsx

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./globals/components/navbar/Navbar";
import Footer from "./globals/components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Cart from "./pages/cart/Cart";
import { Provider } from "react-redux";
import store from "./store/store";


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

```
# Thunks:
- Thunk is like a middleware.
- We can do any asychronous works like fetching data, setInterval or setTimeout.
- Hamile frontend bata api hit hanera kei aako data haru ta state maa rakhna parni hunxa. Reducer maa async work garna paidaina vani tyo async kaam haru kasari garni? 

-Tesko lagi redux toolkit ley hamilai aauta function diyako hunxa ra tyo function vaneko nai Thunk ho. It is a middleware ani tei middleware maa use huni function ho: 

- createAsyncThunk() vanni function ho ra yes funciton bhitra chai all async kaam haru garna milyo. like axios, setInterval, setTimeout etc.

> Tips:
- createAsyncThunk() function chai redux toolkit ley nai diyako ho. Aba hamile yei function pani use garna paiyo natra aafnai function banayera use garxu vanna pani milyo.

- It is such a function that returns another function inside it.
> Like:
```js

```