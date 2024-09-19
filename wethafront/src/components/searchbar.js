import React, {useState} from 'react'

const SearchBar = ({ onSearch }) => {
    const [location, setLocation] = useState('');

    const handlesearch = () => {
        onSearch(location);
    };

    return (
        <div>
            <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)} 
            placeholder='Enter location'
            />

            <button onClick={handlesearch}>Search</button>
        </div>
    );
};

export default SearchBar;