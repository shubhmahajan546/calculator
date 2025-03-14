let darkmode = document.getElementById("darkmode")
document.getElementById("darkmode").addEventListener('click', ()=> {
    if (darkmode.getAttribute("darkmode") == "off") { 
        document.getElementById("darkmode").setAttribute("darkmode", "on")
        darkmode.style.backgroundColor = "black"; 
        darkmode.style.borderColor = "white";
        document.getElementById("body").style.backgroundColor = "black"
        
    } else { 
        darkmode.setAttribute("darkmode", "off") 
        darkmode.style.backgroundColor = "white"; 
        darkmode.style.borderColor = "black"
        darkmode.borderColor = "black"; 
        document.getElementById("body").style.backgroundColor = "white"; 
    }

}); 

