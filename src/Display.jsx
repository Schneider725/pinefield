import {useState} from "react";
import './index.css'
function Display({link,artist, albums}){
    const [count, setCount] = useState(0);
    const tracklist = albums[count].tracklist.map((track,index) => (
        <li key={index}>{track}</li>
    ))
    return(
        <>
            <div className={"albumContainer"}>
                <div className={"container"}>
            <button onClick={() => setCount((count) => (count + 1) % albums.length)}>Change Album</button>
                </div>
            <div>
                <a href={link} target="_blank"> <p>{artist}</p> </a>
                <img className={"albumCover"} src={albums[count].albumCover} alt={"album cover"}/>
                <ul>
                    {tracklist}
                </ul>
            </div>
            </div>
        </>
    )
}
export default Display