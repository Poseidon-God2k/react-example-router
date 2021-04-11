import React,{useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
function Shop() {

  useEffect(()=>{
    fetchItems();
  },[])

  const [items, setItems] = useState([])



  const fetchItems = async() =>{
    const data = await fetch('https://fakestoreapi.com/products?limit=10');
    
    const items = await data.json()

    setItems(items);
  }

  console.log(items)
  return (
    <div className="shop-item">
          {items.map(item=>(
            <div className = "item">
              <div className="top-item">
                <h3 key={item.id}>
                  <Link to={`/shop/${item.id}`}>
                  {item.title}
                  </Link>
                </h3>
              </div>
              <div className ="middle-item">
                  <Link to={`/shop/${item.id}`}>
                    <img src={item.image}/>
                  </Link>
              </div>
              <div className = "bottom-item">
              <p>Price: {item.price} $</p>
              <button>Add to Cart</button>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Shop;