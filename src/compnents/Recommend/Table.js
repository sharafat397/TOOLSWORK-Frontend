import React from "react";
import './Recommend.css'
const Table =({data})=>{
   
    return (
        <>
        <table>
            <tbody>
                <tr>
                    <th className="Table_distance">Name</th>
                    <th className="Table_distance">Price</th>
                    <th className="Table_distance">Duration</th>
                    
                </tr>
                {data.map((item) =>(
                    <tr key={(item._id)}>
                        
                        <td className="Table_distance">{item.name}</td>
                        
                        <td className="Table_distance">{item.price}tk</td>
                        
                        <td className="Table_distance">{item.duration}</td>
                        
                    </tr>
                ))}
            </tbody>
            
        </table>
        </>
        
    )
}

export default Table;