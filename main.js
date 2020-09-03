
var button = document.getElementById("button");
var body = document.getElementsByTagName("body");
var paragraphsTag = document.getElementsByTagName("p");
var headerTitle = document.getElementsByClassName("headerTitle");

button.onclick = function() {

    body[0].style.backgroundColor = "magenta";
    
    for(let i = 0; i < paragraphsTag.length; i++) {

         paragraphsTag[i].style.color = "blue";
         paragraphsTag[i].style.fontFamily= "courier";
    }
    for(let j = 0; j < headerTitle.length; j++) {

        headerTitle[j].style.color = "green";
        headerTitle[j].style.fontFamily = "Comic Sans MS";
    }
  
}


if (window.confirm("Envi de visiter xxxvidsxxx ? Cliquez sur  Ok.")) { 
   
    window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}

