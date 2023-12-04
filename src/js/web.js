// $(function(){
//     $(document.body).on("click", ".menu", function(){
//         $("body").toggleClass("menu--opened");
//     });
//     $(document.body).on("click", ".cancel-icon", function(){
//         $("body").removeClass("menu--opened");
//     });
//     $(document.body).on("click", ".down-menu", function(){
//         $("body").removeClass("menu--opened");
//     });
//     $(document.body).on("click", ".inner", function(e){
//         e.stopPropagation();
//     });
// });
var menu=document.querySelector(".menu");
var x = document.getElementsByTagName("BODY")[0];
var cancelIcon=document.querySelector(".cancel-icon");
var downMenu=document.querySelector(".down-menu");
var inner=document.querySelector(".inner");
menu.addEventListener("click",function(){
x.classList.toggle("menu--opened");
});
cancelIcon.addEventListener("click",function(){
    x.classList.remove("menu--opened");
});
downMenu.addEventListener("click",function(){
    x.classList.remove("menu--opened");
});
inner.addEventListener("click",function(e){
    e.stopPropagation();
})