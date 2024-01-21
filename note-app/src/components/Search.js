import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <input 
                onChange={(event) => handleSearchNote(event.target.value)}
                type="text" 
                placeholder="Type to search..." 
                id="search-bar"
            />
            <a href="#">
                <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="search-icon" />
            </a>
        </div>
    );
};

export default Search;
