function myFunction (){
    var elmnt = document.getElementsByClassName("big")[0];
    var cln = elmnt.cloneNode(true);
    document.body.appendChild(cln);
};