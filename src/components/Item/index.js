import React from 'react'

function Item(props) {

  
  return (<div>
  <img src={props.foto}/>
  <p>{props.name}</p>
</div>)
}

export default Item;