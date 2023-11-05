import { createSlice } from '@reduxjs/toolkit'

const initialState = { text: '' }

const notificationReducer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    flashNotification(state, action) {
      state.text = action.payload.text
    },
    hideNotification(state) {
      state.text = ''
    },
  },
})

export const { flashNotification, hideNotification } =
  notificationReducer.actions
export default notificationReducer.reducer
