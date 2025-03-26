import { majitas } from '../assets/data/majitas';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); 

  const inputRef = useRef(null); 
  const location = useLocation();


  useEffect(() => {
      if (location.pathname === "/Search" && inputRef.current) {
          inputRef.current.focus(); 
      }
  }, [location.pathname]); 


  useEffect(() => {

    if (inputValue.trim() !== '') {
      const searchTerm = inputValue.toLowerCase();
      const results = majitas.filter(item => 
        (item.type === "Majita Monday" || item.type === "Women Crush Wednesday") && 
        item.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
      setHasSearched(true); 
    } else {
      setSearchResults([]); 
      setHasSearched(false); 
    }
  }, [inputValue]);

  return (
    <>
            <Helmet>
                <title>Search</title> 
            </Helmet>
 
    <div style={{ marginTop: '8em'}}>
      <div className="search-bar">
        <input
          type="search"
          id="search-input"
          onChange={(e) => setInputValue(e.target.value)}
          name="search"
          ref={inputRef} 
          placeholder="Search..."
        />
        <button onClick={() => setHasSearched(true)}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z"
              stroke="currentcolor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.989 15.4905L19.5 19.0015"
              stroke="currentcolor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div id="creative-details" style={{ marginTop: '2em' }}>
      <div id="se-image">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <Link to={`/majitamonday/${result.slug}`} key={result.id}>
             <div key={index} >                
                <img src={result.image} id="image" alt={result.name} />
                <p className="majita-type">{result.name}</p>
                <p className="majita-date" style={{color: 'grey'}}>{result.date} • {result.type}</p>
                </div>

            </Link>
          ))
        ) : hasSearched ? (
          <div>
            <p className="heading" style={{ width: '100%', margin: 'auto', height: '80svh'  }}>
              No creative found
            </p>
          </div>
        ) : null} 
      </div>
      </div>
    </div>
    </>
  );
};

export default Search;
