document.querySelectorAll('.resizer').forEach(e=>{
    // at the beginning the resizer is in the middle
    e.previousElementSibling.style.width=(e.parentNode.offsetWidth-e.offsetWidth)*2/7+'px';
    e.nextElementSibling.style.width=(e.parentNode.offsetWidth-e.offsetWidth)*5/7+'px';
    // if mouse is down, detect movement
    e.onmousedown=()=>{
      e.parentNode.onmousemove=ev=>{
        e.previousElementSibling.style.width=
        ev.clientX-e.offsetWidth/2+'px';
        e.nextElementSibling.style.width=
        e.parentNode.offsetWidth-ev.clientX-e.offsetWidth/2+'px';
      };
    };
    // if mouse is up, its movement doesn't matter
    e.parentNode.onmouseup=
    ()=>{e.parentNode.onmousemove=undefined};
  });


//<!-----------------COLLAPSIBLE LIST-------------------------------------------!>

//code.iamkate.com
var CollapsibleLists=function(){function e(b,c){[].forEach.call(b.getElementsByTagName("li"),function(a){c&&b!==a.parentNode||(a.style.userSelect="none",a.style.MozUserSelect="none",a.style.msUserSelect="none",a.style.WebkitUserSelect="none",a.addEventListener("click",g.bind(null,a)),f(a))})}function g(b,c){for(var a=c.target;"LI"!==a.nodeName;)a=a.parentNode;a===b&&f(b)}function f(b){var c=b.classList.contains("collapsibleListClosed"),a=b.getElementsByTagName("ul");[].forEach.call(a,function(a){for(var d=a;"LI"!==d.nodeName;)d=d.parentNode;d===b&&(a.style.display=c?"block":"none")});b.classList.remove("collapsibleListOpen");b.classList.remove("collapsibleListClosed");0<a.length&&b.classList.add("collapsibleList"+(c?"Open":"Closed"))}return{apply:function(b){[].forEach.call(document.getElementsByTagName("ul"),function(c){c.classList.contains("collapsibleList")&&(e(c,!0),b||[].forEach.call(c.getElementsByTagName("ul"),function(a){a.classList.add("collapsibleList")}))})},applyTo:e}}();

CollapsibleLists.apply();

//<!------------------------SIDEBAR JAVASCRIPT EXP_PUBLICOS.HTML------------------------------------------!>

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});
