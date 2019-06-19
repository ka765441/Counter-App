/* 
    Created on : Jun 15, 2019, 4:39:32 PM
    Author     : Ron
*/
var roncount=0;

function popupadd()
{
    var val=prompt("Please enter your value : ");
    if(val !== "" && isNaN(val) !== true && val !== null)
    {
      roncount = parseInt(val) + roncount;
      //alert("Hello, you value is : " + roncount);
      document.getElementById("rprint").value = "The value now is : " + roncount;
    }
    else
    {
        alert("Enter a valid value !!!");
    }
}

function popupsub()
{
    var val=prompt("Please enter your value : ");
    if(val !== "" && isNaN(val) !== true  && val !== null)
    {
      roncount = roncount - parseInt(val) ;
      //alert("Hello, you value is : " + roncount);
      document.getElementById("rprint").value = "The value now is : " + roncount;
    }
    else
    {
        alert("Enter a valid value !!!");
    }
}

function badd()
{
    roncount++ ;
    //alert("Value incremented : " + roncount);
    document.getElementById("rprint").value = "The value now is : " + roncount;
}

function bsub()
{
    roncount-- ;
    //alert("Value decremented : " + roncount);
    document.getElementById("rprint").value = "The value now is : " + roncount;
}
