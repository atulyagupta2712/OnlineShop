window.addEventListener("DOMContentLoaded", login);







function login(){
    document.querySelector("#form-div").className = "show";

    document.querySelector("#login-submit").addEventListener("click",()=>{
        var loginNumber = document.querySelector("#form-number").value; 
        var loginEmail = document.querySelector("#login-email").value;
        var loginPassword = document.querySelector("#login-password").value;
        
        var loginObject = new Login(loginNumber, loginEmail, loginPassword);
        var pr = loginOperations.searchByLoginNumber(loginObject);
        pr.then(data =>{
            if(data.email == loginEmail){
                if(data.password == loginPassword){
                    localStorage.loginEmail = loginEmail;
                    document.querySelector("#message").innerHTML = "You have been successfully logged in...";
                    location.href = "welcomeAdmin.html"
                }
                else{
                    document.querySelector("#message").innerHTML = "Invalid password..."
                }
            }
            else{
                document.querySelector("#message").innerHTML = "Invalid email...."
            }
        })
   
    
})
}

