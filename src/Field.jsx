import dope from "./assets/dope.jpg"
import fade from "./assets/fade.jpg"
function Field(){
    const link = "https://fieldmedic.net";
    const artist = "Field Medic";
    const albums = [
        {
            title:"dope girl chronicles",
            tracklist: ["100 ghosts", "silver girl","clear thoughts of morning","love don't come"],
            albumCover: dope
        },
        {
            title:"fade into the dawn",
            tracklist: ["used to be romantic", "i was wrong","the bottle's my lover, she's just my friend"],
            albumCover: fade
        }
    ]
    return {link,artist, albums}
}
export default Field