import React, { useState } from 'react';

function App() {
    const [variable1, setVariable1] = useState(0);
    const [variable2, setVariable2] = useState(0);
  
    const Increment1 = () => {
      setVariable1(variable1 + 1);
    };
  
    const Increment2 = () => {
      setVariable2(variable2 + 1);
    };
  
    const highestValue = variable1 > variable2 ? variable1 : variable2;
  
    return (
      <div>
        <button onClick={Increment1}>Increment variable 1</button>
        <button onClick={Increment2}>Increment variable 2</button>
        <p>The highest value is: {highestValue}</p>
      </div>
    );
}

export default App;
