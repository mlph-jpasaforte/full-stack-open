import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    changeSearchQuery(state, action) {
      return action.payload
    },
  },
})

export const { changeSearchQuery } = searchSlice.actions
export default searchSlice.reducer
