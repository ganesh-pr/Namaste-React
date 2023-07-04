import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/*----------------------------------------------------------------

Create a store
    configureStore() - RTK

Provide the store to the application 
    <Provider store={storeName} /> - import from react-redux

Slice
    - createSlice({
        name: '',
        initialState:
        reducers: {
            addItem: (state, action) => {state = action.payload}
        }
    })

export const {addItem, removeItem} = cartSlice.actions
export default cartSlice.reducer

Put that Slice into the store
    - reducer: {
        cart: cartSlice,
        user: userSlice
      } 

Update the slice 
    import useDispatch to return dispatch function - react-redux
    dispatch an action with the payload.

    const dispatch = useDispatch()
    dispatch(addItem("Grapes"))

*/
