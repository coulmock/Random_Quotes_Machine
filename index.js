function App() {
  const [quotes, SetQuotes] = React.useState([]);
  const [randomQuotes, SetRandomQuotes] = React.useState([]);
  const [colors, SetColors] = React.useState("#27ae60");
  React.useEffect(() => {
    async function fecthData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      SetQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      SetRandomQuotes(data[randomIndex]);
    }
    fecthData();
  }, []);

  const getNewQuote = () => {
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    SetRandomQuotes(quotes[randomIndex]);
    SetColors(colors[randomColorIndex]);
  };
  const changeColor = {
    backgroundColor: { colors },
  };

  return (
    <div
      style={{ backgroundColor: colors, minHeight: "100vh" }}
      className="super-container row"
    >
      <div
        className="container w-40 pt-5 col-md-8 offset-md-2"
        style={changeColor}
      >
        {" "}
        <div className="grid">
          <div className="card" style={{ width: "40vw" }}>
            <div className="display" id="quote-box">
              <div className="child1" style={changeColor}>
                {randomQuotes ? (
                  <>
                    <p
                      className="card-text h4"
                      style={{ color: colors }}
                      id="text"
                    >
                      {/* <span style={{ color: colors }}>&quot;</span> */}
                      <i
                        className="fa fa-quote-left"
                        style={{ color: colors, margin: 10 }}
                      ></i>
                      {randomQuotes.text}
                    </p>
                    <h5
                      className="card-title float-right"
                      style={{ color: colors, fontSize: 16 }}
                      id="author"
                    >
                      {" "}
                      - {randomQuotes.author || "No author"}
                    </h5>
                  </>
                ) : (
                  <h2>Loading</h2>
                )}
              </div>
              <div className="row" style={{ marginTop: 30 }}>
                <div className="col-sm">
                  <a
                    href={
                      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                      encodeURIComponent(
                        '"' + randomQuotes.text + '" ' + randomQuotes.author
                      )
                    }
                    target="_blank"
                    className="btn btn-warning"
                    style={{ backgroundColor: colors }}
                    id="tweet-quote"
                  >
                    <i className="fa fa-twitter" style={{ color: "white" }}></i>
                  </a>
                  <a
                    href={
                      "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                      encodeURIComponent(randomQuotes.author) +
                      "&content=" +
                      encodeURIComponent(randomQuotes.text) +
                      "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                    }
                    target="_blank"
                    className="btn btn-danger ml-2"
                    style={{ backgroundColor: colors }}
                  >
                    <i className="fa fa-tumblr"></i>
                  </a>
                </div>
                <div className="col-sm"></div>
                <div className="col-sm" id="new-quote">
                  <button
                    onClick={getNewQuote}
                    className="btn btn-default float-right"
                    style={{ backgroundColor: colors, color: "white" }}
                  >
                    New Quotes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-child-2">by Coulmock</div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
