import React, { useState, useCallback, useEffect, memo } from 'react';

const SearchFilterItem = memo((props) => {
  useEffect(()=>{
    console.log("childrender");
  })
  return  <ul>
  {props.data.map((item, index) => (
    <li key={index}  >{item} </li>
  ))}
</ul>
    
  
  
});


const SearchFilter = () => {
  const dataList = [
    'Arjun',
    'krishna',
    'kashyap',
    'raavaana',
    'geetha',
    'keerthi',
    'meghana',
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(dataList);
  const [notFoundMessage, setNotFoundMessage] = useState('');

  const handleSearch = useCallback(() => {
    const filtered = dataList.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length === 0) {
      setNotFoundMessage('No matching results found.');
    } else {
      setNotFoundMessage('');
    }

    setFilteredData(filtered);
  }, [searchTerm]);

  useEffect(() => {
    console.log("parentrender");
  });

  return (
    <div className="first">
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <SearchFilterItem data={filteredData}/>
     
      {notFoundMessage && <p>{notFoundMessage}</p>}
    </div>
  );
};

export default SearchFilter;
