let darkmode = document.getElementById("darkmode").style; 
document.getElementById("darkmode").addEventListener('click', ()=> {
    document.getElementById("darkmode").setAttribute("darkmode-on", "on")
    darkmode.backgroundColor = "black"; 
    darkmode.borderColor = "white";
    document.getElementById("body").style.backgroundColor = "black"

}); 
