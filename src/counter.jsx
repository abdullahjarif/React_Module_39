import { useState } from "react" // hook

export default function Counter(){

    const [count, setCount]= useState(0);

    const handleAdd = () => {
        // console.log('add button clicked');
        const newCount = count + 1; // increased one by one
        setCount(newCount);
        
    }

    const counterStyle = {
        margin: '10px',
        padding: '10px',
        border: '3px solid green',
        borderRadius: '20px'
    }

    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}