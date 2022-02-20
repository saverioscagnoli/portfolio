var darkmode = document.getElementById("darkmode");
    
localStorage.setItem("theme", "dark");

darkmode.onclick = function delay() {
    document.body.classList.toggle("light-theme")
    if(document.body.classList.contains("light-theme")){
       darkmode.name = "moon";
       localStorage.setItem("theme", "light");
       
    } else {
        darkmode.name = "sunny";
        localStorage.setItem("theme", "dark");
    }
}
