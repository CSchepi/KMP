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
    console.log(factor2);
});

function ShowMore(index){
    var button = "mehr"+index;
    var text = "mehrc"+index;
    if(document.getElementById(button).innerText == "mehr")
    {
        document.getElementById(button).innerText = "weniger";
        document.getElementById(text).style.display = "inline";
    }
    else {
        document.getElementById(button).innerText = "mehr";
        document.getElementById(text).style.display = "none";
    }
}