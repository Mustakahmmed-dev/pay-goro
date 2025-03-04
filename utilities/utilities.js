// get value by id
function getValue(id){
    const value = document.getElementById(id).value;
    const valueInNumber = parseFloat(value);
    return valueInNumber;
}