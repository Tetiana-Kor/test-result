import React, {useState} from 'react';
import initialProduct from './products'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from '../Button/Button';
import Count from '../Count/Count';
import s from './ProductCard.module.css'
import Size from '../Size/Size';
// import Colors from '../Colors/Colors';


const ProductCard = () => {
    const [products, setProducts] = useState(initialProduct)
    const [color, setColor] = useState(null)
    console.log(color);
 
    return (
        
        <div className={s.product}>
            {products.map(({id, url, title, description, color, price, size}) => 
              <div key={id}  className={s.product__block}>
                <div className={s.product__img}>
                  <a href={url}  >
                    <picture>
                        <img
                          src={url}
                          alt={title}
                                />
                    </picture>
                  </a>
                </div>

                <h2 className={s.product__title}>{title}</h2>
                <p className={s.product__desc}>{description}</p>
                <div className={s.product__price}>
                  <Dropdown
                    options={color}
                    onChange={(option) => setColor(option)}
                    placeholder="Цвет" />
                  <div>{price} грн</div>
                </div>

                <Size product={size}></Size>
                    
                <div className={s.product__buy}>
                  <Count />
                  <Button>Купить</Button>
                </div>

              </div>
                )}
        </div>
    )
}

export default ProductCard 
