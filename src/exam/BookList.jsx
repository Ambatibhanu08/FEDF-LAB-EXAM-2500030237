import React, { useEffect, useState } from 'react'
import "./BookList.css"

function BookList() {

  const [books,setBooks] = useState([])

  useEffect(()=>{

    const storedBooks = JSON.parse(localStorage.getItem("books")) || []

    setBooks(storedBooks)

  },[])

  return (
    

     <div className="book-list">
  <h2>Registered Books</h2>

      {books.length === 0 ? (

        <p>No books available</p>

      ) : (

        <table border="1">

          <thead>

            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Publisher</th>
              <th>Year</th>
            </tr>

          </thead>

          <tbody>

            {books.map((book,index)=>(
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.publisher}</td>
                <td>{book.year}</td>
              </tr>
            ))}

          </tbody>

        </table>

      )}

    </div>
  )
}

export default BookList