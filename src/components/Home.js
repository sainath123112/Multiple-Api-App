import { useContext } from "react";
import { ContextProvider } from "./ContextContainer";
import "./Home.css";
import ApiRequest from "./ApiRequest";
function Home() 
{

const { getQuote, getFact, getJoke, getRiddle } = useContext(ContextProvider);
  return (
    <div className="home">
        <p className="home-heading">Press the button to generate what you are looking for</p>
        <div className="home-buttons">
            <button onClick={getQuote}>Quote</button>
            <button onClick={getFact}>Fact</button>
            <button onClick={getJoke}>Joke</button>
            <button onClick={getRiddle}>Riddle</button>
        </div>
        <ApiRequest></ApiRequest>       
    </div>
  )
}

export default Home;