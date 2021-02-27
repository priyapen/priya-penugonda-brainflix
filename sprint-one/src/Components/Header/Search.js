import React from 'react';
import searchicon from '../../Assets/Icons/Icon-search.svg'


const Search = () => {
    return (
        <div>
            <img src={searchicon} alt="icon for search"/>
            <input type="text" placeholder="Search"/>
        </div>
    );
};


Search.propTypes = {

};


export default Search;
