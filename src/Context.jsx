import React,{useContext,useState,useEffect} from "react";

const AppContext=React.createContext();

const[meals,setMeals]=useState([]);

const allMealsurl='';


const randomMealsurl='';

const fetchMeals = async(url)=>{
    try{
const response = await axios(url)
console.log(response);
    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    fetchMeals(allMealsurl);
},[])

const AppProvider=({children})=>{
return <AppContext.Provider value={meals}>
{children}
</AppContext.Provider>
}
export const useGlobalContext =()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider}