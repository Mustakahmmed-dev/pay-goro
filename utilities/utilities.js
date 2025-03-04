// get value by id
function getValue(id){
    const value = document.getElementById(id).value;
    const valueInNumber = parseFloat(value);
    
}

// Hide element by id
function hideElementByID(id){
    document.getElementById(id).style.display = "none";
}


// Main sections part

// Hide elements
function hideElement(id){
    document.getElementById(id).style.display = "none";
}

// Show Element
function showElement(id){
    document.getElementById(id).style.display = "block";
}