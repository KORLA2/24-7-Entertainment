import React ,{useEffect,useState} from 'react'



const Home = () => {
let [data,setdata]=useState({});
    useEffect( async ()=>{

 let res=await fetch("https://api.tvmaze.com/search/shows?q=all");
  let data=await res.json();
  console.log(data)

    },[])
    
  return (
    <div>Home</div>
  )
}

export default Home