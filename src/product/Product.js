import './Product.css';
import React, { useEffect, useState }  from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const Product = (props)=>{
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const [count,setCount] = useState(0)
    const [pr,setPr] = useState(0)

    const getProducts = async () => {
        const result = await axios.get(`https://my-api-shopping.herokuapp.com/api/products`)
       
        const action = {type:'GET_PRODUCTS',product: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getProducts()
      }, [])
    
      const sumPrice = () => {
          setPr(pr+props.price)
          setCount(count+1)
      }
      const minusPrice = () => {
        setPr(0)
        setCount(0)
        }   
    return (

        <div class="row">
            <div class="column">
                <div class="card" style={{Image: `url('${props.src}')` }}>
                    <h3>Product {props.no}</h3>
                    <p>{props.name}</p>
                    <p>{props.price} B</p>
                  
                    <button class="button button1" onClick={sumPrice}>Select</button>
                    <button class="button button3" onClick={minusPrice}>Cancle</button><br/>
                    <a className='f1'>{count} : piece   {pr} Bath</a>
                </div>
            </div>
            </div>

            
    )
}

export default Product

