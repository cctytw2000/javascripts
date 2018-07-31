    document.getElementById('username01').addEventListener("focus", function(){
        document.getElementById('idSpan01').innerHTML = "";
    });
    document.getElementById('userpwd01').addEventListener("focus", function(){
        document.getElementById('idSpan02').innerHTML = "";
    });
    document.getElementById('userdate01').addEventListener("focus", function(){
        document.getElementById('idSpan03').innerHTML = "";
    });


    document.getElementById('username01').addEventListener("blur", function(){
        // alert("ACA");
        var theName = document.getElementById("username01").value;             
        var theNameLen = theName.length;                    
        var flag4 = false;  
        var count = 0;      
        

        if (theName==""){
            document.getElementById('idSpan01').innerHTML = "<img src='images/error.png'>姓名不能空白!";
        } 
        else if (theNameLen >= 2) {                                  
             for (var i = 0; i < theNameLen; i++) {                    
                    var NameAns = parseInt(theName.charCodeAt(i));
                     if (NameAns >= 19968 && NameAns <= 40959) {          //中文字在UTF-16(16進位)的區間
                        count += 1;
                        }                                                  
                }
                if (count == theNameLen)  document.getElementById('idSpan01').innerHTML = "Name correct!";                 
                else document.getElementById('idSpan01').innerHTML = "<img src='images/error.png'>Name incorrect!";    
            
        } else
            document.getElementById('idSpan01').innerHTML = "<img src='images/error.png'>姓名字數小於二!";
            
    });



    document.getElementById('userpwd01').addEventListener("blur",function(){
        var thePwd = document.getElementById("userpwd01").value;              
        var thePwdLen = thePwd.length;                    
        var flag1, flag2, flag3 = false;                                  

        if (thePwd==""){                                  
            document.getElementById('idSpan02').innerHTML = "<img src='images/error.png'>密碼不能空白!";                                  

        }else if (thePwdLen >= 6) {                                  
            for (var i = 0; i < thePwdLen; i++) {                     
                var PwdChar = thePwd.substr(i, 1).toUpperCase();
                    if (PwdChar >= "A" && PwdChar <= "Z")                    //因為A~Z換成數字是一個區間          
                        flag1 = true;                                              
                    else if (PwdChar >= "0" && PwdChar <= "9")               //因為0~9換成數字是一個區間       
                        flag2 = true;                                               
                    else if (PwdChar =="!" || PwdChar =="@" || PwdChar =="#" || PwdChar =="$"|| PwdChar =="%"|| PwdChar =="^"|| PwdChar =="&"|| PwdChar =="*")  
                        flag3 = true;      
                    if (flag1 && flag2 && flag3) 
                        break;                                      
            }
            if (flag1 && flag2 && flag3) document.getElementById('idSpan02').innerHTML = "Pwd correct!";                //如果我輸入了六個都是a迴圈還是會結束 但卻錯誤
            else document.getElementById('idSpan02').innerHTML = "<img src='images/error.png'>Pwd incorrect!";    
        } else
            document.getElementById('idSpan02').innerHTML = "<img src='images/error.png'>密碼字數小於六!";  

    });


    document.getElementById('userdate01').addEventListener("blur",function(){
        var theDate0 = document.getElementById('userdate01');
        var theDate = document.getElementById('userdate01').value;

        var redate = /^[1-2]\d{3}\/[0-1]\d{1}\/\d{2}$/;
        var dateSplit = theDate.split("/");

            if (redate.test(theDate)) 
                validDate(parseInt(dateSplit[0]), parseInt(dateSplit[1]), parseInt(dateSplit[2]));  
            else 
                document.getElementById('idSpan03').innerHTML = "<img src='images/error.png'>格式不對!";

                function validDate( _year, _month, _day ){
                    var Day = new Date( _year+ '-' + _month+ '-' + _day);
                    var chk = new Date( Day.valueOf() );
                    
                    if (chk.getFullYear()==_year && (chk.getMonth()+1)==_month && chk.getDate()==_day) 
                        document.getElementById('idSpan03').innerHTML = "Date correct!";
                    else 
                        document.getElementById('idSpan03').innerHTML = "<img src='images/error.png'>日期不存在!";  
                }

    });  