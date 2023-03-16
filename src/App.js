

function App() {
  return (
    <div className="layout">
    {/* header */}
    <header className="header">
      <div className="logo">
        <div className="play"></div>
      </div>
      <h1>My Movies</h1>
    </header>
    {/* navbar */}
    <nav className="nav">
      <ul>
        <li><a href="/#">Start</a></li>
        <li><a href="/#">Movies</a></li>
        <li><a href="/#">Contact</a></li>
      </ul>
    </nav>
    {/* main content */}
    <section className="content">
      {/* here the movies */}
      <article className="movi-item">
        <h3 className="title">Web development</h3>
        <p className="description">lucafabbozzo.com</p>

        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </article>
      <article className="movi-item">
        <h3 className="title">Web development</h3>
        <p className="description">lucafabbozzo.com</p>

        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </article>
      <article className="movi-item">
        <h3 className="title">Web development</h3>
        <p className="description">lucafabbozzo.com</p>

        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </article>
            <article className="movi-item">
        <h3 className="title">Web development</h3>
        <p className="description">lucafabbozzo.com</p>

        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </article>
    </section>

    {/* sidebar */}
    <aside className="side">
      <div className="search">
        <h3 className="title">Searcher</h3>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>

      <div className="add">
        <h3 className="title">Add Movie</h3>
        <form>
          <input type="text" placeholder="Title"/>
          <textarea placeholder="description"></textarea>
          <input type="submit" value="Save" />
        </form>
      </div>
      </aside>

    {/* footer */}
    <footer className="footer">
      &copy; Master en React 
    </footer>
  
    </div>

    );
}

export default App;
