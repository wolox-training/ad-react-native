import React from 'react';
import defaultBookImage from './Assets/default_book.svg';
import './style.css';

const Book = (props) => {
	return (
		<div className="book-container">
			<div className="img-book-container">
			  <img className={"book-img" + (props.src && "-api")} src={props.src || defaultBookImage} />
			</div>
			<h3 className="book-title"> {props.title}</h3>
			<h4 className="book-author" >{props.author}</h4>
		</div>
	);
}

export default Book;
