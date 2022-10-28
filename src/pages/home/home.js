import "./home.css";
import Sumcard from '../../components/sumcard/sumcard';
import Detail from '../../components/detail/detail';
import Filter from '../../components/filter/filter';
import { FaSearch,FaAngleUp,FaAngleDown,FaSort } from 'react-icons/fa';
import {React,useState,useEffect} from "react";
import { db } from "../../firebase-config";
import {collection,getDocs} from 'firebase/firestore';
import Paginate from '../../components/paginate/paginate'


function Home() {
    const [users,setusers]=  useState([]);
    // const [missed,setmissed]=  useState(0);
    // const [scheduled,setscheduled]=  useState(0);
    // const [passed,setpassed]=  useState(0);
const userscollection =collection(db,"users");


useEffect(()=>{

    const getusers= async()=>{

        const data= await getDocs(userscollection);

        setusers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));

    }
    getusers();
    

},[])


        
const missed=users.filter((datas)=>{
      
    if(datas.status.toLowerCase().includes("missed")){
            
      return datas;
    }
  })
  const Rescheduled=users.filter((datas)=>{
      
    if(datas.status.toLowerCase().includes("rescheduled")){
            
      return datas;
    }
  })
  const passed=users.filter((datas)=>{
      
    if(datas.status.toLowerCase().includes("passed")){
            
      return datas;
    }
  })


       
  



    return ( 
        <>

        <div className = 'background' >

        <div className = 'full' >
        <div className = 'stylecolor' > DrNG | PATIENTS < /div> 
        < /div >
        <div className = "container-fluid" >
        <div className = "row" >
        <div className = "col" > < /div> 
        <div className = "col-7 some" > Appointments < br / > < div className = "lines" > _______ < /div>  < /div >

        <div className = "col-2 mar" >
        <div className = "input-group" >
        <input type = "text"
        className = "form-control"
        placeholder = "Search" / ><button className="btn btn-outline-secondary bg-white border-start-0 border searches ms-n3"><span className="form-control-feedback searches"><FaSearch/> </span></button>
        </div >
        < /div >
        <div className = "col" > < /div>
        < /div >
        <div className = "row" >
        <div className = "col" > < /div> 
        <div className = 'col-3' >
            
            {/*calling various cards of percentage  */}
        <Sumcard status = "Missed"
        number = {missed.length}
        ncolor = "red "
        bcolor = "pink" 
        />
        </div>
        <div className = 'col-3' > 
        <Sumcard status = "Rescheduled"
        number = {Rescheduled.length}
        ncolor = "orange "
        bcolor = "rgb(243, 222, 154)" / >
        < /div>  <
        div className = 'col-3' >
        <Sumcard status ={ "Passed"}
        number = {passed.length}
        ncolor = "green "
        bcolor = " rgb(207, 221, 204)" / > <
        /div> 

        <
        div className = "col" > < /div>  

        <
        /div> 


<div className="row">
<div className="col-1"></div>
<div className="col-11">
      < Filter users = { users }
                / ></div>
</div>

         <
        /
        div > <
        /div>

        <
        />

    );
}

export default Home;