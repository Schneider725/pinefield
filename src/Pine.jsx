import eleven from "./assets/11-11.jpg"
import soFar from "./assets/pinegrove.jpg"
function Pine(){
    const link = "https://pinegrove.merchtable.com";
    const artist = "Pinegrove";
    const albums = [
        {
            title:"11:11",
            tracklist: ["habitat","alaska","iodine","orange","flora","respirate","let","so what","swimming","cyclone"],
            albumCover: eleven
        },
        {
            title:"everything so far",
            tracklist:["new friends", "angelina","problems","need","overthrown","size of the moon"],
            albumCover: soFar
        }
    ]
    return {link,artist, albums}
}
export default Pine