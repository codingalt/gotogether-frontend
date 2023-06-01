import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    phone: '',
    userId: '',
    token: '',
    isDriver: null,
    profileImg: '',
    totalRating: 0,
    totalReviewsGiven: 0
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
      },

      setProfileData: (state,action) =>{
        state.isDriver = action.payload.isDriver;
        state.phone = action.payload.phone;
        state.profileImg = action.payload.profileImg;
        state.rating = action.payload.rating;
        state.totalRating = action.payload.totalRating;
        state.totalReviewsGiven = action.payload.totalReviewsGiven;
      }
    
    },
  })

  export const {setPhoneNumber, setUserData,setProfileData} = userSlice.actions;
  export default userSlice.reducer;