import React,{useState,useEffect} from 'react';
import Item from '../Item';



function List(props) {

  const [auris,setAuris] = useState([]);
  
  useEffect(() => {
   
  
      fetchData();
     },[]);

     async function fetchData(){
      const data = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=auriculares");
      const dataJson = await data.json();
   
      setAuris(dataJson.results);
      
    }
 

  return (
     <ul>
     {auris.filter((obj) =>{
       return(obj.title.includes(props.info))
     }).map((obj, key) => {
       return (
          <Item name={obj.title} foto={obj.thumbnail} key={obj.id ? obj.id:key}/>
        );
      }) }
    </ul>
  );
}

export default List;