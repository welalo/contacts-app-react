import './SearchBar.css'

const SearchBar = ({valueSearch, setValueSearch}) => {

  return (
    <div>
      <input type="text" value={valueSearch} placeholder='buscar' onChange={ (event) => setValueSearch(event.target.value)}/>
    </div>
  );
}

export default SearchBar;

