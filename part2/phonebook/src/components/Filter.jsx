const Filter = ({ searchTerm, handleSearchTermChange }) => (
  <>
    filter shown with:{' '}
    <input value={searchTerm} onChange={handleSearchTermChange} />
  </>
)

export default Filter
