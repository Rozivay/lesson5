
import { useState } from "react";
function App() {
const [input,setInput] = useState(0)
const [input2,setInput2] = useState(0)
const [result,setResult] = useState(0)
const sum = ()=>{
setResult(+input+(+input2))
}
const minus = ()=>{
  setResult(+input-input2)
  }

  const umnosh = ()=>{
    setResult(+input*input2)
    }
    const del = ()=>{
      setResult(+input/input2)
      }
      

  return (
    <div className="App">
     <input type="number" onChange={(e)=>setInput(e.target.value)} />
     <input type="number" onChange={(e)=>setInput2(e.target.value)}/>
     <div>{result}</div>
     <button onClick={sum}>+</button>
     <button onClick={minus} >-</button>
     <button onClick={umnosh} >*</button>
     <button onClick={del} >/</button>
    </div>
  );
}

export default App;
