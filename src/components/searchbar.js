import React from "react";

const SearchBar = ({
    value, 
    loading, 
    handleSubmit, 
    onChange
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                disabled={loading}
                onChange={onChange}
                placeholder="Search Recipes"
                className="form-searchbar"
            />
            <input 
                disabled={loading || !value}
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;