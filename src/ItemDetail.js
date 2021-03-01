import React,{useState, useEffect} from 'react';
import './App.css';


function Item({match}) {

  useEffect(()=>{
      fetchItem();
      console.log(match)
  },[])

  const [item, setItem] = useState({
  })
    
  const fetchItem = async()=>{
      const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)

      const item = await fetchItem.json();
      console.log(item)
      setItem(item)
  }

  return (
    <div>
        <h1>{item.title}</h1>
        <img src={item.image} width="300px" height="300px" />
        <h3>Price:{item.price}</h3>
    </div>
  );
}

export default Item;