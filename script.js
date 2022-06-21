$(document).ready(function(){


    $("#navIcon").click(function(){
        $("#dropMenu").toggle();
    });

var counter=1;

setInterval(function(){
    // make slide go to the next iamge
    document.getElementById('radio' +counter).checked=true;
    counter++;

    // make slide go back to the first image after the last
    if(counter>4){
        counter=1;
    }
},5000);

window.onscroll= function(){
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
        document.getElementById("title").style.transform="scale(0.4)";
        document.getElementById("head").style.height="50px"
        document.getElementById("menu").style.marginTop="0px"
    }else{
        document.getElementById("title").style.transform="scale(1.0)"
        document.getElementById("head").style.height="100px"
    }
};



})