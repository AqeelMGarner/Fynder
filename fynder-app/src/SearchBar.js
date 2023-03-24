import React from 'react';
import "./SearchBar.css";

function SearchBar() {
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid" className='navBar'>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder=" Enter city here" aria-label="Search" />
                            <button class="btn btn-outline-success" className="submit" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default SearchBar