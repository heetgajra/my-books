import React from "react";
import { useState } from "react";
import "./styles.css";

const data = {
  lovestories: [
    { name: "Looking for alaska", rating: "4/5" },
    { name: "Fault in our stars", rating: "5/5" },
    { name: "Turtles all the way down", rating: "4.5/5" }
  ],
  selfhelp: [
    { name: "Rich dad poor dad", rating: "3/5" },
    { name: "Happiness unlimited", rating: "5/5" }
  ],
  thriller: [{ name: "One of us is lying", rating: "5/5" }]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("lovestories");
  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>Check my favourite books. Select a genre to get selected.</p>

      <div>
        {Object.keys(data).map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {data[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
