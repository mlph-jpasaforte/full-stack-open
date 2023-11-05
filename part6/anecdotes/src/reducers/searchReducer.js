import { createSlice } from '@reduxjs/toolkit'

const initialState = { searchQuery: '' }

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchQuery(state, action) {
      state.searchQuery = action.payload.searchQuery
    },
  },
})

export const { changeSearchQuery } = searchSlice.actions
export default searchSlice.reducer
