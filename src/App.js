import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    getQuotes();
  }, []);

  let getQuotes = () => {
    axios.get("https://quotes.rest/qod?language=en").then(res => {
      // console.log(res.data.contents.quotes);
      setTitle(res.data.contents.quotes[0].title);
      setQuote(res.data.contents.quotes[0].quote);
      setAuthor(res.data.contents.quotes[0].author);
    });
  };

  let changeTheme = () => {
    setTheme(!theme);
  }
  return (
    <div className={(theme) ? "light" : "dark"}>
      <header className="main-header">
        <p className="title"><strong>{title}</strong></p>
      </header>
      <main>
        <h1 className="quote">{quote}</h1>
        <p className="author"><em>" {author} "</em></p>
        <button className="switch-btn" onClick={changeTheme}><strong>{(theme) ? "Dark Theme" : "Light Theme"}</strong></button>
      </main>
    </div>
  );
}

export default App;
