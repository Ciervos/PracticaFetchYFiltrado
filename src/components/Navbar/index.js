import React,{useState} from 'react'


function Navbar(props) {

  const [filtrado,setFiltrado] = useState([]);

  function handleChange(event) {
  
    setFiltrado(event.target.value)
      
  }  

  function handleClick() {
    const {handleCb} = props;
    if (handleCb) {
    handleCb(filtrado);
    }
  }

  return (<>
  <input onChange={handleChange} type="text"/>
  <button onClick={handleClick}>Buscar</button>
  </>
  )
}

export default Navbar;