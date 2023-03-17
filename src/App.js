import Home from "./components/Home"
import ContextContainer from "./components/ContextContainer";
import './App.css';

function App() {
  return (
    <ContextContainer>
      <div className="App">
      <Home></Home>
      </div>
    </ContextContainer>

  );
}

export default App;
