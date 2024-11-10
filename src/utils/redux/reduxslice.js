import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userid: null,
    role: null
}

const reduxslice = createSlice({
    name:'reduxslice',
    initialState,//it is called the state
    reducers:{
        setuser:(state, action) =>{
            state.userid = action.payload.id;
            state.role = action.payload.role;
        },
        deleteuser:(state) =>{
            state.userid = null;
            state.role = null;
        }
    }

})

export const {setuser, deleteuser} = reduxslice.actions;
export default reduxslice;