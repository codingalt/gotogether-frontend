import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    phone: '',
    userId: '',
    token: ''
  }

  export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setPhoneNumber: (state,action) => {
        state.phone = action.payload
      },

      setUserData: (state,action) =>{
        state.userId = action.payload.userId;
        state.token = action.payload.token;
      }
    
    },
  })

  export const {setPhoneNumber, setUserData} = userSlice.actions;
  export default userSlice.reducer;