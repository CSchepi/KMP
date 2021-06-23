window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    var factor1 = "0px "+(100-((scroll+900)/30))+"%";
    var factor2 = "0px "+(100-((scroll+200)/30))+"%";
    var factor3 = "0px "+(100-((scroll-500)/30))+"%";
    var factor4 = "0px "+(100-((scroll-1200)/30))+"%";
    var factor5 = "0px "+(100-((scroll-1900)/30))+"%";
    document.getElementById("zb1").style.backgroundPosition =factor1;
    document.getElementById("zb2").style.backgroundPosition =factor2;
    document.getElementById("zb3").style.backgroundPosition =factor3;
    document.getElementById("zb4").style.backgroundPosition =factor4;
    document.getElementById("zb5").style.backgroundPosition =factor5;
});

function ShowMore(index){
    var button = "mehr"+index;
    var text = "mehrc"+index;
    var box = "box"+index
    if(document.getElementById(button).innerText == "mehr")
    {
        document.getElementById(button).innerText = "weniger";
        document.getElementById(text).style.display = "inline";
        document.getElementById(box).style.height = "500px";
    }
    else {
        document.getElementById(button).innerText = "mehr";
        document.getElementById(text).style.display = "none";
        document.getElementById(box).style.height = "200px";
    }
}

var img0 = document.getElementById("img0");
var anm0 = document.getElementById("Animation0")
var S0 = new Audio("Animations/S0.mp3");

var hovers = false;

img0.addEventListener("mouseover", function (event){
    hovers = true;
    console.log("Start Animation");
    setTimeout(()=>{
       if(hovers){
           var giflink = anm0.getAttribute("src");
           vsr backgroundimg = img0.getAttribute("src")
           console.log( giflink);
           S0.loop = true;
           anm0.style.display ="inline";
           anm0.setAttribute("src", giflink);
           setTimeout(()=>{
               anm0.setAttribute("src", giflink);
               S0.currentTime = 0;
               S0.play();
           },500)

        }
    },450)
},false)
anm0.addEventListener("mouseleave", function (event){
    hovers = false;
    anm0.style.display ="none";
    S0.pause();
},false)
img0.addEventListener("mouseleave", function (event){
    if(anm0.style.display == "none"){
        hovers = false;
    }
},false)
