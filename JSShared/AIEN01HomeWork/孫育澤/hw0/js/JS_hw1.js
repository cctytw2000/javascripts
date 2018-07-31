var td = document.getElementsByTagName('td');

for (var i=2; i<=9; i++){
    for (var j=1; j<=9; j++){
        if(i==2) td[0].innerHTML += (i+"*"+j+"= "+i*j+"<br>");
        if(i==3) td[1].innerHTML += (i+"*"+j+"= "+i*j+"<br>");
        if(i==4) td[2].innerHTML += (i+"*"+j+"= "+i*j+"<br>");
        if(i==5) td[3].innerHTML += (i+"*"+j+"= "+i*j+"<br>");
        if(i==6) td[4].innerHTML += (i+"*"+j+"= "+i*j+"<br>");
        if(i==7) td[5].innerHTML += (i+"*"+j+"= "+i*j+"<br>");
        if(i==8) td[6].innerHTML += (i+"*"+j+"= "+i*j+"<br>");
        if(i==9) td[7].innerHTML += (i+"*"+j+"= "+i*j+"<br>");
        }
    } 

//下一步:是否可以用swith-case寫出更簡便的程式?
//卡關的地方:"+="的使用






//思考過程
// var td1 = document.getElementsByTagName('td')[0];

// for (var i=2; i<=9; i++){
//     for (var j=1; j<=9; j++){
//         for (var t=0; t<=8; t++){
            
//         if(i==2) td1.innerHTML += (i+"*"+j+"= "+i*j+"<br>");
//         }
//     } 
// }
//////////////////////////////////////////////////////////////////////////
// for (var i=2; i<=9; i++){
//     for (var j=1; j<=9; j++){
//          var ans = i+"*"+j+"= "+i*j+"<br>";
//          document.writeln(ans);
        // //  if (j == 9) document.writeln("-----------<br>");
        // if (i<=9 && j<=9) document.getElementsByTagName('td')[0].innerHTML = ans;

   
    //      }

    // } 
//////////////////////////////////////////////////////////////////////////
    // for (var j=1; j<=9; j++){
       
        // if (i == 2) {
            // document.getElementsByTagName('td')[0].innerHTML =  (2+"*"+1+"= "+2*1+"<br>")+(2+"*"+2+"= "+2*2+"<br>");
            // document.getElementsByTagName('td')[0].innerHTML =  i+"*"+j+"= "+i*j+"<br>";
        // }
        //  var ans = i+"*"+j+"= "+i*j+"<br>";
        //  document.writeln(ans);
        //  if (j == 9) document.writeln("-----------<br>");
        // if (i==2) document.getElementsByTagName('td')[0].innerHTML = ans;

   
        //  }
//////////////////////////////////////////////////////////////////////////
        // var a = parseInt(prompt("ANS:"));
// switch(a){
//     case 1:
//     document.writeln("001");
//     break;
//     case 2:
//     document.writeln("003");
//     break;
//     case 3:
//     document.writeln("002");
//     break;
// }