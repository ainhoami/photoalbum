import React, { useState, useEffect } from "react"
import { Link} from "react-router-dom"

import axios from "axios"


function Albums(props){

    const id=props.match.params.id
    const [picAlbums,setPicAlbums]=useState([])

    const [albums,setAlbums]=useState([])


    useEffect(()=>{
        axios.get("https://api.jsonbin.io/b/5e8d2d81ab2e011ba96999d6").then(resp =>{
            setAlbums(resp.data.albums)
            
        })
    },[])


    useEffect(()=>{
        axios.get("https://api.jsonbin.io/b/5e8d2d81ab2e011ba96999d6").then(resp =>{
            setPicAlbums(resp.data.pictures.filter(e=>e.albumId ==id))
        })
        },[albums,id])


    return(
        <div className="alpiccontainer">
        
        

            <div className="albums2">
                    <div className="arrow">
                        <Link to={"/"}> <p className="arrowleft"> &larr;</p></Link>
                    </div>
                    <div className="albName">
                    {albums.map(album =>(
                        <Link key={"useralb" + album.id} to={"/albums/" + album.id}><p >{album.name}</p></Link>
                    ))}
                    </div>
            </div>

            <div className="pics">
            {picAlbums.map(picAlbum =>(
                
               
            <Link to={"/pictures/"+ picAlbum.id} params={{picAlbums}} key={"userimg" + picAlbum.id} >
                <div className="images">
                    <img src={picAlbum.url} alt=""/>
                </div>
                <p>{picAlbum.name}</p></Link>
                
                    
            ))}
            </div>
            
        </div>

    )
}

export default Albums