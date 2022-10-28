import './detail.css';
import React from 'react';


function Detail({ person }) {
    let color;
    let background;
    if(person.status=="missed"){
        color="red";background="rgb(245, 208, 201)"
    }else if(person.status=="rescheduled"){ color="orange";background="rgb(247, 237, 147)"}
    else if(person.status=="passed"){ color="green";background="rgb(196, 248, 207)"}
    else if(person.status=="pending"){ color="purple";background="rgb(245, 186, 245)"}
    return ( 
        <>
        { console.log() } 
        <div className = 'container-fluid p-0 m-0  ' >
        <div className = 'row show p-2    ' >
        <div className = 'col-3' > { person.name } < /div> 
         <div className = 'col-2' > {person.code} < /div>  <
        div className = 'col-5' > {person.age} < /div>  <
        div className = 'col-2' > < div className = 'result px-3' style = {
           {color:color,background :background }
        }> {person.status} < /div>< /div > < /
        div >

        <
        /div> < / >
    )
}

export default Detail;