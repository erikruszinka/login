$(document).ready(function() {
    var persons = new Array();
    var error=false;
    $("button").click(function(event){
        var fname=$("#fname").val();
        if(fname.trim().length<2)
            {
                $("#error1").html("Invalid Name!");
                error=true;
            }
        else {
			$("#error1").html("");
		     }
    })
        
        $("button").click(function(event){
        var lname=$("#lname").val();
        if(lname.trim().length<2)
            {
                $("#error2").html("Invalid Name!");
                error=true;
            }
            else {
			       $("#error2").html("");
		         }
            
        })
        
        $("button").click(function(event){
    var inputdate = new Date($('#bday').val());
    var inputday = inputdate.getDate();
    var inputmonth = inputdate.getMonth() + 1;
    var inputyear = inputdate.getFullYear();
    var currentdate = new Date();
    var currentmonth = new Date().getMonth();
    var currentyear = new Date().getFullYear();
    if(inputdate<=currentdate){
    $("#error3").html("");
        if(error==false)
        {
            processFormData();
            $("#fname").val("");
            $("#lname").val("");
            reset();
            
        }
    }
    
    else{
        
    $("#error3").html("Incorrect date!");
        error=true;
        
    }
    })
    
    function processFormData(){
        var newPerson=new Object();
        newPerson.firstName=$("#fname").val();
        newPerson.lastName=$("#lname").val();
        newPerson.dob=$("#bday").val();
        newPerson.gender=$("input[name='gender']:checked").val();
        
        persons.push(newPerson);
        

        printTable();
        }
    
    
    function printTable(){
            var tablediv = $('.table');
            tablediv.empty();
            var selectedGender=getSelectedGender();
            var checkedAge=isCheckedAge();
            var arr=new Array();
            
        persons.forEach(function(obj){
            if(selectedGender=='m'&& obj.gender=='true')
                {
                    arr.push(obj);
                    console.log("muz");
                }
            if(selectedGender=='f'&& obj.gender=='false')
                {
                    arr.push(obj);
                    console.log("zena");
                }
            if(selectedGender=='a')
                {
                    arr.push(obj);
                    console.log("m a z");
                }
        });
        
        var age;
        var today= new Date();
    var inputdate = new Date($('#bday').val());
    var inputday = inputdate.getDate();
    var inputmonth = inputdate.getMonth() + 1;
    var inputyear = inputdate.getFullYear();
    var currentdate = new Date();
    var currentmonth = today.getMonth();
    var currentyear = today.getFullYear();
    var currentday = today.getDay();
        
        if(arr.length>0){
            
            var table = $('<table/>');
            var line = $('<tr/>');
            var col1 = $('<th/>');
            $(col1).append('First Name');
            var col2 = $('<th/>');
             $(col2).append('Last Name');
            var col3 = $('<th/>');
            $(col3).append('');
             if(checkedAge){
              $(col3).append('Age');
                 if(currentmonth>inputmonth)
                {
                    console.log("tuna");
                    age=currentdate-inputyear+1;
                    
                  
                }
            if(currentmonth<inputmonth)
                {
                    console.log("tunhg");
                    age=currentmonth-currentyear;
                   
                }
            if(inputday>currentday)
                {
                    console.log("in d b cd");
                    age=currentday-inputyear-1;
                   
                }
            else
                {
                    age=currentyear-inputyear;
                   
                }
             document.getElementById('years').innerHTML=age;   
               }
               else {
               $(col3).append('Date of birth');
               }
            var col4 = $('<th/>');
             $(col4).append('Gender');
            var col5 = $('<th/>');
             $(col5).append('Delete');
            line.append(col1);
            line.append(col2);
            line.append(col3);
            line.append(col4);
            line.append(col5);
            table.append(line);
            tablediv.append(table);
        }
        arr.forEach(function(obj){
        var line=$("<tr/>");
        var col1=$("<td/>");
        $(col1).append(obj.firstName);
        var col2=$("<td/>");
        $(col2).append(obj.lastName);
        var coldob=$("<td/>");
        $(coldob).append(obj.dob);
                 
        var col4=$("<td/>");
        $(col4).append(obj.gender);
         line.append(col1);
         line.append(col2);
         line.append(coldob);
         line.append(col4);
         table.append(line);
    });
        
    }
    
   function getSelectedGender(){
       var value = $("#checkedGender").val();
       return value;
   }
       
    $("#checkedGender").change(function(event){
           printTable();
       
    });
    
    function isCheckedAge(){
        return $("#showAge").is(':checked');
    }
    
    $('#showAge').change(function(event){
       printTable(); 
    });
    
    function reset(){
        
    }

});