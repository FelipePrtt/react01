import { useState } from 'react';


export default function Counter(){
    const [number, setNumber] = useState(0);

    return (
        <div class="body component-container">
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 3);
                setTimeout(() => {
                    alert(number);
                });
            }}>+3</button>
        </div>
    )
}