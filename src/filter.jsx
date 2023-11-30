import { useEffect , useState } from "react";
import React from "react";

function Filter(){
    const [users , setusers] = useState([])
    const [serch , setserch] = useState([])

    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) =>res.json())
      .then((data) =>setusers(data))
    },[])


    const handilclick =(e)=>{

        const filtr = users.filter(us => us.name.toLowerCase().includes(e.target.value))

        setserch(filtr)
    }

    useEffect(()=>{
         setserch(users)
    },[users])
    
    return(
        <>
        <input  type="text" onInput={handilclick}/>
         <div > 
            { serch.map( us => <h3 key={us.id}> {us.name} </h3> ) }
        </div>
        
        </>
       
    )
}

export default Filter