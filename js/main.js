 
 let image = document.querySelector('#imagebox');

 function img(x){
  image.src = x;
 }

 let circle = document.getElementById('circle');

 window.onscroll = function(){
  if( scrollY >= 400){
    circle.style.display ='block';
  }
  else{
    circle.style.display ='none';
  }
 }

 circle.onclick = function(){
  scroll({ left:0 , top:0 , behavior:'smooth' })
 
 }