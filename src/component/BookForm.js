import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={title}
          placeholder="Book Title"
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          required
          value={author}
          placeholder="Book Author"
          onChange={e => setAuthor(e.target.value)}
        />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default BookForm;
