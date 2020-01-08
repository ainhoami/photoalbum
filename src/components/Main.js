import React, { useState, useEffect } from "react"
import { Link} from "react-router-dom"

import axios from "axios"

function Mainp (props){
    const [albums,setAlbums]=useState([])
    useEffect(()=>{
        axios.get("https://ami-photojson.herokuapp.com/api/albums").then(resp =>{
            setAlbums(resp.data)
        })
    },[])

    return(
        <div className="maincontainer"> 
        <p className="title"> I &hearts;  TRAVELLING </p>
        <div className="albums">
            {albums.map(album =>(
                <Link key={"useral" + album.id} to={"/albums/" + album.id}>
                    
                        <div className="onealbum">
                        <img src={album.url}/>
                        <p>{album.name}</p>
                        </div>
                    
                </Link>
            ))}
        </div>
        </div>

    )
}

export default Mainp