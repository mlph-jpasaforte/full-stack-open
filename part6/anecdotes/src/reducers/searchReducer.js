const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_QUERY':
      return action.payload.searchQuery
    default:
      return state
  }
}

export const changeSearchQuery = (searchQuery) => ({
  type: 'CHANGE_SEARCH_QUERY',
  payload: {
    searchQuery,
  },
})

export default searchReducer
