import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Recipe from './components/Recipe';
import  './App.css';
import Axios from 'axios';

function App() {
  const [search,setSearch]=useState("chicken");
  const [recipes,setRecipes]=useState([]);

  const APP_ID="5e2f25f4";
  const APP_KEY="7447f15e7ad52cd82f219df2b437e069 ";

  const onInputChange=(e)=>{
    setSearch(e.target.value);
    
  }

  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes=async()=>{
    const res=await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   setRecipes(res.data.hits);
   console.log(res);
   
  }

 const onSearchClick=()=>{
    getRecipes();
  }
  return (
    <div className="App">      
      <Header 
      search={search} 
      onInputChange={onInputChange}
      onSearchClick={onSearchClick}
      />
      <div className="container">
      <Recipe recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;


