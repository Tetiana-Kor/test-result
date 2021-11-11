import React, {useState} from 'react';
import Button from '../Button/Button';


const Count = () => {
    const [count, setCount] = useState(1)
 
 
    const handleIncrement = () => {
      if (count < 1) {
        return null
       }

        setCount(prevstate =>  prevstate + 1)
    }
    
    const handleDecrement = () => {
        if (count > 100) {
        return null
       }

        setCount(prevstate => prevstate - 1)
 }

    return (
        <div >
            <Button type="button" onClick={handleDecrement} disabled={count <= 1}>-</Button>
             <span style={{margin: '10px'}}>{count}</span>
            <Button type="button" onClick={handleIncrement}  disabled={count >= 100}>+</Button>
      </div>
    )
}

export default Count 
