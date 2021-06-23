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


var hovers = false;


//0
var img0 = document.getElementById("img0");
var anm0 = document.getElementById("Animation0")
var S0 = new Audio("Animations/A0/KMP1_1_1.mp3");

//Hover Animation controll
if(img0 != null && anm0 != null){
    img0.addEventListener("mouseover", function (event){
        hovers = true;
        console.log("Start Animation");
        setTimeout(()=>{
            if(hovers){
                var giflink = anm0.getAttribute("src");
                var backgroundimg = img0.getAttribute("src")
                console.log( giflink);
                S0.loop = true;
                anm0.style.display ="inline";
                anm0.setAttribute("src", backgroundimg);
                setTimeout(()=>{
                    anm0.setAttribute("src", giflink);
                    S0.currentTime = 0;
                    S0.play();
                },50)

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
}


//1
var img1 = document.getElementById("img1");
var anm1 = document.getElementById("Animation1")
var S1 = new Audio("Animations/A1/KMP2_Backgrounds.mp3");
//Hover Animation controll
if(img1 != null && anm1 != null) {
    img1.addEventListener("mouseover", function (event) {
        hovers = true;
        console.log("Start Animation");
        setTimeout(() => {
            if (hovers) {
                var giflink = anm1.getAttribute("src");
                var backgroundimg = img1.getAttribute("src")
                console.log(giflink);
                S1.loop = true;
                anm1.style.display = "inline";
                anm1.setAttribute("src", backgroundimg);
                setTimeout(() => {
                    anm1.setAttribute("src", giflink);
                    S1.currentTime = 0;
                    S1.play();
                }, 50)

            }
        }, 450)
    }, false)
    anm1.addEventListener("mouseleave", function (event) {
        hovers = false;
        anm1.style.display = "none";
        S1.pause();
    }, false)
    img1.addEventListener("mouseleave", function (event) {
        if (anm1.style.display == "none") {
            hovers = false;
        }
    }, false)
}

//2
var img2 = document.getElementById("img2");
var anm2 = document.getElementById("Animation2")
var S2 = new Audio("Animations/A2/Sonnenacker_02_25_1.mp3");
//Hover Animation controll
if(img2 != null && anm2 != null) {
    img2.addEventListener("mouseover", function (event) {
        hovers = true;
        console.log("Start Animation");
        setTimeout(() => {
            if (hovers) {
                var giflink = anm2.getAttribute("src");
                var backgroundimg = img2.getAttribute("src")
                console.log(giflink);
                S2.loop = true;
                anm2.style.display = "inline";
                anm2.setAttribute("src", backgroundimg);
                setTimeout(() => {
                    anm2.setAttribute("src", giflink);
                    S2.currentTime = 0;
                    S2.play();
                }, 50)

            }
        }, 450)
    }, false)
    anm2.addEventListener("mouseleave", function (event) {
        hovers = false;
        anm2.style.display = "none";
        S2.pause();
    }, false)
    img2.addEventListener("mouseleave", function (event) {
        if (anm2.style.display == "none") {
            hovers = false;
        }
    }, false)
}

//3
var img3 = document.getElementById("img3");
var anm3 = document.getElementById("Animation3")
var S3 = new Audio("Animations/A3/Unbenannt-1_1_1.mp3");
//Hover Animation controll
if(img3 != null && anm3 != null) {
    img3.addEventListener("mouseover", function (event) {
        hovers = true;
        console.log("Start Animation");
        setTimeout(() => {
            if (hovers) {
                var giflink = anm3.getAttribute("src");
                var backgroundimg = img3.getAttribute("src")
                console.log(giflink);
                S3.loop = true;
                anm3.style.display = "inline";
                anm3.setAttribute("src", backgroundimg);
                setTimeout(() => {
                    anm3.setAttribute("src", giflink);
                    S3.currentTime = 0;
                    S3.play();
                }, 50)

            }
        }, 450)
    }, false)
    anm3.addEventListener("mouseleave", function (event) {
        hovers = false;
        anm3.style.display = "none";
        S3.pause();
    }, false)
    img3.addEventListener("mouseleave", function (event) {
        if (anm3.style.display == "none") {
            hovers = false;
        }
    }, false)
}

