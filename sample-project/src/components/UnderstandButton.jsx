
//State with  number,string,bool type

import { useState } from "react";

function UnderstandButton() {
    let [count, setCount] = useState(0);
    let [name,setName] = useState("doremon");
    let [flag, setFlag] = useState(false); 
    //let [arr, setArr] = useState([10,20,30]);
    //let [obj,setObj] = useState({city : 'nandyal', state : 'andhra'});

    function handleClick() {
        setCount(count + 1);
        setName(name + "is very popular");
        setFlag(!flag);
    }
    return (
        <div>
            <div>
                count : {count}
                <br />
                name: {name}
                <br />
                flag: {flag + ""}
            </div>
            <button onClick={handleClick}>update</button>
        </div>
    );
    l
}
export default UnderstandState;