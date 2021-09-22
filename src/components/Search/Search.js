import React from 'react';

const Search = () => {
    return (
        <div className="input-group mb-3 w-50 mx-auto">
            <input type="text" className="form-control" placeholder="rice" aria-label="Search Field" aria-describedby="button-addon2"/>
            <button className="btn btn-danger" type="button" id="search-button">Search</button>
        </div>
    );
};

export default Search;