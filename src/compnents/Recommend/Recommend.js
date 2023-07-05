import React, { useEffect, useState } from "react";
import Table from "./Table";
import "./Recommend.css"
const Recommend = ()=>{
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]); // depandency array;
    
    const [query, setQuery] = useState("");
    const search = (data) =>{
        return data.filter((item) => item.name.toLowerCase().includes(query) || 
                            item.price.toLowerCase().includes(query)  || 
                            item.duration.toLowerCase().includes(query));
    }
    return(
        <div>
        <div className="d-flex Recommend">
            <div className="Recommend_txt">
                Search Something
            </div>
            <div className="Recommend_ser">
                <input 
                    type="text"
                    placeholder="Searching.."
                    className="search"
                    onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
                >
                </input>
                
            </div>
            
        
        </div>
        <div className="Reco">
            <Table data = {search(services)}/>
        </div>
        
        
        </div>
    )
}

export default Recommend