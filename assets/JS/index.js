// navbar toggle 

window.addEventListener("scroll", function(){
    var topnavbar = document.getElementById("top-nav")
    var bottomnavbar = document.getElementById("bottom-nav")
    
    if(window.scrollY > 150 ){
        topnavbar.classList.add("top-nav-hide")
        topnavbar.classList.remove("top-nav")

        bottomnavbar.classList.add("bottom-nav-toggle")
        bottomnavbar.classList.remove("bottom-nav")
    }
    else{
        topnavbar.classList.add("top-nav")
        topnavbar.classList.remove("top-nav-hide")

        bottomnavbar.classList.add("bottom-nav")
        bottomnavbar.classList.remove("bottom-nav-toggle")
    }
    
})


// scroll btn to top

var topBtn = document.querySelector("#move-to-top")

    document.addEventListener("scroll",function(){
    if(window.scrollY > 300){
        topBtn.style.display = "block"
    }
    else{
        topBtn.style.display = "none"
     }
 })
     topBtn.addEventListener("click",function(){
        window.scrollTo({
            top:0,
            behavior:'smooth'

        })
     })