document.addEventListener("DOMContentLoaded",function(){
    // document.getElementById("star1").addEventListener("mouseover",mouseOver);
    // document.getElementById("star1").addEventListener("mouseout",mouseOut);
    // document.getElementById("star2").addEventListener("mouseover",mouseOver);
    // document.getElementById("star2").addEventListener("mouseout",mouseOut);
    // document.getElementById("star3").addEventListener("mouseover",mouseOver);
    // document.getElementById("star3").addEventListener("mouseout",mouseOut);
    // document.getElementById("star4").addEventListener("mouseover",mouseOver);
    // document.getElementById("star4").addEventListener("mouseout",mouseOut);
    // document.getElementById("star5").addEventListener("mouseover",mouseOver);
    // document.getElementById("star5").addEventListener("mouseout",mouseOut);

    var strr1 =document.querySelectorAll("img.starr")
    var strr1len =strr1.length
    for (var i=0 ; i<strr1len ;i++){
        strr1[i].addEventListener("mouseover",mouseOver);
        strr1[i].addEventListener("mouseout",mouseOut);
        strr1[i].addEventListener("click",Click);
        strr1[i].addEventListener("dblclick",dblClick);
        }

});
var xxxx=false
function mouseOver(){
    var a = this.id
    var alen = (this.id).length
    var b = String(a).substring(alen-1)
    if (xxxx==false)
    for(var j=0; j<b ;j++){
    document.images[j].src="image/chngstar.gif";  
    document.getElementById("str1").innerHTML="評分中...."+(j+1);}  
}
function Click(){
    var a = this.id
    // var alen = (this.id).length
    var b = String(a).substring(4)
    if (xxxx==false){
    document.getElementById("str1").innerHTML="你給的是"+b+"分"
    return window.xxxx=true;
    }

}
function dblClick(){
    document.getElementById("str1").innerHTML=""
    return window.xxxx=false
}

function mouseOut(){
    if (xxxx==false)
        for(var k=0; k<5 ;k++)
        document.images[k].src="image/star.gif"
        // document.getElementById("str1").innerHTML=""

}
