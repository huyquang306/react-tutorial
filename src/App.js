import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Learning from './components/Learning'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello> </Hello>
        <Learning></Learning>
      </header>
    </div>
  );
}

export default App;
