import { useEffect, useState } from "react";
import "../styles/main.css";

export const QuoteCard = () => {
  /* 
  {
    "_id": "MZW3t0KRxWNU",
    "content": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved.",
    "author": "Helen Keller",
    "tags": [
        "Character"
    ],
    "authorSlug": "helen-keller",
    "length": 182,
    "dateAdded": "2019-02-11",
    "dateModified": "2023-04-14"
}
  */
  const [quote, setQuote] = useState({
    content: "No Quote here...",
    author: "author",
  });

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="quote-card">
      <h2>Quote of the day</h2>
      <p className="card-body">{quote.content}</p>
      <label> ~ {quote.author} ~ </label>
      <div className="card-footer">
        <button className="btn">Next</button>
      </div>
    </div>
  );
};
