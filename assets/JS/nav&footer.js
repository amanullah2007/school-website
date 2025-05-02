//Dynamic Navbar

var navbar = document.querySelector("#navbar")
navbar.innerHTML = `
 <nav class="top-nav" id="top-nav">
            <div class="contact">
                <i class="fa-solid fa-phone"></i> <p>+92 000-9999999</p>
                <i class="fa-solid fa-envelope"></i> <p>info@yoursite.com</p>
            </div>

            <div class="nav-icons">
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
                <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                <a href=""><i class="fa-brands fa-pinterest"></i></a>
            </div>
        </nav>

        <nav class="bottom-nav" id="bottom-nav">
             <div class="logo">
                <img src="assets/images/logo.png" alt="logo">
            </div>

            <div class="nav-links">
                <ul>
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Work with Us</a></li>
                    <li><a href="#">Admission</a></li>
                    <li><a href="contact.html">Contact</a></li>
                   
                </ul>
            </div>

             <div class="menu-icon" id="menu-icon">
                <i class="fa-solid fa-bars"></i>
              </div>

            <div class="sidebar-menu" id="sidebar-menu">
                <ul class="menu">
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Work with Us</a></li>
                    <li><a href="#">Admission</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
            </div>
         </nav>
`


//  Dynamic footer

var footer = document.querySelector("#footer")
footer.innerHTML = `
<div class="footer-container">

        <div class="footer-part-1">
            <h2>Subscribe Our Newsletter</h2>
            <p>You can opt out of our newsletters at any time.
               See our privacy policy.</p>
            <div class="div-input">
               <input type="email" placeholder="Enter your email " required>
               <button><i class="fa-solid fa-paper-plane"></i></button>
           </div>
       </div>
       <div class="footer-part-2">
            <h2>Join us today</h2>
            <p>Would you like to earn your profits by joining our team? Join us without losing time.</p>
            <a href=""> Became a Teacher <i class="fa-solid fa-arrow-right"></i></a>
       </div>
       <div class="footer-part-3">
            <h2>Follow Us</h2>
            <p>Do follow us on our Social Media for latest posts and news</p>

            <div class="footer-icons">

            <a href="" class=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href="" class=""><i class="fa-brands fa-twitter"></i></a>
            <a href="" class=""><i class="fa-brands fa-google-plus-g"></i></a>
            <a href="" class=""><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="" class=""><i class="fa-brands fa-pinterest"></i></a>

            </div>

           
       </div>

       <div class="footer-part-4">
        <h2>Useful links</h2>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Work with Us</a></li>
            <li><a href="#">Admission</a></li>
            <li><a href="#">Contact</a></li>
            
        </ul>
     </div>
         </div>
       
       <div class="footer-line">
        <img src="assets/images/logo.png" alt="logo">
        <div class="footer-last">
            <p>Design : HTML.Design</p>
            <p>Distributed by : unknown</p>
        </div>
       </div>
    
`


// sidebar
var sidebarMenu = document.getElementById("sidebar-menu")
var menuicon = document.getElementById("menu-icon")

menuicon.addEventListener("click",function(){
    sidebarMenu.classList.toggle("active")
})

window.addEventListener("scroll",function(){
    if(window.scrollY > 8){
        sidebarMenu.style.top = "5rem"
    }
    else{
        sidebarMenu.style.top = "7rem"
    }
})


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