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

window.addEventListener('resize', () => {
  let width = window.innerWidth;
  document.get
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

//4
var img4 = document.getElementById("img4");
var anm4 = document.getElementById("Animation4")
var S4 = new Audio("Animations/A4/KMP4_1.mp3");
//Hover Animation controll
if(img4 != null && anm4 != null) {
    img4.addEventListener("mouseover", function (event) {
        hovers = true;
        console.log("Start Animation");
        setTimeout(() => {
            if (hovers) {
                var giflink = anm4.getAttribute("src");
                var backgroundimg = img4.getAttribute("src")
                console.log(giflink);
                S4.loop = true;
                anm4.style.display = "inline";
                anm4.setAttribute("src", backgroundimg);
                setTimeout(() => {
                    anm4.setAttribute("src", giflink);
                    S4.currentTime = 0;
                    S4.play();
                }, 50)

            }
        }, 450)
    }, false)
    anm4.addEventListener("mouseleave", function (event) {
        hovers = false;
        anm4.style.display = "none";
        S4.pause();
    }, false)
    img4.addEventListener("mouseleave", function (event) {
        if (anm4.style.display == "none") {
            hovers = false;
        }
    }, false)
}

//5
var img5 = document.getElementById("img5");
var anm5 = document.getElementById("Animation5")
var S5 = new Audio("Animations/A5/KMP5.mp3");
//Hover Animation controll
if(img5 != null && anm5 != null) {
    img5.addEventListener("mouseover", function (event) {
        hovers = true;
        console.log("Start Animation");
        setTimeout(() => {
            if (hovers) {
                var giflink = anm5.getAttribute("src");
                var backgroundimg = img5.getAttribute("src")
                console.log(giflink);
                S5.loop = true;
                anm5.style.display = "inline";
                anm5.setAttribute("src", backgroundimg);
                setTimeout(() => {
                    anm5.setAttribute("src", giflink);
                    S5.currentTime = 0;
                    S5.play();
                }, 50)

            }
        }, 450)
    }, false)
    anm5.addEventListener("mouseleave", function (event) {
        hovers = false;
        anm5.style.display = "none";
        S5.pause();
    }, false)
    img5.addEventListener("mouseleave", function (event) {
        if (anm5.style.display == "none") {
            hovers = false;
        }
    }, false)
}

//6
var img6 = document.getElementById("img6");
var anm6 = document.getElementById("Animation6")
var S6 = new Audio("Animations/A6/KMP6.mp3");
//Hover Animation controll
if(img6 != null && anm6 != null) {
    img6.addEventListener("mouseover", function (event) {
        hovers = true;
        console.log("Start Animation");
        setTimeout(() => {
            if (hovers) {
                var giflink = anm6.getAttribute("src");
                var backgroundimg = img6.getAttribute("src")
                console.log(giflink);
                S6.loop = true;
                anm6.style.display = "inline";
                anm6.setAttribute("src", backgroundimg);
                setTimeout(() => {
                    anm6.setAttribute("src", giflink);
                    S6.currentTime = 0;
                    S6.play();
                }, 50)

            }
        }, 450)
    }, false)
    anm6.addEventListener("mouseleave", function (event) {
        hovers = false;
        anm6.style.display = "none";
        S6.pause();
    }, false)
    img6.addEventListener("mouseleave", function (event) {
        if (anm6.style.display == "none") {
            hovers = false;
        }
    }, false)
}

//7
var img7 = document.getElementById("img7");
var anm7 = document.getElementById("Animation7")
var S7 = new Audio("Animations/A7/KMP7.mp3");
//Hover Animation controll
if(img7 != null && anm7 != null) {
    img7.addEventListener("mouseover", function (event) {
        hovers = true;
        console.log("Start Animation");
        setTimeout(() => {
            if (hovers) {
                var giflink = anm7.getAttribute("src");
                var backgroundimg = img7.getAttribute("src")
                console.log(giflink);
                S7.loop = true;
                anm7.style.display = "inline";
                anm7.setAttribute("src", backgroundimg);
                setTimeout(() => {
                    anm7.setAttribute("src", giflink);
                    S7.currentTime = 0;
                    S7.play();
                }, 50)

            }
        }, 450)
    }, false)
    anm7.addEventListener("mouseleave", function (event) {
        hovers = false;
        anm7.style.display = "none";
        S7.pause();
    }, false)
    img7.addEventListener("mouseleave", function (event) {
        if (anm7.style.display == "none") {
            hovers = false;
        }
    }, false)
}

//8
var img8 = document.getElementById("img8");
var anm8 = document.getElementById("Animation8")
var S8 = new Audio("Animations/A8/KMP8.mp3");
//Hover Animation controll
if(img8 != null && anm8 != null) {
    img8.addEventListener("mouseover", function (event) {
        hovers = true;
        console.log("Start Animation");
        setTimeout(() => {
            if (hovers) {
                var giflink = anm8.getAttribute("src");
                var backgroundimg = img8.getAttribute("src")
                console.log(giflink);
                S8.loop = true;
                anm8.style.display = "inline";
                anm8.setAttribute("src", backgroundimg);
                setTimeout(() => {
                    anm8.setAttribute("src", giflink);
                    S8.currentTime = 0;
                    S8.play();
                }, 50)

            }
        }, 450)
    }, false)
    anm8.addEventListener("mouseleave", function (event) {
        hovers = false;
        anm8.style.display = "none";
        S8.pause();
    }, false)
    img8.addEventListener("mouseleave", function (event) {
        if (anm8.style.display == "none") {
            hovers = false;
        }
    }, false)
}


