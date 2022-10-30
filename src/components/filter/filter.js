import './filter.css';
import React, { useEffect, useState } from 'react';
import Paginate from '../../components/paginate/paginate'
import { FaSearch,FaAngleUp,FaAngleDown,FaSort } from 'react-icons/fa';



function Filter({users}) {
   
   const [persons,setpersons]= useState([]);
   
      
    useEffect(() => {
        // Fetch items from another resources.
        setpersons(users);
        console.log(persons)
        console.log(users)
      }, [users]);
    
    return ( <
        >
     
        <div className = 'row py-2 ' >
        
        <div className = 'col-3 p-0 m-0 ' > 
        <div className = "input-group " ><input type = "text"
        placeholder = 'name'
        className = 'form-control m-0 ' 
        onChange = {
            (event) => {
                
             const someone=users.filter((data)=>{
              
              if(data.name.toLowerCase().includes(event.target.value.toLowerCase())){
                console.log(event)
                console.log("event")
                return data;
              }
            })
        setpersons(someone);
            console.log(persons)
            
          }
           
        }/ >
        <button className="btn btn-outline-secondary bg-white border-start-0 border searches ms-n3"><span className="form-control-feedback blackcolor"><FaSort/> </span></button></div>
        </div> 
        <div className = 'col-1 ' > 
        <div className = "input-group" >< input type = "text"
        placeholder = 'code'
        className = 'form-control '
        onChange = {
          (event) => {
              
           const someone=users.filter((data)=>{
            
            if(data.code.toLowerCase().includes(event.target.value.toLowerCase())){
              console.log(event)
              console.log("event")
              return data;
            }
          })
      setpersons(someone);
          console.log(persons)
          
        }
         
      }/ >
        <button className="btn btn-outline-secondary bg-white border-start-0 border searches ms-n3"><span className="form-control-feedback blackcolor"><FaSort/> </span></button>

        </div> </div>
        <div className = 'col-2 ' > < input type = "number" min="0" max="100" multiple="true"
        placeholder = 'age'
        className = 'form-control '
                onChange = {
            (event) => {
                
             const someone=users.filter((data)=>{
              
              if(data.age<=event.target.value ){
        
                return data;
               
                }
                else{
                    if(event.target.value.length==0){
                        return data;
                    }
              }
              
            })
        setpersons(someone);
            console.log(persons)
            
          }
           
        } / >
        
        </div> 
        <div className = 'col-3 ' > 
        <div className = "input-group" >< input type = "text"
        placeholder = 'address'
        className = 'form-control '
        onChange = {
            (event) => {
                
             const someone=users.filter((data)=>{
              
              if(data.address.toLowerCase().includes(event.target.value.toLowerCase())){
                console.log(event)
               
                return data;
              }
            })
        setpersons(someone);
          
            
          }
           
        } / >
        
        <button className="btn btn-outline-secondary bg-white border-start-0 border searches ms-n3"><span className="form-control-feedback blackcolor"><FaSort/> </span></button></div> </div>
        <div className = 'col-1 ' > < input type = "number"
        placeholder = 'phone'
        className = 'form-control '  
        onChange = {
            (event) => {
                
             const someone=users.filter((data)=>{
              
              if(data.phone.toLowerCase().includes(event.target.value.toLowerCase())){
                console.log(event)
               
                return data;
              }
            })
        setpersons(someone);
          
            
          }
           
        } / >
        </div>
        <div className = 'col-2 ' > < select placeholder = 'status'
        className = 'form-select ' 
                onChange = {
            (event) => {
                
             const someone=users.filter((data)=>{
              
              if(data.status.toLowerCase().includes(event.target.value.toLowerCase())){
                console.log(event)
               
                return data;
              }
            })
        setpersons(someone);
          
            
          }
           
        } >
        <option selected="selected" disabled='disabled'>status</option>
        <option > Missed < /option>
        <option > passed < /option>
        <option > Rescheduled < /option> 
        <option > pending < /option>

        </select >
        < /div >
         < /div > 
       

         <Paginate users={persons} />
      
          < / >
    )
}

export default Filter;