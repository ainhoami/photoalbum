import React, { useState, useEffect } from "react"
import { Link} from "react-router-dom"
import axios from "axios"


function Pictures(props){
    let id=props.match.params.id
    const [pic,setPic]=useState([])
    const [picAlbums,setPicAlbums]=useState([])
    const [albName, setAlbName]=useState("")
    let picc=0
    

function handleclickl(e){
    idAlb.includes(Number(id)-1) ? picc=Number(id) - 1 : picc=idAlb[5]
    
    props.history.push("/pictures/" + picc)
    }


function handleclickr(e){
idAlb.includes(Number(id)+1) ? picc=Number(id) + 1 : picc=idAlb[0]
props.history.push("/pictures/" + picc)    
}

    
    useEffect(()=>{
        
        axios.get("https://api.myjson.com/bins/wyh06/").then(resp =>{
            setPic(resp.data.pictures.filter(e=> e.id==id)[0])
            
        })
    },[id])

    //z
   
   
    
    useEffect(()=>{
        if (pic.albumId!=undefined)
        axios.get("https://api.myjson.com/bins/wyh06").then(resp =>{
         setPicAlbums(resp.data.pictures.filter(e=> e.albumId==pic.albumId))
         setAlbName(resp.data.albums.filter(e=>e.id == pic.albumId)[0]) 
        
        })
    },[pic.albumId])
           
    
    let idAlb=picAlbums.map((e,i)=> picAlbums[i].id)

    return(
        <div className="picContainer">
            
            <div className="carousel">
               <Link to={"/albums/"+pic.albumId}> <p className="arrowl"> &larr;</p></Link>
                
               <button  onClick={handleclickl}>&#171;</button>
                <button onClick={handleclickr}>&#187;</button>
                <img src={pic.url} alt=""/>
                <p className="picname"> {albName.name} - {pic.name}</p>
            </div>

            
            
        </div>

    )
}


export default Pictures