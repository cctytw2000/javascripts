var imgStars = document.querySelectorAll('img.myStar');
var imgStarLen = imgStars.length;


document.addEventListener("DOMContentLoaded", function(){

    for(var i=0; i<imgStarLen; i++){
        imgStars[i].addEventListener("mouseover", mouseOver);
        imgStars[i].addEventListener("mouseout", mouseOut);
        imgStars[i].addEventListener("click", Click);  
    }
});

   
function mouseOver(){
    var subLen = this.id.substr(7)-1;
    for(j=0; j<=subLen; j++){
    imgStars[j].src = "images/chngstar.gif";
    document.getElementById('idJudge').innerHTML = "<h1>打分中..."+this.id.substr(7)+"</h1>";
    }
}

function mouseOut(){
    var subLen = this.id.substr(7)-1;
    for(j=0; j<=subLen; j++){
    imgStars[j].src = "images/star.gif";
    document.getElementById('idJudge').innerHTML = "";
    }
}

function Click(){
    document.getElementById('idJudge').innerHTML = "<h1>你給"+this.id.substr(7)+"顆星!</h1>";
}