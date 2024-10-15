import { useState } from "react";
import axios from "axios";

function Book() {
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState("");
  const [auther, setAuther] = useState("");
  const [books, setBooks] = useState([]); // Initialize as an array

  const submit = () => {
    axios({
      url: "http://localhost:3000/add/book",
      method: "POST",
      data: { title, pages, auther },
    })
      .then((data) => {
        if (data.data.success) {
          alert("Data saved successfully");
          const booksData = data.data.books || []; // Default to empty array if books is undefined
          setBooks(booksData);
        }
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return (
    <>
      <div>
        <h3>Add Books</h3>
        <table>
          <tbody>
            <tr>
              <td>Title: </td>
              <td>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Number of Pages: </td>
              <td>
                <input
                  type="text"
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Author: </td>
              <td>
                <input
                  type="text"
                  value={auther}
                  onChange={(e) => setAuther(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input onClick={submit} type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {books.map((book) => (
        <div key={book._id}>
          <h4>Title: {book.title}</h4>
          <p>Pages: {book.pages}</p>
          <p>Author: {book.auther}</p>
        </div>
      ))}
    </>
  );
}

export default Book;
