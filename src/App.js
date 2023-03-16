import { Create } from "./components/Create";
import { List } from "./components/List";
import { Searcher } from "./components/Searcher";


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
      {/* here the list movies */}
      <List />
    </section>

    {/* sidebar */}
    <aside className="side">
      <Searcher />
      <Create />
    </aside>

    {/* footer */}
    <footer className="footer">
      &copy; Master en React 
    </footer>
  
    </div>

    );
}

export default App;
