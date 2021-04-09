const a = document.querySelector(".titletag")
const hero = document.querySelector(".hero")
const content = document.querySelector(".content")
const slider = document.querySelector(".slider")
const logo = document.querySelector(".logo")
let ulElement = document.getElementsByClassName("nav-links");

const tl = new TimelineMax();

//tl.fromTo( a, 0.2, { transform: 'translateY(20px)'}, { transform: 'translateY(0px)' , ease: Power2.easeInOut}, "+=3");
tl.fromTo( hero, 1.2, {height: '0%'}, {height : '90%' , ease:Power2.easeInOut})
 .fromTo( hero, 1.2, {width: '100%'}, {width : '90%' , ease:Power2.easeInOut}, "+=1.2")
 .fromTo( content, 1.2, {display: 'none'}, {display : 'block' , ease:Power2.easeInOut}, "-=1.2")
 .fromTo( slider, 1.2, {x:"-100%"}, {x : "0%"}, "-=1.5")
 .fromTo( logo, 1.2, {opacity: "0", x : "30%"}, { opacity: "1", x: "0%", color: "white"} )

function toggleNavLinks(e){
    if ( ulElement[0].classList) {
        ulElement[0].classList.toggle("dissapear");
      } else {
        // For IE9
        var classes =  ulElement[0].className.split(" ");
        var i = classes.indexOf("dissapear");
      
        if (i >= 0)
          classes.splice(i, 1);
        else
          classes.push("dissapear");
          ulElement[0].className = classes.join(" ");
      }
}

document.getElementById('hamberger').onclick = function(e) {
    toggleNavLinks(e)
}
ulElement[0].onclick = function(e){
    toggleNavLinks(e)
}