import {useState} from "react";

function Counter() {
    let [counter, setCounter] = useState(0);
    let [count,setCount] = useState(0);

    const handleClick = () => {
        const newValue = counter + 1;
        setCounter(newValue);
    };

    const handleClick1 = () => {
        const newValue = count + 2;
        setCount(newValue);
    };

    return (
        <div>
            <h1>Count {counter}</h1>
            <div>
                <button onClick={handleClick}>Add 1</button>
            </div>
            <h1>Count {count}</h1>
            <div>
                <button onClick={handleClick1}>Add 2</button>
            </div>
        </div>

    );
}

export default Counter;