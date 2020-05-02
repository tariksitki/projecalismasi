
function Welcome () {

    alert ("Welcome" )
    var isim =  prompt ( "Please enter your name" , "tarik")

    document.getElementById ("user").innerHTML=isim




    console.log(isim.length);





    if ( isim != null ) {

        var message = " Hello " + isim + " How are you"
        alert (message)
        
    }
    

   

}