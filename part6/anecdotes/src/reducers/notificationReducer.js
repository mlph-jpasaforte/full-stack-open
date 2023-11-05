import { createSlice } from '@reduxjs/toolkit'

const notificationReducer = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    flashNotification(state, action) {
      return action.payload
    },
    hideNotification(state) {
      return ''
    },
  },
})

export const { flashNotification, hideNotification } =
  notificationReducer.actions

export const showNotification = (text, milliseconds) => (dispatch) => {
  dispatch(flashNotification(text))

  setTimeout(() => {
    dispatch(hideNotification())
  }, milliseconds * 1000)
}

export default notificationReducer.reducer
