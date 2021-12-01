import React, {useState, useEffect} from 'react';

function Search(props) {
  const {search: propsSearch, onChangeSearch } = props;

  const [search, setSearch] = useState('');

  const handleKey = (evt) => {
    if (evt.key === 'Enter') {
      onChangeSearch(search);
    }
  };

  useEffect(() => {
    setSearch(propsSearch);

  }, [propsSearch])

  return (
    <div className="input-field">
      <input
        className="validate"
        value={search}
        type="search"
        placeholder="search"
        onChange={(evt) => setSearch(evt.target.value)}
        onKeyDown={(evt) => handleKey(evt)}
      />
      <button className="btn search-btn" onClick={() => onChangeSearch(search)}>
        Search
      </button>
    </div>
  );
}

export default Search ;
