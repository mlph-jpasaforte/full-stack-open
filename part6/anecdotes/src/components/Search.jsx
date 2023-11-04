import { useDispatch } from 'react-redux'
import { changeSearchQuery } from '../reducers/searchReducer'

const Search = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(changeSearchQuery(event.target.value))
  }

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      search <input onChange={handleChange} />
    </div>
  )
}

export default Search
