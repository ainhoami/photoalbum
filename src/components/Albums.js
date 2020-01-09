import React, { useState, useEffect } from "react"
import { Link} from "react-router-dom"

import axios from "axios"


function Albums(props){

    const id=props.match.params.id
    const [picAlbums,setPicAlbums]=useState([])

    const [albums,setAlbums]=useState([])


    useEffect(()=>{
        axios.get("https://ami-photojson.herokuapp.com/api/albums").then(resp =>{
            setAlbums(resp.data)
        })
    },[])

    useEffect(()=>{
        axios.get("https://ami-photojson.herokuapp.com/api/albums/"+id + "?_embed=pictures").then(resp =>{
            setPicAlbums(resp.data.pictures)
        })
        },[albums,id])
       // console.log(picAlbums)
//let filtered = picAlbums.filter(e => e.albumId==id)

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