import React, { useState, useEffect } from "react"
import { Link} from "react-router-dom"

import axios from "axios"
var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
function Mainp (props){
    const [albums,setAlbums]=useState([])
    useEffect(()=>{
        // axios.get("https://api.myjson.com/bins/wyh06/").then(resp =>{
        //     setAlbums(resp.data.albums) "app.fakejson.com/q/A9tSZZ1U?token=9hhKdBxYdiDQrvzIH_s9bw",{withCredentials: true}
        //     console.log("TRiki")
        // })
        axios.get("https://api.jsonbin.io/b/5e8d2d81ab2e011ba96999d6").then(resp =>{
            console.log(resp, "data")
            setAlbums(resp.data.albums)
            console.log(resp, "data")
        }).catch(console.error)

    },[])

    return(
        <div className="maincontainer"> 
        <p className="title"> I &hearts;  TRAVELLING </p>
        <div className="albums">
            {albums.map(album =>(
                <Link key={"useral" + album.id} to={"/albums/" + album.id}>
                    
                        <div className="onealbum">
                        <img src={album.url} alt=""/>
                        <p>{album.name}</p>
                        </div>
                    
                </Link>
            ))}
        </div>
        </div>

    )
}

export default Mainp