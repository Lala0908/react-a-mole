import "./App.css";
import { useState } from "react";
import MoleContainer from "./components/MoleContainer";

function App(){
  //A function to generate nine MoleContainers

  //SCORE:    variable
  //SETSCORE: function that updates the variable score
  //0:        initial value and data type of score
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    const MOLEHILLS = 9;
    for(let i = 0; i < MOLEHILLS; i++) {
      hills.push(<MoleContainer
        key={i}
        setScore={setScore}
        Score={score}/>);
    }
    return <div>{hills}</div>;
  };
  return (
    <div>
      <h1>React-a-Mole</h1>
      {score}
      {createMoleHill()}
    </div>

  );
}

export default App;