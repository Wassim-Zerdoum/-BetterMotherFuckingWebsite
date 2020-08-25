
var myButton = document.getElementById("myButton");
var background = document.getElementsByTagName("body");
var paragraphs = document.getElementsByTagName("p");
var heading = document.getElementsByClassName("heading");

myButton.onclick = function() {

    background[0].style.backgroundColor = "magenta";
    
    for(let i = 0; i < paragraphs.length; i++) {

         paragraphs[i].style.color = "blue";
         paragraphs[i].style.fontFamily= "courier";
    }
    for(let j = 0; j < heading.length; j++) {

        heading[j].style.color = "green";
        heading[j].style.fontFamily = "Comic Sans MS";
    }
  
}


if (window.confirm("Envi d'aller sur xxxvidsxxx ?Cliques sur OK !")) { 
   
    window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}

/*
ceci est un commentaire TEST 

*/
