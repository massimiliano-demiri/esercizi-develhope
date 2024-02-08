import { Counter } from "./Counter";
import { useState } from "react";

export function CounterDisplay({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)

    function handleIncrement() {
        setCounter(c => c + 1);
    }
    function handleDecrement() {
        setCounter(c => c - 1);
    }
    function handleReset() {
        setCounter(0);
    }
    return (
        <div>
            <h2>Second left: {counter}</h2>
           <button onClick={handleIncrement}>Increment</button>
        </div>

    )
}