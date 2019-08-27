import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBook] = useState([
    { title: "Book 1", author: "Author 1", id: uuid() },
    { title: "Book 2", author: "Author 2", id: uuid() }
  ]);

  const addBook = (title, author) => {
    setBook([...books, { title, author, id: uuid() }]);
  };

  const removeBook = id => {
    setBook(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
