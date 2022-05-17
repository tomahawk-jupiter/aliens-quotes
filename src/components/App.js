import React, { useState } from "react";
import { initialQuoteArray } from "./quotes";

const randomIndex = (max) => {
  return Math.floor(Math.random() * max);
};

const App = () => {
  const [quotes, setQuotes] = useState(initialQuoteArray);
  const [currentQuote, setCurrentQuote] = useState(
    initialQuoteArray[randomIndex(quotes.length)]
  );

  const randomQuote = () => {
    // If any quotes left, set quote and remove it.
    if (quotes.length > 0) {
      const index = randomIndex(quotes.length);
      setCurrentQuote(quotes[index]);
      const filteredArray = quotes.filter((q, i) => i != index);
      setQuotes(filteredArray);
      return;
    }

    // If all quotes use, reset and set one from the initail array
    if (quotes.length < 1) {
      setQuotes(initialQuoteArray);
      setCurrentQuote(initialQuoteArray[randomIndex(initialQuoteArray.length)]);
    }
  };

  return (
    <div className="container">
      <img className="bg-img" src={currentQuote.img} />

      <div className="caption">
        <div id="text">&ldquo;{currentQuote.quote}&rdquo;</div>
        <div id="author">&#8212;{currentQuote.author}</div>
      </div>

      <div className="button-container">
        {/* <a
          id="tweet-quote"
          class="twitter-share-button"
          href="twitter.com/intent/tweet"
        >
          <i className="fa-brands fa-twitter"></i>
        </a> */}
        <button id="new-quote" onClick={randomQuote}>
          Next Quote
        </button>
      </div>
    </div>
  );
};

export default App;
