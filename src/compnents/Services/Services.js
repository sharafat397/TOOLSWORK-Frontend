import React, { useEffect, useState } from "react";

import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]); // depandency array;


  const handleDeleteService = (id) =>{
    const proceed = window.confirm('Are you sure, you want to delete?')

    if(proceed){
      fetch(`http://localhost:5000/services/${id}`,{
        method : 'DELETE',
      })
      .then(res => res.json())
      .then(data =>{
        if(data.deletedCount > 0){
          alert('deleted successful.')
          const remainingServices = services.filter(
            (service) => service.id !== id,
          )
          setServices(remainingServices)
        }
      })
    }
  }
  return (
    
      <div className="services">
        
          {services.map((service) => (
          <Service 
          realService={service}
          handleDeleteService={handleDeleteService}
          ></Service>
        ))}
        
        
        
      </div>
      
  
  );
};
export default Services;
