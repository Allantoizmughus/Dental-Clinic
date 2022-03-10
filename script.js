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