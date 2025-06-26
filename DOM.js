// DOM in JavaScript
// DOM stands for Document Object Model. It is a programming interface for HTML and XML documents.
document.title="DOM in JavaScript";
document.getElementById("header").innerHTML="Helloo, World!!";
document.getElementById("paragraph").style.color = "blue";
document.getElementById("paragraph").style.fontSize = "30px";
document.getElementById("header").style.color = "black";
document.body.style.backgroundColor="lightblue";
document.getElementsByClassName("DS")[0].style.color="Red";
document.getElementsByClassName("DS")[1].style.color="Green";
document.getElementsByClassName("DS")[2].style.color="violet";
document.getElementsByClassName("DS")[3].style.color="Orange";
let Kusuma=document.getElementsByClassName("DSA");
Kusuma[0].style.color="Red";
Kusuma[1].style.color="Green";
kusuma[2].style.color="Yellow";
kusuma[3].style.color="Orange";
document.querySelector(".query")[0].style.color="Red";
let depts = document.querySelectorAll(".EB");
elememts[0].style.color="violet";
elememts[1].style.color="Green";
elememts[2].style.color="Yellow";

function changeBackground() {
    if(document.body.style.backgroundColor === "lightblue")
    {
        document.body.style.backgroundColor = "red";
    } 
    else{
        document.body.style.backgroundColor = "green";
    }
    }
function changetext(){
    document.getElementById("clg").innerHTML="CMRCET", "MLRD";
    document.getElementById("clg").style.backgroundColor= "coral";
    document.getElementById("clg").style.backgroundColor= "white";
    document.getElementById("clg").style.fontSize= "30px";
    document.getElementById("clg").style.color= "blue";
    
    
}