td = document.getElementsByTagName("td");
for (i=2 ; i<10 ; i++){
    for(j=1 ; j<10 ; j++){
    if(i==2) td[0].innerHTML +=(i+"*"+j+"="+i*j+"<br>")
    if(i==3) td[1].innerHTML +=(i+"*"+j+"="+i*j+"<br>")
    if(i==4) td[2].innerHTML +=(i+"*"+j+"="+i*j+"<br>")
    if(i==5) td[3].innerHTML +=(i+"*"+j+"="+i*j+"<br>")
    if(i==6) td[4].innerHTML +=(i+"*"+j+"="+i*j+"<br>")
    if(i==7) td[5].innerHTML +=(i+"*"+j+"="+i*j+"<br>")
    if(i==8) td[6].innerHTML +=(i+"*"+j+"="+i*j+"<br>")
    if(i==9) td[7].innerHTML +=(i+"*"+j+"="+i*j+"<br>")}    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function f() {    
    var CName = document.getElementById("account1").value;             
    var CNamelen = CName.length;                    
    // var flag = false;  
    var count = 0;                                                               

    if (CName ==""){
        document.getElementById("idsp").innerHTML="<img src='img/error.png'>姓名不可為空白"
       }  
                            

    else if (CNamelen >= 2) {                                  
        for (var i = 0; i < CNamelen; i++) {                    
            var namecode = parseInt(CName.charCodeAt(i));
                if (namecode >= 19968 && namecode <= 40959) {
                count += 1;
            }                                                  
        }
        if (count == CNamelen)
        document.getElementById("idsp").innerHTML="<img src='img/22.png'>正確"
        
        // alert("標準");                  
        else document.getElementById("idsp").innerHTML="<img src='img/error.png'>姓名必須全部為中文字" 


    } else
        document.getElementById("idsp").innerHTML="<img src='img/error.png'>姓名必須大於或等於兩個字" ; 
    
///////////////////////////////////////////////////////////////////
    x =document.getElementById("kkk").value;   
    y = x.length;                              
    var a =false,b=false;c=false;

    if(x=="")
    document.getElementById("idsp3").innerHTML="<img src='img/error.png'>密碼不可為空白"

    else if (x.length >= 6){
        for (i=0 ; i<y ; i++){
            var z = x.substr(i, 1).toUpperCase();               
            if (z >= "A" && z <= "Z")
            a = true;
            else if (z >= "0" && z <= "9")
            b = true;
            else if (z =="!" || z =="@" || z =="#" || z =="$"|| z =="%"|| z =="^"|| z =="&"|| z =="*")
            c = true;
            if (a && b && c) break;
        }
        if (a && b && c)
        document.getElementById("idsp3").innerHTML="<img src='img/22.png'>正確" 

        else
        document.getElementById("idsp3").innerHTML="<img src='img/error.png'>密碼必須包含英文字母、數字、特殊字元[!@#$%^&*]" 

    }
    else
    document.getElementById("idsp3").innerHTML="<img src='img/error.png'>密碼需要大於或等於6個字"


/////////////////////////////////////////////////////////////////


    Day1 =document.getElementById("dayid").value;
    de = ""
    dOK = false
    re = /^[0-9]{4}\/[0-9]{1,2}\/[0-9]{1,2}$/


    if (Day1 ==""){
    document.getElementById("idsp5").innerHTML="<img src='img/error.png'>日期不可為空白"}    

    else if (re.test(Day1)){
        var x=new Date(Day1)
        

        if (x == "Invalid Date"){de += " " + "無效日期"}     
        
        else
         {if (x.getDate() != Day1.split('/')[2]) {de += " " + "無效日期"}
          else {
              dOK = true}
              document.getElementById("idsp5").innerHTML="<img src='img/22.png'>正確"}
         // console.log("correct date" + dt_n.getDate());
        // x = new Date("Day1") 錯了回傳Invalid Date     
    }
    else
    document.getElementById("idsp5").innerHTML="<img src='img/error.png'>日期格式錯誤"

    // if (dOK != true) {
    //     repacle_new("idsp55", "idsp5", de)
    //     document.getElementById("dayid").focus()} 
    // else {
    //     document.getElementById("idsp5").innerHTML="正確"
    //     // repacle_new_correct("idsp55", "idsp5", "正確")
    // }

    // break




 
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////////////////////////////































// Day1 =document.getElementById("dayid").value;
//     d_e = "";
//     d_isOK = false; 
//     // Day1len = Day1.length;
//     re = /^[0-9]{4}\/[0-9]{1,2}\/[0-9]{1,2}$/


//     if (Day1 ==""){
//     document.getElementById("idsp5").innerHTML="<img src='img/error.png'>日期不可為空白"}    

//     else if (re.test(Day1)){        
//         oooo = new Date(Day1)
//         if (oooo == "Invalid Date"){
//             d_e += " " + "無效日期"}
//         else if (oooo.getDate() != Day1.split('/')[2]) 
//             d_e += " " + "無效日期";
//         else
//             d_isOK = true;
//             // alert("ok!!") 
//                     // console.log("correct date" + oooo.getDate());
     
//     }            

//     else
//     document.getElementById("idsp5").innerHTML="<img src='img/error.png'>日期格式錯誤"

//     if (d_isOK != true) {
//         repacle_new("d_e_t", "d_e_t_s", d_e);
//         document.getElementById("dayid").focus();
//     } else {
//         repacle_new_correct("d_e_t", "d_e_t_s", "正確");
//     }











