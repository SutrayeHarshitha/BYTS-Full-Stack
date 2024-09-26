
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); //👈01
  function handleClick() {    //👈02
    setCount(count + 1);
  }
  
  return (
    <div className="container">
      like : {count}
     <br/>
    <i id = "heart" onClick={handleClick} className="fa-solid fa-heart"></i>
    </div>      
  );
}
export default App;




