import React, { useState, useEffect, useRef } from "react";
import "./Calculator.css";

export default function Calculator() {
    const [result, setResult] = useState("");
    
    const inputRef = useRef("");

    useEffect(() => inputRef.current.focus());

    function handleClick(e) {
        setResult(result.concat(e.target.name));
    }

    function backspace() {
        setResult(result.slice(0, -1));
    }

    function clear() {
        setResult("");
    }

    function calculate() {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("");
        }
    }

    return (
        <div className="calc-app">
            <form>
                <input className="input" type="text" placeholder="0" value={result} ref={inputRef}/>
            </form>

            <div className="keypad">
                <button className="clear" onClick={clear}>Clear</button>

                <button className="backspace" onClick={backspace}>X</button>

                <button className="Orange" name="/" onClick={handleClick}>/</button>

                <button name="7" onClick={handleClick}>7</button>


                <button name="8" onClick={handleClick}>8</button>


                <button name="9" onClick={handleClick}>9</button>


                <button  className="Orange" name="*" onClick={handleClick}>*</button>


                <button name="4" onClick={handleClick}>4</button>


                <button name="5" onClick={handleClick}>5</button>


                <button name="6" onClick={handleClick}>6</button>

                <button  className="Orange" name="-" onClick={handleClick}> -</button>

                <button name="1" onClick={handleClick}>1</button>

                <button name="2" onClick={handleClick}>2</button>

                <button name="3" onClick={handleClick}>3</button>

                <button  className="Orange" name="+" onClick={handleClick}>+</button>

                <button name="0" onClick={handleClick}>0</button>

                <button name="." onClick={handleClick}>.</button>

                <button className="result" onClick={calculate}>=</button>

            </div>
        </div>
    );
}