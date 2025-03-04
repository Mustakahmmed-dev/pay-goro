const accounts = ["01812050131", "01812050132", "01812050133"];
const pins = ["9900", "9988", "7766"];


document.getElementById("login-btn").addEventListener("click", function(event){
    const loginAccount = document.getElementById("login-account").value;
    const loginPin = document.getElementById("login-pin").value;
   
    if(loginAccount && loginPin){
       if(accounts.includes(loginAccount)){
        if(pins.includes(loginPin)){
            window.location.href = "./main.html"
        }
        else{
            alert("Inccorrect pin. Please try again")
        }
       }
       else{
        alert("Please input a valid account number")
       }
    }
    else{
        alert("Please input the details to login")
    }
})