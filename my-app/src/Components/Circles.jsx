import { useState } from "react";

function Circles() {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const addNumber = () => {
        const newCounter = counter1 + 1;
        setCounter1(newCounter);
    }
    const addNumber2 = () => {
        const newCounter2 = counter1 + counter2;
        setCounter2(newCounter2)
    }

    const reset = () => {
        setCounter1(0);
        setCounter2(0);
    }

    return (
        <>
            <div>
                <div className="circle">
                    <p>First {counter1}</p>
                </div>
                <div className="circle">
                    <p>Second {counter2}</p>
                </div>
            </div>
            <button onClick={addNumber}>Add number in first circle</button>
            <button onClick={addNumber2}>Add number in second circle</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Circles;