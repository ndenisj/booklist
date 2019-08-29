import React from "react";
import BookContextProvider from "./context/BookContext";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";
import BookForm from "./component/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
