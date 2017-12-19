$(document).ready(function(){
    
    var cells;
    var num;
    
    function refresh(){
       $("#playground").empty("table");
        var table = $("<table>");
        var tr;

        $.each(cells, function(i){
              if(!(i%3)  ){
                  tr = $("<tr>");
              }
            var td = $("<td>");
            td.attr("id", "cell_"+i);
            td.html(cells[i]);
            td.click(function(){
                //alert($(this).attr("id"));
                //$(this).
                num++;
                var tictac = "x";
                if (!(num%2)) {
                    tictac = "o";
                }
               
                $(this).html(tictac);
                cells[i] = tictac;
                console.log(cells);
                isDone(tictac);
                
            })
             table.append(tr.append(td));
              })
        
       
        $("#playground").append(table); 
    
    }
    
    
    function isDone(xo) {
        
        var winner;
        if(xo == "x"){
            winner = "xxx";
        } else {
            winner = "ooo";
        }
        var h1 = cells[0] + cells[1] + cells[2];
        var h2 = cells[3] + cells[4] + cells[5];
        var h3 = cells[6] + cells[7] + cells[8];
        var v1 = cells[0] + cells[3] + cells[6];
        var v2 = cells[1] + cells[4] + cells[7];
        var v3 = cells[2] + cells[5] + cells[8];
        var d1 = cells[0] + cells[4] + cells[8];
        var d2 = cells[2] + cells[4] + cells[6];
        
        if ((h1==winner) || (h2==winner) || (h3==winner) || (v1==winner) || (v2==winner) || (v3==winner) || (d1==winner) || (d2==winner)) {
            alert("The winner is:  " + winner[0]);
    }
    }
            
       

    

         
    
    
    $("#start").click(function start(){
        cells = ["","","","","","","","",""];
        num = 0;
        refresh();
        
    })
})
