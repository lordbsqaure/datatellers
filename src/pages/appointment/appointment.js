import "./appointment.css";
import Sumcard from '../../components/sumcard/sumcard'
import { async } from "@firebase/util";
import { React, useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { FaBeer,FaArrowLeft } from 'react-icons/fa';
import { Link ,Route, Routes,useParams} from 'react-router-dom';




function Appointment() {
    const params=useParams();
    const [newname, setnewname] = useState("");
    const [newage, setnewage] = useState(0);
    const [newsex, setnewsex] = useState("male");
    const [newphone, setnewphone] = useState(0);
    const [newemail, setnewemail] = useState("");
    const [newcity, setnewcity] = useState("");
    const [newaddress, setnewaddress] = useState("");
    const [newstatus, setnewstatus] = useState("pending");
    const [code, setnewcode] = useState("pending");
    let newcode ;
    const [newappointment, setnewappointment] = useState("");
    const [newbefore, setnewbefore] = useState("");
    const [newafter, setnewafter] = useState("");
    const [newfirsttime, setnewfirsttime] = useState("no");
    const [newrequest, setnewrequest] = useState("");
    const [newtime, setnewtime] = useState("");
    const [users,setusers]=  useState([])
    const [ newindividual, setnewindividual]=  useState([]);
    const [home,sethome]=  useState(false);
    const userscollection = collection(db, "users");

    useEffect(()=>{


        const getusers= async()=>{

            const data= await getDocs(userscollection);
        

            setusers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
            const someone=data.docs.map((doc)=>({...doc.data(),id:doc.id})).filter((data)=>{
              
                if(data.id==params.id){
                    document.getElementById('code').value=data.code
                    document.getElementById('name').value=data.name
                    document.getElementById('age').value=data.age
                     document.getElementById('sex').value=data.sex
                    document.getElementById('phone').value=data.phone
                    document.getElementById('email').value=data.email
                    document.getElementById('appointment').value=data.appointment
                    document.getElementById('firsttime').value=data.firsttime
                   //  document.getElementById('status').value=data.status
                    document.getElementById('time').value=data.time
                    document.getElementById('address').value=data.address
                    document.getElementById('city').value=data.city
                    document.getElementById('before').value=data.before
                    document.getElementById('after').value=data.after
                    setnewcode(data.code)
                    setnewname(data.name)
                    setnewage(data.age)
                    setnewsex(data.sex)
                    setnewphone(data.phone)
                    setnewemail(data.email)
                    setnewappointment(data.appointment)
                    setnewfirsttime(data.firsttime)
                    setnewstatus(data.status)
                    setnewaddress(data.address)
                    setnewcity(data.city)
                    setnewbefore(data.before)
                    setnewafter(data.after)
                    setnewcode(data.code)
                 
                  return data;
                }
              })
              console.log(someone)
              setnewindividual(someone);
         
             ;
    
        }
        getusers();

      
  
    
    },[])
   

   

    const Createuser = async() => {
        console.log(newtime)
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!newemail.match(mailformat))
{
alert("not a Valid email address!");
return ;
}
        if(newname===""){
           
            alert('please enter name')
            return
        }
        else if(newage===0){
           
            alert('please enter age')
            return
        }
        else if(newphone===0){
           
            alert('please enter phone number')
            return
        }
        else if(newemail===""){
           
            alert('please enter email')
            return
        }
        else if(newappointment===""){
           
            alert('please enter appointment date')
            return
        }
        else if(newaddress===""){
           
            alert('please enter address')
            return
        }
        else if(newcity===""){
           
            alert('please enter city')
            return
        }
       

    
        if(newfirsttime==="Yes"){
            const arrays=newappointment.split("-")
            console.log(arrays)
         
            if(users.length<10){
             
                newcode="A0"+users.length+""+arrays[2]+""+arrays[1]+""+arrays[0];
            }else{
                newcode="A"+users.length+""+arrays[2]+""+arrays[1]+""+arrays[0];
            }
            
            
            }else{
                if(code==""){return alert("please enter your code");}
                else{
                    const someone=users.filter((data)=>{
                        if(data.code==newcode ){
                        if(data.email.toLowerCase()!==newemail ||data.name.toLowerCase()!==newname.toLocaleLowerCase ||data.sex.toLowerCase()!==newsex || data.age.toLowerCase()!==newage){
                      console.log("hello")
                         
                          return false;
                        }
                      }
                      })
                      if(!someone){
                        return  alert("check your email ,age,name and sex again")
                      } 
                      
       
                }
               
                newcode=code;
            }
            console.log(newcode)

  
    
        const result = {
            name: newname,
            age: newage,
            sex: newsex,
            phone:newphone,
            email:newemail,
            status:newstatus,
            address:newaddress,
            city:newcity,
            code:newcode,
            appointment:newappointment,
            request:newrequest,
            firsttime:newfirsttime,
            before:newbefore,
            after:newafter

        }


        if(await addDoc(userscollection, result)){
           sethome(true);
           alert("succesfully registered")
        }
      else{
          alert("connection problem")
      }
    }
    return ( <
        >
        <
        div className = " background" >
        <
        div className = 'full' >
        <
        div className = 'stylecolor' > DrNG | PATIENTS < /div> < /
        div >
        <
        div className = "containers" >

        <
        /div>

        <
        div className = "container-fluid" >
        <
        div className = "row my-5" >
        <
        div className = "col wall px-4 " ><Link to="/" className="coloring"><FaArrowLeft /> </Link>< /div > <
        div className = "col-5 record " > NEW RECORD < /div> <
        div className = "col-6 line" > ______ < /div> <
        div className = "col" > < /div>

        <
        /div>  <
        div className = "row my-3" >
        <
        div className = "col" > < /div> <
        div className = "col-11 gen" > General information < /div> <
        div className = "col" > < /div> < /
        div >
        <
        div className = "row" >
        <
        div className = "col" > < /div> <
        div className = "col-1 from-control " > unique code: < input readOnly={false} type = "text" id="code"
        className = "form-control my-2" 
        //  value={params.id && users.length>0? newindividual[0].code:""}
        onChange = {
            (event) => { setnewcode(event.target.value) }
        }
         
        / >
        <
        /div>  <
        div className = "col-2 " > Name < input type = "text" id="name"
        className = "form-control my-2"
        onChange = {
            (event) => { setnewname(event.target.value) }
        }
        / > < /div > <
        div className = "col-1 " > Age < input type = "number" id="age"
        className = "form-control my-2"
        onChange = {
            (event) => { setnewage(event.target.value) }
        }
        / > < /div >

        <
        div className = "col-2 " > Sex < select className = "form-select my-2" id="sex"
        value={params.id && newindividual.length>0? newindividual[0].sex:""}
        onChange = {
            (event) => { setnewsex(event.target.value) }
        } >
        <
        option > Male < /option> <
        option > female < /option> < /
        select > < /div > <
        div className = "col-2 " > Phone < input type = "number" id="phone"
        className = "form-control my-2"
        onChange = {
            (event) => { setnewphone(event.target.value) }
        }
        / > < /div > <
        div className = "col-3  px-5" > Email < input type = "email" id="email"
        className = "form-control my-2 "
        onChange = {
            (event) => { setnewemail(event.target.value) }
        }
        / > < /div > <
        div className = "col" > < /div> < /
        div >


        <
        div className = "line" > <
        hr / > < /div>

        <
        div className = "row my-3" >
        <
        div className = "col" > < /div> <
        div className = "col-11 gen" > Appointment information < /div> <
        div className = "col" > < /div> < /
        div >
        <
        div className = "row" >
        <
        div className = "col" > < /div> <
        div className = "col-2 from-control " > Appointment date < input type = "date"name="date" placeholder="dd-mm-yyyy" format="DD-MM-YYYY"
        id="appointment"className = "form-control my-2" onChange = {
            (event) => { setnewappointment(event.target.value) }
        }/ >
        <
        /div>  <
        div className = "col-2 " > First time < select className = "form-select my-2" id="firsttime" onChange = {
            (event) => { setnewfirsttime(event.target.value) }
        }> < option > No < /option> <
        option > Yes < / option > < /select > < /
        div > <
        div className = "col-2 from-control " > request date < input type = "date" id="request"
        className = "form-control my-2"  onChange = {
            (event) => { setnewrequest(event.target.value) }
        }/ >
        <
        /div><
        div className = "col-3 " > Appointment status < select className = "form-select my-2" id="appointment"
        value={params.id && newindividual.length>0? newindividual[0].status:""}
        onChange = {
            (event) => { setnewstatus(event.target.value) }
        } >
        <
        option > pending < /option> <
        option > rescheduled < / option >  <
        option > missed < / option >  <
        option > passed < / option >  < /
        select > < /
        div > <
        div className = "col-2  " > Appointment time < input type = "time" id="time"
        className = "form-control my-2 " 
        
        onChange = {
            (event) => { setnewtime(event.target.value) }
        }/ > < /div><
        div className = "col" > < /div> < /
        div >

        <
        div className = "row my-4" >
        <
        div className = "col" > < /div> <
        div className = "col-11 gen" > Address information < /div> <
        div className = "col" > < /div> < /
        div >

        <
        div className = "row" >
        <
        div className = "col" > < /div> <
        div className = "col-3 from-control " > Address 1 < input type = "text" id="address"
        className = "form-control my-2"
        onChange = {
            (event) => { setnewaddress(event.target.value) }
        }
        / > < /
        div >
        <
        div className = "col-2" > City < input type = "text" id="city"
        className = "form-control my-2"
        onChange = {
            (event) => { setnewcity(event.target.value) }
        }
        / > < /div > <
        div className = "col-6" > < /div>  <
        div className = "col" > < /div> 

        <
        /div>


        <
        div className = "row my-4" >
        <
        div className = "col" > < /div> <
        div className = "col-11 gen" > Notes < /div> <
        div className = "col" > < /div> < /
        div >

        <
        div className = "row" >
        <
        div className = "col" > < /div> <
        div className = "col-3 from-control " > Before Appointment<textarea 
        className = "form-control my-2" rows="4" id="before" onChange = {
            (event) => { setnewbefore(event.target.value) }
        }/ >
        <
        /
        div >
        <
        div className = "col-2" > After Appointment < textarea type = "text"
        className = "form-control my-2" rows="4"  id="after"  onChange = {
            (event) => { setnewafter(event.target.value) }
        }/ > < /div> <
        div className = "col-6" > < /div>  <
        div className = "col" > < /div> 

        <
        /div>

        <
        div className = "row" >
        <
        div className = "col" > < /div> <
        div className = "col-1 m-3" > < button type = "button"
        className = "btn btn-danger"
        onClick = { Createuser } > save < /button>
       
        < /div > <
        /div> < /
        div >

        <
        /div>

        <
        / >
    );
}
export default Appointment;