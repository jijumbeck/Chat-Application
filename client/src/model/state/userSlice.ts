import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Chat, User } from '../entities'


const initialState: User = {
    id: '',
    name: '',
}

export const chatSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setName: (state, action) => {
        state.name = action.payload;
    }
  },
})

export const { setId, setName } = chatSlice.actions

export default chatSlice.reducer