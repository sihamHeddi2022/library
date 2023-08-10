import { createSlice } from '@reduxjs/toolkit';

const getToken= ()=>{
    const token = localStorage.getItem("token")
    if(token) return token
    return null
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState: getToken() ,
    reducers: {
            logout:(state)=>{
                state=null
                localStorage.removeItem("token")
                window.location.reload()
            },
            settoken: (state:any, action) => {
                state = action.payload.token    
                 localStorage.setItem("token",state)
    
    
            }
            
        }
    
}

);

// this is for dispatch
export const { logout,settoken } = tokenSlice.actions;

// this is for configureStore
export default tokenSlice.reducer;