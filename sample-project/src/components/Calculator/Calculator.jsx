import { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import "./grid-style.css";

export default function Calculator() {
    const [value, setValue] = useState(" ");
    function handleClick(param) {
        if (param === "DEL") {
            setValue(value.slice(0, -1));
        }
        else if (param === "CLR") {
            setValue("");
        }
        else if (param === "=") {
            try {
                let evaluatedValue = eval(value);
                setValue(evaluatedValue + "");
            } catch (error) {
                setValue("Invalid synatx");
                console.log("call error :", error);
            }
        }
        else {
            setValue(value + param);
        }
    }
    return (
        <div className='calc'>
            <Output value={value} />
            <Input handleClick={handleClick} />
        </div>
    );
}