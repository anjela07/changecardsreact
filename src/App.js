import { useState } from "react";
import { User } from "./components/User";
import "./App.css"
import { empl } from "./components/data";



export const App=() =>{
  const [status,setStatus] =useState("director")

 
  // const switchStatus =()=>{
  //   setStatus(!status)
  // }
  const renderUser =()=>{
    switch(status){
      case "employ":
         let arr = empl.filter((el,id)=>{
          return el.status =="employ"
        });
        return arr.map((el,id)=>{
       return <User el={el} key={id} color="pink"/>
        })
        case "manager":
          let arr2 = empl.filter((el,id)=>{
            return el.status =="manager"
          });
          return arr2.map((el,id)=>{
         return <User el={el} key={id} color="green"/>
          })
          case "director":
            let arr3 = empl.filter((el,id)=>{
              return el.status =="director"
            });
            return arr3.map((el,id)=>{
           return <User el={el} key={id} color="blue"/>
            });
            case "all":
              return empl.map((el,id)=>{
                return <User el={el} key={id} color="green"/>
              })
              // case "krg":
              // return arr.map((el,id)=>{
              //   return <User el={el} key={id} color="green"/>
              // })
          default:
            return"";
    }
  }
  return (
    <div className="App">
      <div className="btns-group">
      <button className="btn" onClick={()=> setStatus("employ")} 
      style={
        status == "employ"
        ?{backgroundColor :"rgb(99, 231, 110)"}
        :{backgroundColor:"white"}
      }
      >Младше 18</button>
      <button className="btn" onClick={()=> setStatus("manager")}
       style={
        status == "manager"
        ?{backgroundColor :"rgb(99, 231, 110)"}
        :{backgroundColor:"white"}
      }>От 18 до 40</button>
      <button className="btn" onClick={()=> setStatus("director")}
       style={
        status == "director"
        ?{backgroundColor :"rgb(99, 231, 110)"}
        :{backgroundColor:"white"}
      }>Старше 40</button>
       <button className="btn" onClick={()=> setStatus("all")}
       style={
        status == "all"
        ?{backgroundColor :"rgb(99, 231, 110)"}
        :{backgroundColor:"white"}
      }>Все</button>

{/* <button className="btn" onClick={()=> setStatus("con")}
       style={
        status == "con"
        ?{backgroundColor :"rgb(99, 231, 110)"}
        :{backgroundColor:"white"}
      }>krg</button> */}

   
      </div>
      
      <div className="container">{renderUser()}</div>
    </div>
    
  );
}


