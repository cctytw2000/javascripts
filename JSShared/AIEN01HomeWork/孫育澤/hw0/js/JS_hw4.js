document.addEventListener("DOMContentLoaded", function(){

    for(var i=2010; i<=2020; i++){document.getElementById('idSelYears').innerHTML += "<option>"+i+"</option>";}
    for(var i=1; i<=12; i++){document.getElementById('idSelMonths').innerHTML += "<option>"+i+"</option>";}
    
});


document.getElementById('idSelYears').addEventListener("change", function(){
    var YerSel = idSelYears.selectedIndex+2009;
    document.getElementById('sp1').innerHTML = YerSel;


    if(YerSel % 4 == 0){
        
        document.getElementById('idSelMonths').addEventListener("change", function(){
            var MonSel = idSelMonths.selectedIndex;
            document.getElementById('sp2').innerHTML = MonSel;
 
            if( ((MonSel % 2) != 0 && (MonSel < 8)) || ((MonSel % 2) == 0 && (MonSel >= 8)) ){
                document.getElementById('idSelDays').innerHTML = "";
                for(var i=1; i<=31; i++){
                    document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
                }
            }else if(MonSel==4 || MonSel==6 || MonSel==9 || MonSel==11){
                document.getElementById('idSelDays').innerHTML = "";
                for(var i=1; i<=30; i++){
                    document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
                }
            } else if(MonSel==2){
                document.getElementById('idSelDays').innerHTML = "";
                for(var i=1; i<=29; i++){
                    document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
                }
            }


        });


     }else if(YerSel % 4 != 0){  

        document.getElementById('idSelMonths').addEventListener("change", function(){
            var MonSel = idSelMonths.selectedIndex;
            document.getElementById('sp2').innerHTML = MonSel;
 
            if( ((MonSel % 2) != 0 && (MonSel < 8)) || ((MonSel % 2) == 0 && (MonSel >= 8)) ){
                document.getElementById('idSelDays').innerHTML = "";
                for(var i=1; i<=31; i++){
                    document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
                }
            }else if(MonSel==4 || MonSel==6 || MonSel==9 || MonSel==11){
                document.getElementById('idSelDays').innerHTML = "";
                for(var i=1; i<=30; i++){
                    document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
                }
            }else if(MonSel==2){
                document.getElementById('idSelDays').innerHTML = "";
                for(var i=1; i<=28; i++){
                    document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
                }      
            }

           });
   
    }
  
});
    
    document.getElementById('idSelDays').addEventListener("change", function(){
        document.getElementById('sp3').innerHTML = idSelDays.selectedIndex+1;
    });
    

    



















    
    // if(YerSel > 0) {
        // for(var i=1; i<=12; i++){document.getElementById('idSelMonths').innerHTML += "<option>"+i+"</option>";}
    // }



    // if(YerSel==2012){
    //     document.getElementById('idSelDays').innerHTML = "";
    //     for(var i=1; i<=29; i++){
    //     document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
    // }else{
    // document.getElementById('idSelDays').innerHTML = ""; }

    

                        // document.getElementById('idSelYears').addEventListener("change", function(){
                        //     return this.selectedIndex+2009;
                        // });


                        // document.getElementById('idSelYears').addEventListener("change", function(){
                        //     // alert(idSelYears.selectedIndex+2009);
                        //     document.getElementById('sp1').innerHTML = idSelYears.selectedIndex+2009;
                        // });
  

    // document.getElementById('idSelMonths').addEventListener("change", function(){
    //     var MonSel = idSelMonths.selectedIndex;
    //     // alert(MonSel);
    //     document.getElementById('sp2').innerHTML = MonSel;

    //     if( ((MonSel % 2) != 0 && (MonSel < 8)) || ((MonSel % 2) == 0 && (MonSel >= 8)) ){
    //         document.getElementById('idSelDays').innerHTML = "";
    //         for(var i=1; i<=31; i++){
    //             document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
    //         }
    //     }else if(MonSel==4 || MonSel==6 || MonSel==9 || MonSel==11){
    //         document.getElementById('idSelDays').innerHTML = "";
    //         for(var i=1; i<=30; i++){
    //             document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
    //         }
    //     }else  document.getElementById('idSelDays').innerHTML = "";         
    // });
                        // alert(MonSel);
                        // document.getElementById('idSelDays').addEventListener("change", function(){
                        //     document.getElementById('sp3').innerHTML = idSelDays.selectedIndex;
                        // });

// document.getElementById('idSelYears').addEventListener("change", function(){
//     document.getElementById('sp1').innerHTML = idSelYears.selectedIndex+2009;
// });

// document.getElementById('idSelMonths').addEventListener("change", function(){
//     var MonSel = idSelMonths.selectedIndex;
//     // alert(MonSel);
//     document.getElementById('sp2').innerHTML = MonSel;

//     if( ((MonSel % 2) != 0 && (MonSel < 8)) || ((MonSel % 2) == 0 && (MonSel >= 8)) ){
//         document.getElementById('idSelDays').innerHTML = "";
//         for(var i=1; i<=31; i++){
//             document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
//         }
//     }else if(MonSel==4 || MonSel==6 || MonSel==9 || MonSel==11){
//         document.getElementById('idSelDays').innerHTML = "";
//         for(var i=1; i<=30; i++){
//             document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
//         }
//     }else  document.getElementById('idSelDays').innerHTML = "";  

// });

// document.getElementById('idSelDays').addEventListener("change", function(){
//     document.getElementById('sp3').innerHTML = idSelDays.selectedIndex+1;
// });







// else if(MonSel==2 && ( (idSelYears.selectedIndex+2009)==2012||(idSelYears.selectedIndex+2009)==2016||(idSelYears.selectedIndex+2009)==2020) )
// {
// // document.getElementById('idSelDays').innerHTML = "";
// // for(var i=1; i<=29; i++){
// //     document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
//     alert("閏年");

// }else if(MonSel==2 && ( (idSelYears.selectedIndex+2009)!=2012||(idSelYears.selectedIndex+2009)!=2016||(idSelYears.selectedIndex+2009)!=2020) )
// {
// // document.getElementById('idSelDays').innerHTML = "";
// // for(var i=1; i<=28; i++){
// //     document.getElementById('idSelDays').innerHTML += "<option>"+i+"</option>";
//      alert("平年");
// }






// function validDate( year, month, day ){
//     var Day = new Date( year+ '-' + month+ '-' + day);
//     var chk = new Date( Day.valueOf() );
    
//     if (chk.getFullYear()==year && (chk.getMonth()+1)==month && chk.getDate()==day) 
//         return "Date correct!");
//     else 
//         alert("日期不存在!");  
// }