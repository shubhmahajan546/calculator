let darkmode = document.getElementById("darkmode")
let buttons = document.querySelectorAll('.button')
let tallButtons = document.querySelectorAll('.tall-button')
let halfButtons = document.querySelectorAll('.half-button')
let doubleButtons = document.querySelectorAll('.double-button')
let calculator = document.getElementById("calculator") 
document.getElementById("darkmode").addEventListener('click', ()=> {
    if (darkmode.getAttribute("darkmode") == "off") { 
        /* Inverting Buttons */
        buttons.forEach(button => { 
            button.style.backgroundColor = "black"
            button.style.borderColor = "whitesmoke" 
        })
        calculator.style.backgroundColor = "black"; 
        calculator.style.borderColor = "white"; 
        
        document.getElementById("darkmode").setAttribute("darkmode", "on")
        darkmode.style.backgroundColor = "black"; 
        darkmode.style.borderColor = "white";
        document.getElementById("body").style.backgroundColor = "black"

    } else { 
        darkmode.setAttribute("darkmode", "off") 
        /*Inverting Buttons */ 
        buttons.forEach(button => { 
            button.style.backgroundColor = "darkslategray"; 
            button.style.borderColor = "black"; 
        })
        tallButtons.forEach(button => {
            button.style.backgroundColor = ""
        })
        calculator.style.backgroundColor = "gray"; 
        calculator.style.borderColor = "black"

        darkmode.style.backgroundColor = "white"; 
        darkmode.style.borderColor = "black"
        darkmode.borderColor = "black"; 
        document.getElementById("body").style.backgroundColor = "white"; 
    }

}); 


