// hunberger
let btn = document.querySelector(".openbtn1");
let nav = document.getElementById("g-nav");
let main = document.querySelector(".main");
console.log(main);


let nav_about = document.getElementById("nav-about");
let nav_interview = document.getElementById("nav-interview");
console.log(nav_about,nav_interview);

nav_about.addEventListener("click",function(){
    change();
})

nav_interview.addEventListener("click",function(){
    change();
})

// ボタンがクリックされたらボタンにactiveをつける
btn.addEventListener("click",function(){
    btn.classList.toggle("active");
    nav.classList.toggle("panelactive");
    main.classList.toggle("mainblur");
});

function change(){
    btn.classList.remove("active");
    nav.classList.remove("panelactive");
    main.classList.remove("mainblur");
}