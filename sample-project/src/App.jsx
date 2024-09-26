// import {useState} from "react";
// import './App.css';

// const REACTION =["😀","😁","😎","😋","😘"];
// function App() {
//   //let count = 100;
//   //syntax:const[var,setVar]=useState(initial_value);
//   const [emoji, setEmoji]=useState(REACTION[0]);
//   const [count, setCount] = useState(0); //state
//   function handleClick() {
//     if(count < REACTION.length-1) {
//       //update emoji 
//       setEmoji(REACTION[count]);
//     }
//     else {
//       //keep last emoji
//       setEmoji(REACTION(REACTION.length-1));
//     }
//     //count++;
//     setCount(count+1);
//   }
//   return (
//     <div>
//       <button id="btn" onClick={handleClick}> {count}{emoji}</button> 
//       {/* {count}--to make a js statement in html we use{} */}
//     </div>
//   );
// }
// export default App;


// 

// import Calculator from "./components/Calculator/Calculator";
// function App() {
//   return (
//     <>
//       <Calculator />
//     </>
//   );
// }
// export default App;


//mini project

import ToDo from "./components/ToDoList/ToDo";

function App() {
  return (
    <>
      <ToDo />
    </>
  );
}
export default App;