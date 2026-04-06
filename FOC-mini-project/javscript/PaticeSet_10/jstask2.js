let a = document.getElementById("nickname");

a.addEventListener("mouseover", function(){
    a.innerHTML="LUNA";
});

a.addEventListener("mouseout", function(){
    a.innerHTML="DOG";
});

setTimeout(function(){
   alert("Welcome TO Animal Page");
},2000);