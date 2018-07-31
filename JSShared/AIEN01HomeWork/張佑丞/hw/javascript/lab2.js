
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name2").addEventListener("blur",namechk);
    document.getElementById("pw1").addEventListener("blur",pwchk);
    document.getElementById("date1").addEventListener("blur",dtchk);
});
var x1=false;
var y4=false;
var d1 =false;

function namechk(){
    
    var name1 =document.getElementById("name2").value
    if (name1 == ""){
    document.getElementById("spanname").innerHTML="<img src='image/1.png'>不可空白";
    return window.x1=false}
    else if (name1.length < "2"){
    document.getElementById("spanname").innerHTML="<img src='image/1.png'>最少要有兩個字";
    return window.x1=false}
    else {
        var strobj1 =new String([name1])
        for (i=0;i < name1.length ;i++)
            if (strobj1.charCodeAt(i)< "19968" || strobj1.charCodeAt(i) > "40959"){
                document.getElementById("spanname").innerHTML="<img src='image/1.png'>必須全部中文字";
                return window.x1=false}
            else{
                document.getElementById("spanname").innerHTML="<img src='image/2.png'>正確";}
               return window.x1=true
                
        }
}
function pwchk(){
    var pwd=document.getElementById("pw1").value;
    var pwdlen=pwd.length;
    var y1=false;
    var y2=false;
    var y3=false;
    
    if (pwd == ""){
        document.getElementById("spanpw").innerHTML="<img src='image/1.png'>不可空白";
        return window.y4=false}
    else if (pwdlen < 6){
        document.getElementById("spanpw").innerHTML="<img src='image/1.png'>至少6個字";
        return window.y4=false}
    else if (pwdlen >= 6 ){
        for(var i =0;i<pwdlen; i++){
            var pwdlenchr = pwd.charAt(i).toUpperCase()
            if (pwdlenchr >= "A" && pwdlenchr <= "Z")
                y1=true
            else if (pwdlenchr >="0" && pwdlenchr <= "9")
                y2=true
            else{
                var xxx =new String("!@#$%^&*")    
                    for(var j =0;j<pwdlen; j++)
                        for(var i =0;i<xxx.length;i++)
                            if (pwd[j] == xxx[i])
                                y3=true}
                }
        if (y1==true && y2==true && y3==true){
            document.getElementById("spanpw").innerHTML="<img src='image/2.png'>正確";
            return window.y4=true}
        else{
            document.getElementById("spanpw").innerHTML="<img src='image/1.png'>必須包含英文字母、數字、特殊字元";}
            return window.y4=false}
}
function dtchk(){

var datee =document.getElementById("date1").value
var  re =/^([0-9]{4})\/{1}([0-9]{1,2})\/{1}([0-9]{1,2})$/;
if (re.test(datee)){
    if(new Date(datee).getDate()!=datee.substring(datee.length-2)){
        document.getElementById("spandt").innerHTML="<img src='image/1.png'>沒有此日期";
        return  window.d1 = false}
    else{ 
        if(new Date(datee).getFullYear() < 1911){
        document.getElementById("spandt").innerHTML="<img src='image/1.png'>西元不可以小於1911年";
        return  window.d1 = false}
        else{
            document.getElementById("spandt").innerHTML="<img src='image/2.png'>正確";
            return  window.d1 = true}
            
    }            
}
else
    document.getElementById("spandt").innerHTML="<img src='image/1.png'>日期格式錯誤";  
}
function chkall(){
    if(x1 && y4 && d1){
        return true;
        // alert("資料完善")
        }
    else{
        return false;
        // alert("資料未填完善")
        }  
    // alert(x1)
 }
