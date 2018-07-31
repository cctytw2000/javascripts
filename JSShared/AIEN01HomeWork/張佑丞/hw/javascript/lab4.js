document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("topp").addEventListener("mouseover", topmosov);
    document.getElementById("topp").addEventListener("mouseout", topmosot);
    document.getElementById("topp").addEventListener("click", topclick);
    document.getElementById("play1").addEventListener("click", playclick);
    document.getElementById("next1").addEventListener("click", nextclick);
    document.getElementById("back1").addEventListener("click", backclick);
    var db = document.querySelectorAll("img.dogbody");
    for (i = 0; i < 5; i++) {
        db[i].addEventListener("mouseover", mouseoverr)
        db[i].addEventListener("mouseout", mouseoutt)
    }
});
var imgnumber = 1
var move1 =true
var tplay =setInterval(autoplay1,500)
setInterval(play2, 0)
function autoplay1 (){
    if(imgnumber < 5){
        window.imgnumber += 1
        document.getElementById("topp").src = "image/dog/" + imgnumber + ".jpg"
        for (k = 0; k < 5; k++) {
            document.querySelectorAll("img.dogbody")[k].style = "border: 3px solid black;"
        }
        document.querySelectorAll("img.dogbody")[(imgnumber - 1)].style = "border: 3px solid red"
        
    }
    else{
        window.imgnumber = 1
        document.getElementById("topp").src = "image/dog/" + imgnumber + ".jpg"
        for (k = 0; k < 5; k++) {
            document.querySelectorAll("img.dogbody")[k].style = "border: 3px solid black;"
        }
        document.querySelectorAll("img.dogbody")[(imgnumber - 1)].style = "border: 3px solid red"
        
    }

}
function play2() {

    if (move1) {
        document.getElementById("play1").src = "image/dog/s.png";
    }
    else {
        document.getElementById("play1").src = "image/dog/p.png";
    }
}
function topclick(){
    xx=imgnumber-1
    var linker =[
        "https://www.google.com/search?q=%E9%AC%86%E7%8D%85%E7%8A%AC&oq=%E9%AC%86%E7%8D%85%E7%8A%AC&aqs=chrome..69i57j69i60.423j0j1&sourceid=chrome&ie=UTF-8",
        "https://www.google.com/search?q=%E7%B4%84%E5%85%8B%E5%A4%8F%E3%B9%B4&oq=%E7%B4%84%E5%85%8B%E5%A4%8F%E3%B9%B4&aqs=chrome..69i57.1016j0j1&sourceid=chrome&ie=UTF-8",
        "https://www.google.com/search?q=%E8%96%A9%E6%91%A9%E8%80%B6%E7%8A%AC&oq=%E8%96%A9%E6%91%A9%E8%80%B6%E7%8A%AC&aqs=chrome..69i57.687j0j9&sourceid=chrome&ie=UTF-8",
        "https://www.google.com/search?q=%E6%B3%95%E5%9C%8B%E9%AC%A5%E7%89%9B%E7%8A%AC&oq=%E6%B3%95%E5%9C%8B%E9%AC%A5%E7%89%9B%E7%8A%AC&aqs=chrome..69i57.544j0j1&sourceid=chrome&ie=UTF-8",
        "https://www.google.com/search?q=%E5%A8%81%E7%88%BE%E6%96%AF%E6%9F%AF%E5%9F%BA%E7%8A%AC&oq=%E5%A8%81%E7%88%BE%E6%96%AF%E6%9F%AF%E5%9F%BA%E7%8A%AC&aqs=chrome..69i57.199j0j1&sourceid=chrome&ie=UTF-8"];
    document.getElementById("http1").href=linker[xx]
}
function playclick() {
    if (move1) {
        clearTimeout(tplay);
        document.getElementById("play1").src = "image/dog/p.png";
        window.move1 = false;
    }
    else {
        document.getElementById("play1").src = "image/dog/s.png";
        window.tplay = setInterval(autoplay1, 500);
        window.move1 = true;
    }
}
function nextclick() {
    if (move1 == false) {
        if (imgnumber <5) {
            window.imgnumber += 1
            document.getElementById("topp").src = "image/dog/" +(imgnumber)+ ".jpg"
            for (k = 0; k < 5; k++) {
                document.querySelectorAll("img.dogbody")[k].style = "border: 3px solid black;"
            }
            document.querySelectorAll("img.dogbody")[(imgnumber-1)].style = "border: 3px solid red"
            
        }
        else  {
            window.imgnumber = 1
            document.getElementById("topp").src = "image/dog/1.jpg"
            for (k = 0; k < 5; k++) {
                document.querySelectorAll("img.dogbody")[k].style = "border: 3px solid black;"
            }
            document.querySelectorAll("img.dogbody")[0].style = "border: 3px solid red"
            
        }
    }
}
function backclick() {
    if (move1 == false) {     
        if (imgnumber > 1) {
            window.imgnumber -= 1    
            document.getElementById("topp").src = "image/dog/" + (imgnumber) + ".jpg"
            for (k = 0; k < 5; k++) {
                document.querySelectorAll("img.dogbody")[k].style = "border: 3px solid black;"
            }
            document.querySelectorAll("img.dogbody")[(imgnumber - 1)].style = "border: 3px solid red"
            
        }
        else if (imgnumber == 1) {
            document.getElementById("topp").src = "image/dog/5.jpg"
            for (k = 0; k < 5; k++) {
                document.querySelectorAll("img.dogbody")[k].style = "border: 3px solid black;"
            }
            document.querySelectorAll("img.dogbody")[4].style = "border: 3px solid red"
            window.imgnumber = 5
        }
    }
}
function topmosov() {
    clearTimeout(tplay);
    window.move1 = false

}
function topmosot() {
    window.tplay = setInterval(autoplay1, 500)
    window.move1 = true
}
function mouseoverr() {
    clearInterval(tplay);
    // alert(String(this.id).substring(0,1))
    var nb1 =Number(String(this.id).substring(0,1))
    // alert(nb1)
    window.imgnumber=nb1
    document.getElementById("topp").src= "image/dog/" + nb1 + ".jpg"

    for (k = 0; k < 5; k++) {
                document.querySelectorAll("img.dogbody")[k].style = "border: 3px solid black;"
            }
    document.querySelectorAll("img.dogbody")[(nb1-1)].style = "border: 3px solid red;"
}             
function mouseoutt() {
    window.tplay = setInterval(autoplay1, 500)
    window.move1 = true
}        
