console.log("Connected");

window.onscroll = function(){
    stickyNavbar();
};

var navbar = document.getElementsByTagName("nav")[0];
var main = document.getElementsByTagName("main")[0];
var pos = navbar.offsetTop;

function stickyNavbar(){
    if(window.pageYOffset >= pos){
        navbar.classList.add("sticky");
        main.classList.add("add-padding");
    }else{
        navbar.classList.remove("sticky");
        main.classList.remove("add-padding");
    }
}