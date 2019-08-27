import React from "react";
import BookContextProvider from "./context/BookContext";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
