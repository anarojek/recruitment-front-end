// /** INSERT CUSTOM JS HERE **/
// export default function() {

// }

function playVid() {
    let vid = document.getElementById("myFrame"); 
    vid.style.width = "100%";
    vid.style.height = "100%";

} 

const button = document.getElementById("playVideo");

button.addEventListener("click", ()=>{
    button.style.visibility= "hidden";
 });

 const watchDemo = document.getElementById("watchDemo");

button.addEventListener("click", ()=>{
    watchDemo.style.visibility= "hidden";
 });