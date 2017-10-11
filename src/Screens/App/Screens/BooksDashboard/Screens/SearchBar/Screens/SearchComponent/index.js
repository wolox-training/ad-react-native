import React from 'react';
import './style.css';
import searchImage from './Assets/notifications.svg';

const SearchComponent = (props) => {
  return (
      <div className="search-component-container">
        <input className="search-input" name="filter" placeholder="Buscar..." value={props.value} onChange={props.onChange} />
        <div className="search-img-container">
        	<img src={searchImage}/>
        </div>
      </div>
    );
}

export default SearchComponent;
