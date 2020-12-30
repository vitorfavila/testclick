import logo from './logo.svg';
import './App.css';

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function App() {
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      openInNewTab(event.target.href)
    }

    console.log('standard click')
    event.preventDefault()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
