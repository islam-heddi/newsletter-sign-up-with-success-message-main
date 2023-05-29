function changeStyle(text){
    var element1 = document.getElementById("detail");
    element1.style.display = "none";
    var element2 = document.getElementById("image");
    element2.style.display = "none";
    var element3 = document.getElementById("succes");
    element3.style.display = "block";
    var element4 = document.getElementById("succed-operation");
    element4.innerText = "A confirmation email has been sent to " + text + ". Please open it and click the button inside to confirm your subscription."
}

function validate(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    console.log("the user have clicked");
    let email = document.getElementById("email").value;
    var validate = document.getElementById("erorr")
    if (mailformat.test(email)){
        changeStyle(email);
    } else if(email === ''){  
        document.getElementById("email").style.backgroundColor = "#ffe8e6";
        validate.innerText ="Enter the email first";
    }else{
        document.getElementById("email").style.backgroundColor = "#ffe8e6";
        validate.innerText ="valid email required";        
    }

}

