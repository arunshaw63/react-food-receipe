import React from 'react';

const Header = (props) => {
  return (
  	
    <div className="jumbotron">
      <h1 className="display-1 "><span className="material-icons brand-icon">
               fastfood
            </span>Food Receipe</h1>
            <div className="input-group mx-auto w-50">
    <input 
    type="text"
    value={props.search}
    className="form-control" 
    onChange={props.onInputChange}
    placeholder="Search your recipe...."/>

    <div className="input-group-append">
      <button className="btn btn-dark" onClick={props.onSearchClick}>Search Receipe</button>
    </div>
    </div>
    </div>
   
  )
}

export default Header;