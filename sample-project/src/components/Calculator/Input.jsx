

export default function Input({ handleClick }) {
    return (
        <div className="parent">
            <div className="div1" onClick={() => handleClick("+")}> + </div>
            <div className="div2" onClick={() => handleClick("-")}> - </div>
            <div className="div3" onClick={() => handleClick("*")}> * </div>
            <div className="div4" onClick={() => handleClick("%")}> % </div>
            <div className="div5" onClick={() => handleClick("1")}> 1 </div>
            <div className="div6" onClick={() => handleClick("2")}> 2 </div>
            <div className="div7" onClick={() => handleClick("3")}> 3 </div>
        <div className="div8" onClick={() => handleClick("DEL")}> DEL </div>
            <div className="div9" onClick={() => handleClick("4")}> 4 </div>
            <div className="div10" onClick={() => handleClick("5")}> 5 </div>
            <div className="div11" onClick={() => handleClick("6")}> 6 </div>
        <div className="div12" onClick={() => handleClick("CLR")}> CLR </div>
            <div className="div13" onClick={() => handleClick("7")}> 7 </div>
            <div className="div14" onClick={() => handleClick("8")}> 8 </div>
            <div className="div15" onClick={() => handleClick("9")}> 9 </div>
            <div className="div16" onClick={() => handleClick("0")}> 0 </div>
            <div className="div17" onClick={() => handleClick("=")}> = </div>
            <div className="div18" onClick={() => handleClick(".")}> . </div>
        </div>
    );
}
