import React, {useState} from 'react';
import s from './Size.module.css'


const Size = ({product}) => {
    const [size, setSize] = useState(null) 

    return (
        <div className={s.size}>
            {product.map((value, index) =>
                <label key={index} className={s.size__label}>
                    <input type="checkbox"
                        onChange={() => setSize(index)}
                        // defaultChecked={index[0]}
                        value={index}
                        checked={index === size}/>
                        
                    <span>{value} мл</span>
                </label>
                    )}
      </div>
    )
}

export default Size
