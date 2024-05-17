import React, { useRef, useState } from "react";
import "./Calculator.css";
const Calculator = () => {
    let [input, setInput] = useState('');
    // Create a ref to hold the Audio instance
    const audioRef = useRef(null);

    const setValue = (value) => {

        if (value === '=') {
            try {
                setInput(eval(input));
            } catch (error) {
                setInput(error);
            }
        } else if (value === 'CLR') {
            setInput('');
        } else if (value === 'DEL') {
           try {
            setInput(input?.slice(0, -1));//0 , decree 1
           } catch (error) {
            setInput(error);
           }
        } else {
            setInput(input = input + value);
        }

          // Play the audio
          if (audioRef.current) {
            audioRef.current.play();
        }

    }

    return (

        <React.Fragment>
            <div className="calculatorBody">
                <div className="calculatorDisplay">
                    <input type="text" name="display" readOnly defaultValue={input} id="display" />
                </div>
                <div className="calculatorButtons">

                    <button className="playButton" id="number" onClick={() => setValue(1)} >1</button>
                    <button className="playButton" id="number" onClick={() => setValue(2)} >2</button>
                    <button className="playButton" id="number" onClick={() => setValue(3)} >3</button>
                    <button className="playButton" id="symbol" onClick={() => setValue('+')}  >+</button>

                    <button className="playButton" id="number" onClick={() => setValue(4)} >4</button>
                    <button className="playButton" id="number" onClick={() => setValue(5)} >5</button>
                    <button className="playButton" id="number" onClick={() => setValue(6)} >6</button>
                    <button className="playButton" id="symbol" onClick={() => setValue('-')}  >-</button>

                    <button className="playButton" id="number" onClick={() => setValue(7)} >7</button>
                    <button className="playButton" id="number" onClick={() => setValue(8)} >8</button>
                    <button className="playButton" id="number" onClick={() => setValue(9)} >9</button>
                    <button className="playButton" id="symbol" onClick={() => setValue('*')}  >X</button>

                    <button className="playButton" id="number" onClick={() => setValue(0)} >0</button>
                    <button className="playButton" id="number" onClick={() => setValue('/')}  >/</button>
                    <button className="playButton" id="number" onClick={() => setValue('^')}  >^</button>
                    <button className="playButton" id="symbol" onClick={() => setValue('%')}  >%</button>

                    <button className="playButton" id="bottomButton" onClick={() => setValue('CLR')}>CLR</button>
                    <button className="playButton" id="bottomButton" onClick={() => setValue("DEL")}  >DEL</button>
                    <button className="playButton" id="number" onClick={() => setValue('.')}  >.</button>
                    <button className="playButton" id="symbol" onClick={() => setValue('=')} >=</button>

                </div>
                <audio ref={audioRef} src="newSound.mp3" />
            </div>
        </React.Fragment>
    )
}

export default Calculator;