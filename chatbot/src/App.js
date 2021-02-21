import logo from './logo.svg';
import './App.css';

function App() {
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
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 'auto',
    alignItems: 'center',
    position: 'relative',
    height: '585px',
    width: '360px',
  },
  scrollView: {
    width: '100%',
    flex: 'auto',
    height: '585px',
  }
})

export default App;
