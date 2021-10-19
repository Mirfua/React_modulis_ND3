import { useState } from "react";

function Circles() {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const addNumber = () => {
        setNumber1(number1 + 1);
    }
    const addNumber2 = () => {
        setNumber2(number2 + 1);
    }

    const reset = () => {
        setNumber1(0);
        setNumber2(0);
    }

    return (
        <>
            <div>
                <div className="circle">
                    <span>{number1}</span>   
                    <button onClick={addNumber}>Add</button>
                </div>
                <div className="circle">
                    <span>{number2}</span>
                    <button onClick={addNumber2}>Add</button>
                </div>
            </div>
            <button onClick={reset}>Reset numbers</button>
        </>
    )
}

export default Circles;