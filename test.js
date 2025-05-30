let darkmode = document.getElementById("darkmode");
let buttons = document.querySelectorAll('.button');
let tallButtons = document.querySelectorAll('.tall-button');
let halfButtons = document.querySelectorAll('.half-button');
let doubleButtons = document.querySelectorAll('.double-button'); 
let calculator = document.getElementById("calculator"); 
let screen = document.getElementById("screen"); 
let container = document.getElementById("container"); 

let calculation = 0; 
let operation = ""; 

function flash() { 
    screen.textContent = ""; 
    setTimeout(() => {
        screen.textContent = 0; 
    }, 30);
}

document.getElementById("magnify-increase").addEventListener('click', ()=> {
    let scale = container.style.margin; 
    alert(scale); 
    scale += 0.5
    alert(scale); 
    container.style.scale = scale;  
})


document.getElementById("darkmode").addEventListener('click', ()=> {
    if (darkmode.getAttribute("darkmode") == "off") { 
        /* Inverting Buttons */ 
        screen.style.borderColor = "whitesmoke"; 
        screen.style.backgroundColor = "black"
        screen.style.color = "whitesmoke"; 
        buttons.forEach(button => { 
            button.style.backgroundColor = "black"; 
            button.style.borderColor = "whitesmoke"; 
        })
        tallButtons.forEach(button => { 
            button.style.backgroundColor = "black"; 
            button.style.borderColor = "whitesmoke"; 
        })
        doubleButtons.forEach(button => { 
            button.style.backgroundColor = "black"; 
            button.style.borderColor = "whitesmoke"; 
        })
        halfButtons.forEach(button => { 
            button.style.backgroundColor = "black"; 
            button.style.borderColor = "indianred"; 
        })
        calculator.style.backgroundColor = "black"; 
        calculator.style.borderColor = "white"; 
        
        document.getElementById("darkmode").setAttribute("darkmode", "on")
        darkmode.style.backgroundColor = 'rgb(11, 0, 61)'; 
        document.getElementById("body").style.backgroundColor = "black"; 

    } else { 
        darkmode.setAttribute("darkmode", "off") 
        /*Inverting Buttons */ 
        screen.style.borderColor = "black"; 
        screen.style.color = "black"; 
        screen.style.backgroundColor = "darkgreen"; 
        buttons.forEach(button => { 
            button.style.backgroundColor = "darkslategray"; 
            button.style.borderColor = "black"; 
            button.style.color = "whitesmoke"
        })
        halfButtons.forEach(button => { 
            button.style.backgroundColor = "indianred";  
            button.style.borderColor = "black"; 
        })
        tallButtons.forEach(button => {
            button.style.backgroundColor = "darkslategray"; 
            button.style.borderColor = "black"; 
            button.style.color = "whitesmoke"; 
        })
        doubleButtons.forEach(button => { 
            button.style.backgroundColor = "darkslategray"; 
            button.style.borderColor = "black"; 
            button.style.color = "whitesmoke";  
        })
        calculator.style.backgroundColor = "gray"; 
        calculator.style.borderColor = "black"

        darkmode.style.backgroundColor = "white"; 
        darkmode.style.borderColor = "black"
        darkmode.borderColor = "black"; 
        document.getElementById("body").style.backgroundColor = "white"; 
    }

}); 


spearmintTheme = document.getElementById("spearmint"); 
blueTheme = document.getElementById("blue"); 
redTheme = document.getElementById("red"); 

spearmintTheme.addEventListener("click", () => { 
    if (darkmode.getAttribute("darkmode") != "on") { 
        alert('Cannot select colors in light mode! Switch to dark mode'); 
    } else {
        tallButtons.forEach(button => { 
            button.style.borderColor = "seagreen"; 
            button.style.color = "seagreen"; 
        })
        doubleButtons.forEach(button => { 
            button.style.borderColor = "seagreen"; 
            button.style.color = "seagreen"; 
        })
        buttons.forEach(button => { 
            button.style.borderColor = "seagreen"; 
            button.style.color = "seagreen"; 
        })
        calculator.style.borderColor = "seagreen"; 
        screen.style.borderColor = "seagreen"; 
        halfButtons.forEach(button => { 
            button.style.background = "rgb(27, 100, 58)"; 
            button.style.borderColor = "rgb(27, 100, 58)"; 
        })
    }
})

blueTheme.addEventListener("click", () => {
    alert("This theme has not been implemented yet!")
})

redTheme.addEventListener("click", () => {
    alert("This theme has not been implemented yet!")
})
one = document.getElementById("1button"); 
one.addEventListener("click", () => { 
    if (screen.textContent == 0) {
        screen.textContent = 1; 
    } else if (screen.textContent.length < 9) { 
        screen.textContent += 1; 
    }
})

two = document.getElementById("2button"); 
two.addEventListener("click", () => { 
    if (screen.textContent == 0) {
        screen.textContent = 2; 
    } else if (screen.textContent.length < 9) { 
        screen.textContent += 2; 
    }
})

three = document.getElementById("3button"); 
three.addEventListener("click", () => {
    if (screen.textContent == 0) {
        screen.textContent = 3;
    } else if (screen.textContent.length < 9) { 
        screen.textContent += 3; 
    }
}); 

four = document.getElementById("4button"); 
four.addEventListener("click", () => { 
    if (screen.textContent == 0) { 
        screen.textContent = 4; 
    } else if (screen.textContent.length < 9) { 
        screen.textContent += 4; 
    }
})

five = document.getElementById("5button"); 
five.addEventListener("click", () => {
    if (screen.textContent == 0) {
        screen.textContent = 5; 
    } else if (screen.textContent.length < 9) {
        screen.textContent += 5; 
    }
})

six = document.getElementById("6button"); 
six.addEventListener("click", () => {
    if (screen.textContent == 0) { 
        screen.textContent = 6; 
    } else if (screen.textContent.length < 9) { 
        screen.textContent += 6; 
    }
})

seven = document.getElementById("7button"); 
seven.addEventListener("click", () => {
    if (screen.textContent == 0) { 
        screen.textContent = 7; 
    } else if (screen.textContent.length < 9) { 
        screen.textContent += 7; 
    }
})

eight = document.getElementById("8button"); 
eight.addEventListener("click", () => {
    if (screen.textContent == 0) { 
        screen.textContent = 8; 
    } else if (screen.textContent.length < 9) { 
        screen.textContent += 8; 
    }
})

nine = document.getElementById("9button"); 
nine.addEventListener("click", () => { 
    if (screen.textContent == 0) { 
        screen.textContent = 9; 
    } else if (screen.textContent.length < 9) { 
        screen.textContent += 9; 
    }
})

zero = document.getElementById("0button"); 
zero.addEventListener("click", () => {
    if (screen.textContent == 0) {
        screen.textContent = 0; 
    } else if (screen.textContent.length < 9) { 
        screen.textContent += 0 ; 
    }
})

decimal = document.getElementById("decimalButton"); 
decimal.addEventListener("click", () => { 
    if (screen.textContent.length < 8) {
        screen.textContent += '.'; 
    }
})

clear = document.getElementById("clear"); 
clear.addEventListener("click", () =>{ 
    if (screen.textContent.length < 9) {
        screen.textContent = 0; 
    }
})

enter = document.getElementById("compute");
enter.addEventListener("click", () => { 
    switch (operation) { 
        case "":
            calculation = parseFloat(screen.textContent); 
            break;
        case "+":
            calculation += parseFloat(screen.textContent); 
            break; 
        case "-":
            calculation -= parseFloat(screen.textContent); 
            break; 
        case "*":
            calculation *= parseFloat(screen.textContent); 
            break; 
        case "/": 
            calculation /= parseFloat(screen.textContent); 
            break; 

    }
    operation = ""; 
    screen.textContent = calculation.toString().slice(0,9);   
})

add = document.getElementById("add"); 
add.addEventListener("click", () => { 
    switch (operation) { 
        case "":
            calculation = parseFloat(screen.textContent); 
            break;
        case "+":
            calculation += parseFloat(screen.textContent); 
            break; 
        case "-":
            calculation -= parseFloat(screen.textContent); 
            break; 
        case "*":
            calculation *= parseFloat(screen.textContent); 
            break; 
        case "/": 
            calculation /= parseFloat(screen.textContent); 
            break; 

    }

    operation = "+"; 
    flash(); 
})

subtract = document.getElementById("subtract"); 
subtract.addEventListener("click", () => {
    switch (operation) { 
        case "":
            calculation = parseFloat(screen.textContent); 
            break;
        case "+":
            calculation += parseFloat(screen.textContent); 
            break; 
        case "-":
            calculation -= parseFloat(screen.textContent); 
            break; 
        case "*":
            calculation *= parseFloat(screen.textContent); 
            break; 
        case "/": 
            calculation /= parseFloat(screen.textContent); 
            break; 

    }
    operation = "-"; 
    flash(); 
})

multiply = document.getElementById("multiply"); 
multiply.addEventListener("click", () => {
    switch (operation) { 
        case "":
            calculation = parseFloat(screen.textContent); 
            break;
        case "+":
            calculation += parseFloat(screen.textContent); 
            break; 
        case "-":
            calculation -= parseFloat(screen.textContent); 
            break; 
        case "*":
            calculation *= parseFloat(screen.textContent); 
            break; 
        case "/": 
            calculation /= parseFloat(screen.textContent); 
            break; 

    }
    operation = "*"; 
    flash(); 
})

divide = document.getElementById("divide"); 
divide.addEventListener("click", () =>{
    switch (operation) { 
        case "":
            calculation = parseFloat(screen.textContent); 
            break;
        case "+":
            calculation += parseFloat(screen.textContent); 
            break; 
        case "-":
            calculation -= parseFloat(screen.textContent); 
            break; 
        case "*":
            calculation *= parseFloat(screen.textContent); 
            break; 
        case "/": 
            calculation /= parseFloat(screen.textContent); 
            break; 

    }
    operation = "/"; 
    flash(); 
})
