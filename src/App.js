import React, {useState} from "react";



function App() {
  const [calc, setCalc] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) =>{
    
   if (ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
   ) {
     return;
   }
   setCalc(calc + value)
  }

  const calculator = ()=>{
    setCalc(eval(calc).toString())
  }

  const deleteLast = ()=>{
    if (!calc){
      return;
    }
    let value = calc.slice(0,-1);
    setCalc(value);
  }
  const createDigits = ()=>{
    const digits = ['1','2','3','4','5','6','7','8','9'];
    return digits.map((digit)=>{
      return <button key={digit}
      onClick={()=>updateCalc(digit)}>{digit}</button>
    })
  }
  
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {calc || '0'}
        </div>
        <div className="operators">
          <button onClick={()=>updateCalc("/")}>/</button>
          <button onClick={()=>updateCalc("*")}>*</button>
          <button onClick={()=>updateCalc("+")}>+</button>
          <button onClick={()=>updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={()=>updateCalc("0")}>0</button>
          <button onClick={()=>updateCalc(".")}>.</button>
          <button onClick={calculator}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
