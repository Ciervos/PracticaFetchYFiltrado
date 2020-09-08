import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import List from './components/List';

function App() {
 const [txt,setTxt] = useState("");

  function handleFilter(info){
   setTxt(info);
  };

  return (
    <div>
      <Navbar handleCb={handleFilter}/>
      
      <List info={txt}/>
      
    </div>
  );
}

export default App;
