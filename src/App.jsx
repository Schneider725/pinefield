import {useState} from "react";
import Display from "./Display.jsx";
import Field from "./Field.jsx";
import Pine from "./Pine.jsx";
import './index.css'
function App(){
    const [count, setCount] = useState(0)
    const albumData = [
        Field(),
        Pine()
    ]
    return(
        <>
            <div className={"container"}>
            <button className={"container"} onClick={() => setCount((count) => (count + 1) % albumData.length)}>Change Artist</button>
            <Display link={albumData[count].link} artist={albumData[count].artist} albums={albumData[count].albums} />
            </div>
        </>
    )
}
export default App
