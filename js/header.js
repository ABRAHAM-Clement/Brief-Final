window.onscroll = function() {myFunction()};

function myFunction() {
  let lien = document.getElementById("lien");
  if (document.documentElement.scrollTop != 0) {
    document.getElementById("header").className = "cache";
    if (lien != null){
      lien.className = "cache";
    }
    
  } else {
    document.getElementById("header").className = "";
    if (lien != null){
       lien.className = "";
    }
   
  }
}

function afficher(){
   document.getElementById("recherche").className = "afficher";
   document.getElementById("croix").className = "afficher";
   document.getElementById("loupe").className = "afficher";
}

function desafficher(){
   document.getElementById("recherche").className = "";
   document.getElementById("croix").className = "";
   document.getElementById("loupe").className = "";
   
}