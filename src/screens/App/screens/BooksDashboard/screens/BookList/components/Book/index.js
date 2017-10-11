import React from 'react';
import PropTypes from 'prop-types';

import defaultBookImage from './assets/default_book.svg';
import './style.css';

const Book = ({ src, title, author }) => (
  <div className="book-container">
    <div className="img-book-container">
      <img className={`book-img${src && '-api'}`} src={src || defaultBookImage} alt="book" />
    </div>
    <h3 className="book-title"> {title}</h3>
    <h4 className="book-author" >{author}</h4>
  </div>
);

Book.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
