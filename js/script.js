window.onload=function(){
    document.querySelector(".loader ").classList.toggle("hide")
}



$(function(){
    var mixer = mixitup(".filter-img", {
        animation: {
        }
    });
    
})
 
 $(".header-content .botton").click(function(){
       $(".items ul ").slideToggle(1000)
   }) 



   var list=document.querySelectorAll(".main3 .main3-filter .container .filter-li ul li");
   for(let i=0;i<list.length;i++){
    list[i].onclick=function(){
        for(let i=0;i<list.length;i++){
            list[i].classList.remove("active")
        }
        list[i].classList.add("active");
    }
   }
   

document.querySelector(".navbar-toggler").onclick=function(){
    document.querySelector(".navbar-toggler span.sec-p").classList.toggle("open")
}


// -------------------- translate 
var arabic=document.querySelector(".translate .inner-txt button:first-of-type");
var english=document.querySelector(".translate .inner-txt button:last-of-type");
var mybody=document.querySelector("body")
arabic.onclick=function(){
    console.log("arabic")
}
english.onclick=function(){
    console.log("english")
}