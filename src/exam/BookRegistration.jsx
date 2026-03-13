import React, { useState } from "react";

function BookRegistration() {

  const [title,setTitle] = useState("");
  const [author,setAuthor] = useState("");
  const [price,setPrice] = useState("");
  const [publisher,setPublisher] = useState("");
  const [year,setYear] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

  
    let books = JSON.parse(localStorage.getItem("books")) || [];

    
    const newBook = { title, author, price, publisher, year };


    books.push(newBook);

   
    localStorage.setItem("books", JSON.stringify(books));

    alert("Book Registered Successfully");

    setTitle("");
    setAuthor("");
    setPrice("");
    setPublisher("");
    setYear("");
  };

  return (
    <div className="register-box">

      <h2>Book Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Publisher"
          value={publisher}
          onChange={(e)=>setPublisher(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e)=>setYear(e.target.value)}
          required
        />

        <button>Register</button>

      </form>

    </div>
  );
}

export default BookRegistration;