import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/bookSlice';



  //const numOfBooks = useSelector((state) => state.books.length);



const BookView = () => {
  const bookArray = useSelector((state) => state.books);
  const realBookArray = bookArray.books;
  const dispatch = useDispatch();
  console.log(realBookArray);
let bookList = [];
  function booksLoop() {
   for (let i = 0; i < realBookArray.length; i++) { 
    bookList.push(<div>
      Book: {realBookArray[i].title}<br />
      ID: {realBookArray[i].item_id}<br />
      Author: {realBookArray[i].author}<br />
      Category: {realBookArray[i].category}<br />
      <button type="button" onClick={() => dispatch(removeBook(realBookArray[i].item_id))}>Remove book</button><br />
      </div>);
  }
  return bookList;
};

const newBooks = {
  title: '',
  author: '',
};

const handleAddBook = () => {
  newBooks.title = document.getElementById('title').value;
  newBooks.author = document.getElementById('author').value;
  };

  return (
    <>
      <h2>
        Book List - Total:
      </h2>
      <div className='bookList'>
        {booksLoop(realBookArray)}
      </div>
      <label for="author">Book author:</label>
<input type="text" id="author" name="author"size="10" />
<br />
<label for="title">Book title:</label>
<input type="text" id="title" name="title"size="10" />
      <br />
      <button type="button" onClick={() => {handleAddBook(); dispatch(addBook(newBooks));} } >Add book</button>
    </>
  );
};

export default BookView;
